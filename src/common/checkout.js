import React, {Component} from 'react';
import 'antd/dist/antd.css';
import Header from './header';
import Footer from './footer';
import * as firebase from 'firebase';
import firebaseConfig from './firebaseConfig';
import 'firebase/auth';
import 'firebase/database';
import 'antd/dist/antd.css';
import { Empty,message } from 'antd';


const uuidv1 = require('uuid/v1');
export default class Checkout extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            collapseCard: false,
            collapseUpi : false,
            collapsePay : false,
            address : '',
            phone: '',
            name: '',
            email: '',
            items: [],
            total: 0,
            subscription: "1",
        }
        if(!firebase.apps.length)
        {
          firebase.initializeApp(firebaseConfig);
        }
        this.placeOrder = this.placeOrder.bind(this)
    }

    placeOrder = (e) =>{
      var uuid = uuidv1();
      var d = new Date();
      d = new Date(d.getTime() - 3000000);
      var date_format_str = d.getFullYear().toString()+"-"+((d.getMonth()+1).toString().length==2?(d.getMonth()+1).toString():"0"+(d.getMonth()+1).toString())+"-"+(d.getDate().toString().length==2?d.getDate().toString():"0"+d.getDate().toString())+" "+(d.getHours().toString().length==2?d.getHours().toString():"0"+d.getHours().toString())+":"+((parseInt(d.getMinutes()/5)*5).toString().length==2?(parseInt(d.getMinutes()/5)*5).toString():"0"+(parseInt(d.getMinutes()/5)*5).toString())+":00";

      var date = d.getFullYear().toString()+"-"+((d.getMonth()+1).toString().length==2?(d.getMonth()+1).toString():"0"+(d.getMonth()+1).toString())+"-"+(d.getDate().toString().length==2?d.getDate().toString():"0"+d.getDate().toString());

      var medicine = JSON.parse(sessionStorage.getItem('cart'));
      var info = {
        Date: date,
        Status: "Ongoing",
        TimeStamp: date_format_str
      }
      var uid = sessionStorage.getItem('uid');
      if(this.state.subscription!='1')
      {
        var discount = this.state.subscription === '2'?'10%':this.state.subscription === '3'?'20%':'30%';
        var duration = this.state.subscription === '2'?'3 months':this.state.subscription === '3'?'6 months':'12 months';
        var info2 = {
          discount: discount,
          duration: duration,
          start_date: date
        }
        firebase.database().ref().child(`Subscription/${uid}`).set({
          Info : info2,
          Medicines: medicine
        }).then(()=>{
          message.success('Subscription Added')
        }).catch(()=>{
          message.error('Failed.')
        });
      }
      firebase.database().ref().child(`Order History/${uid}/${uuid}`).set({
        Info : info,
        Medicines: medicine
      }).then(()=>{
        firebase.database().ref().child('Cart').child(uid).remove().then(()=>{
          sessionStorage.removeItem('cart');
          message.success('Order Placed #'+uuid)
          window.location.href="/thankyou"
        }).catch(()=>{
          message.error('Failed to Place Order')
        });
      }).catch(()=>{
        message.error('Failed to Place Order')
      });

      
    }
    handleChange = (e) =>{
      this.setState({subscription:e.target.value})
    }
    async componentWillMount()
    {
      var uid =  sessionStorage.getItem('uid');
      if(uid!=undefined)
      {
        var userDetails = JSON.parse(sessionStorage.getItem('userDetails'));
        var cart= JSON.parse(sessionStorage.getItem('cart'));
        this.setState({name:userDetails['username'],address:userDetails['Address'],phone:userDetails['Phone'],email:userDetails['email'],items:cart})
        var amt = 0;
        if(JSON.parse(sessionStorage.getItem('cart'))!=undefined)
        {
          Object.keys(JSON.parse(sessionStorage.getItem('cart'))).map((key)=>{
            amt=amt+parseInt(JSON.parse(sessionStorage.getItem('cart'))[key].Total_Price)});
          this.setState({total:amt});
        }
      }
      else
      {
        message.error('Please Login. Redirecting to Home Page.');
        setTimeout(()=>{
          window.location.href="/";
        },1500);
      }
    }
    render()
    { var uid =  sessionStorage.getItem('uid');
      var keys = Object.keys(this.state.items);
      var tableRows = keys.map((key)=>{
        return(
          <tr>
            <td>{this.state.items[key].Med_Name} <strong className="mx-2">x</strong> {this.state.items[key].Quantity}</td>
            <td>₹{this.state.items[key].Total_Price}</td>
          </tr>)
      });
      return(
            <div>
              <Header/>
                <div className="bg-light py-3">
  <div className="container">
    <div className="row">
      <div className="col-md-12 mb-0">
        <a href="index.html">Home</a> <span className="mx-2 mb-0">/</span>
        <strong className="text-black">Checkout</strong>
      </div>
    </div>
  </div>
</div>
{uid!=undefined || this.state.items!=undefined?
<div className="site-section">
  <div className="container">
    <div className="row">
      <div className="col-md-6 mb-5 mb-md-0">
        <h2 className="h3 mb-3 text-black">Billing Details</h2>
        <div className="p-3 p-lg-5 border">
          <div className="form-group">
            <label htmlFor="c_country" className="text-black">Subscription Plan<span className="text-danger">*</span></label>
              <select id="c_country" className="form-control" value={this.state.subscription} onChange={this.handleChange}>
                <option value="1">NO</option>
                <option value="2">YES - 3 MONTHS</option>
                <option value="3">YES - 6 MONTHS</option>
                <option value="4">YES - 12 MONTHS</option>
              </select>
          </div>
          <div className="form-group row">
            <div className="col-md-12">
              <label htmlFor="name" className="text-black">Name <span className="text-danger">*</span></label>
              <input type="text" className="form-control" id="name" name="name" value={this.state.name} />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-md-12">
              <label htmlFor="c_address" className="text-black">Address <span className="text-danger">*</span></label>
              <input type="text" className="form-control" id="c_address" name="c_address" placeholder="Street address" value={this.state.address} />
            </div>
          </div>
          <div className="form-group row mb-5">
            <div className="col-md-6">
              <label htmlFor="c_email_address" className="text-black">Email Address <span className="text-danger">*</span></label>
              <input type="text" className="form-control" id="c_email_address" name="c_email_address" value={this.state.email} disabled/>
            </div>
            <div className="col-md-6">
              <label htmlFor="c_phone" className="text-black">Phone <span className="text-danger">*</span></label>
              <input type="text" className="form-control" id="c_phone" name="c_phone" placeholder="Phone Number" value={this.state.phone} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="c_order_notes" className="text-black">Order Notes</label>
            <textarea name="c_order_notes" id="c_order_notes" cols={30} rows={5} className="form-control" placeholder="Write your notes here..." defaultValue={""} />
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="row mb-5">
          <div className="col-md-12">
            <h2 className="h3 mb-3 text-black">Your Order</h2>
            <div className="p-3 p-lg-5 border">
              <table className="table site-block-order-table mb-5">
                <thead>
                  <tr><th>Product</th>
                    <th>Total</th>
                  </tr></thead>
                <tbody>
                  {tableRows}
                  <tr>
                    <td className="text-black font-weight-bold"><strong>Order Total</strong></td>
                    <td className="text-black font-weight-bold"><strong>₹{this.state.total}</strong></td>
                  </tr>
                </tbody>
              </table>
              <div className="border mb-3">
                <h3 className="h6 mb-0"><a className={this.state.collapseCard?"d-block":"d-block collapsed"} href="javascript:void(0);" onClick={(e)=>{this.setState(prevState=>({collapseCard:!prevState.collapseCard}))}} data-toggle="collapse" role="button"
                aria-expanded="false" aria-controls="collapsebank">Credit / Debit Card</a></h3>
                <div className={this.state.collapseCard?"collapse show":"collapse"} id="collapsebank">
                  <div className="py-2 px-4">
                    <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the
                      payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                  </div>
                </div>
              </div>
              <div className="border mb-3">
                <h3 className="h6 mb-0"><a className={this.state.collapseUpi?"d-block":"d-block collapsed"} data-toggle="collapse" href="javascript:void(0);" role="button" aria-expanded="false"
                onClick={(e)=>{this.setState(prevState=>({collapseUpi:!prevState.collapseUpi}))}} aria-controls="collapsecheque">NetBanking / UPI</a></h3>
                <div className={this.state.collapseUpi?"collapse show":"collapse"} id="collapsecheque">
                  <div className="py-2 px-4">
                    <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the
                      payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                  </div>
                </div>
              </div>
              <div className="border mb-5">
                <h3 className="h6 mb-0"><a className={this.state.collapsePay?"d-block":"d-block collapsed"} onClick={(e)=>{this.setState(prevState=>({collapsePay:!prevState.collapsePay}))}} data-toggle="collapse" href="javascript:void(0);" role="button" aria-expanded="false" aria-controls="collapsepaypal">PayTM / PayPal</a></h3>
                <div className={this.state.collapsePay?"collapse show":"collapse"} id="collapsepaypal">
                  <div className="py-2 px-4">
                    <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the
                      payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <button className="btn btn-primary btn-lg btn-block"><a onClick={this.placeOrder} style={{color:'#000000'}}>Place Order</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* </form> */}
  </div>
</div>:<div><br/><Empty description={<span>Oops!</span>}/><br/></div>}
<Footer/>
            </div>
        )
    }
}