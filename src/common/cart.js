import React, {Component} from 'react';
import * as firebase from 'firebase';
import 'antd/dist/antd.css';
import Header from './header';
import Footer from './footer';
import firebaseConfig from './firebaseConfig';
import 'firebase/database';
import { Empty, message } from 'antd';

export default class Cart extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
          loggedIn: false,
          items: [],
          total : 0
        }
        if(!firebase.apps.length)
        {
          firebase.initializeApp(firebaseConfig);
        }
        this.removeItem = this.removeItem.bind(this);
    }
    removeItem = (e) => {
      console.log(e.target.id)
      var dbRef = firebase.database().ref().child('Cart').child(sessionStorage.getItem('uid')).child(e.target.id).remove().then(()=>{
        message.success('Item Removed');
        sessionStorage.removeItem('cart');
        var dbRef = firebase.database().ref().child('Cart');
          dbRef.once('value').then(function(snapshot){
            sessionStorage.setItem('cart',JSON.stringify(snapshot.child(sessionStorage.getItem('uid')).val()));
            document.location.reload();
          });
      }).catch(()=>{
        message.error('Failed')
      });
    }
    async componentWillMount()
    {
      var uid= sessionStorage.getItem('uid');
      if(uid!=undefined)
      {
        this.setState({items:JSON.parse(sessionStorage.getItem('cart')),loggedIn:true});
        var amt = 0;
        if(JSON.parse(sessionStorage.getItem('cart'))!=undefined)
        {
          Object.keys(JSON.parse(sessionStorage.getItem('cart'))).map((key)=>{
            amt=amt+parseInt(JSON.parse(sessionStorage.getItem('cart'))[key].Total_Price)});
          this.setState({total:amt});
        }
      }
    }
    render()
    {
      if(this.state.items!=null)
      {
        var keys = Object.keys(this.state.items);
      var tableRows = keys.map((key)=>{
        return(
          <tr>
          <td className="product-name">
            <h2 className="h5 text-black">{this.state.items[key].Med_Name}</h2>
          </td>
          <td>₹{parseInt(this.state.items[key].Total_Price)/parseInt(this.state.items[key].Quantity)}</td>
          <td>
            {this.state.items[key].Quantity}
          </td>
        <td>₹{this.state.items[key].Total_Price}</td>
          <td>
            <a className="btn btn-danger height-auto btn-sm" onClick={this.removeItem} id={key}>X</a>
          </td>
        </tr>)
      });
      }
      
        return(
            <div>
              <Header/>
                <div className="bg-light py-3">
  <div className="container">
    <div className="row">
      <div className="col-md-12 mb-0">
        <a href="/">Home</a> <span className="mx-2 mb-0">/</span> 
        <strong className="text-black">Cart</strong>
      </div>
    </div>
  </div>
</div>

            
{ this.state.loggedIn?<div className="site-section">
  <div className="container">
    <div className="row mb-5">
      {this.state.items!=undefined?
      
      <form className="col-md-12" method="post">
        <div className="site-blocks-table">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th className="product-name">Product</th>
                <th className="product-price">Price</th>
                <th className="product-quantity">Quantity</th>
                <th className="product-total">Total</th>
                <th className="product-remove">Remove Item</th>
              </tr>
            </thead>
            <tbody>
              {tableRows}
            </tbody>
          </table>
        </div>
      </form>:<form className="col-md-12" method="post"><Empty description={<span>Cart is Empty</span>}/></form>}
    </div>
    {this.state.items?
    <div className="row">
      <div className="col-md-6">
        <div className="row mb-5">
            <button className="btn btn-outline-primary btn-md btn-block"><a href="/shop" style={{color:'#000000'}}>Continue Shopping</a></button>
        </div>
      </div>
      <div className="col-md-6 pl-5">
        <div className="row justify-content-end">
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-12 text-right border-bottom mb-5">
                <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-md-6">
                <span className="text-black">Total</span>
              </div>
              <div className="col-md-6 text-right">
                <strong className="text-black">₹{this.state.total}</strong>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <button className="btn btn-primary btn-lg btn-block"><a href="/checkout" style={{color:'#000000'}}>Proceed To Checkout</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>:<div className="row">
      <div className="col-md-12">
      <div className="row mb-5">
            <button className="btn btn-outline-primary btn-md btn-block"><a href="/shop" style={{color:'#000000'}}>Continue Shopping</a></button>
        </div>
      </div>
      </div>} 
  </div>
</div>:<div><br/><Empty description={<span>Please Login</span>}/><br/><br/></div>}
<Footer/>
</div>
        )
    }
}