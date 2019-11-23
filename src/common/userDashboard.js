import React from 'react';
import 'antd/dist/antd.css';
import {Row,Col} from 'antd';
import { Card, Icon, Button, Input, Upload, Divider } from 'antd';
import Header from './header';
import Footer from './footer';
import * as firebase from 'firebase';
import firebaseConfig from './firebaseConfig';
import 'firebase/auth';
import 'firebase/database';
import 'antd/dist/antd.css';
import { Empty,message } from 'antd';
import { List, Avatar} from 'antd';
const { Meta } = Card;

const listData = [];
for (let i = 0; i < 6; i++) {
  listData.push({
    href: 'javascript:void(0)',
    title: `Product ${i}`,
    description:
      'Product Description',
    img: `/images/product_0${i+1}.png`
  });
}
const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );
export default class UserDashboard extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            detailsVisible: false,
            settings: false,
            orderHistory: false,
            monthlySubscription: false,
            address : '',
            phone: '',
            name: '',
            email: '',
            image: '',
            thumb_image: '',
            orders: [],
            subscriptions: []
        }
        if(!firebase.apps.length)
        {
          firebase.initializeApp(firebaseConfig);
        }
        this.update =  this.update.bind(this)
    }
    update = (e) => {
      var uid = sessionStorage.getItem('uid');
      firebase.database().ref().child('Buyer').child(sessionStorage.getItem('uid')).remove().then(()=>{
        firebase.database().ref().child(`Buyer/${uid}`).set({
          Address: this.state.address,
          Phone: this.state.phone,
          email: this.state.email,
          username: this.state.name,
          image: this.state.image,
          thumb_image: this.state.thumb_image,
        }).then(()=>{
          message.success('Details Updated')
          sessionStorage.removeItem('userDetails');
          var dbRef = firebase.database().ref().child('Buyer').child(uid);
          dbRef.on('value',snap=>sessionStorage.setItem('userDetails',JSON.stringify(snap.val())));
          document.location.reload();
        }).catch(function(error){
          message.log(error.message);
        })
      }).catch(()=>{
        message.error('Failed to Update.')
      })
    }
    async componentWillMount()
    {
      var uid =  sessionStorage.getItem('uid');
      if(uid!=undefined)
      {
        var userDetails = JSON.parse(sessionStorage.getItem('userDetails'));
        var orders = JSON.parse(sessionStorage.getItem('orders'));
        var subscription = JSON.parse(sessionStorage.getItem('subscription'));
        this.setState({name:userDetails['username'],address:userDetails['Address'],phone:userDetails['Phone'],email:userDetails['email'],image:userDetails['image'],thumb_image:userDetails['thumb_image'],orders:orders,subscriptions:subscription})
      }
      else
      {
        window.location.href="/"
      }
    }
    render()
    {
      if(this.state.subscriptions!=null)
      {
        var keys = Object.keys(this.state.subscriptions['Medicines']);
        var tableRows = keys.map((key)=>{
        return(
          <tr>
            <td>{this.state.subscriptions['Medicines'][key].Med_Name} <strong className="mx-2">x</strong> {this.state.subscriptions['Medicines'][key].Quantity}</td>
            <td>₹{this.state.subscriptions['Medicines'][key].Total_Price}</td>
          </tr>)
      });
      }
      if(this.state.orders!=null)
      {
        var orderKeys = Object.keys(this.state.orders);
        var orderTableRows = orderKeys.map((key)=>{
        var medicine = Object.keys(this.state.orders[key]['Medicines']);
        var t = medicine.map((med)=>{
          return(
            <tr> 
              <td style={{width:'100%'}}>{this.state.orders[key]['Medicines'][med].Med_Name}<strong className="mx-2">x</strong> {this.state.orders[key]['Medicines'][med].Quantity}</td>
            <td style={{width:'100%'}}>₹{this.state.orders[key]['Medicines'][med].Total_Price}</td>
            </tr>
          )
        });
        return(
          <tr>
            <td><strong className="mx-2">#{key}</strong></td>
            <td>{this.state.orders[key]['Info']['Date']}</td>
            <td><strong className="mx-2">{this.state.orders[key]['Info']['Status']}</strong></td>
            <td>
              {t}
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
                                <a href="index.html">Home</a> <span className="mx-2 mb-0">/</span>
                                <strong className="text-black">Dashboard</strong>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.detailsVisible?<div className="bg-light py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-0">
                                <a href="javascript:void(0);" onClick={(e)=>{this.setState({detailsVisible:false,settings:false,monthlySubscription:false,orderHistory:false})}}><span className="mx-2 mb-0"><Icon type="arrow-left" style={{fontSize: '27px'}}/></span>Back</a>
                            </div>
                        </div>
                    </div>
                    <Divider/>{
                        this.state.settings?
                        <div>
                    <br/>
                    <Row type="flex" justify="space-around">
                        <Col span={8}><Input addonBefore={<Icon type="user" />}  defaultValue={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}} size="large"/></Col>
                        <Col span={8}><Input disabled="true" addonBefore={<Icon type="mail" />}  defaultValue={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}} size="large"/></Col>
                    </Row>
                    <br/>
                    <Row type="flex" justify="space-around">
                        <Col span={8}><Input addonBefore={<Icon type="phone" />}  defaultValue={this.state.phone} onChange={(e)=>{this.setState({phone:e.target.value})}} size="large"/></Col>
                        <Col span={8}><Input addonBefore={<Icon type="environment" />}  defaultValue={this.state.address} onChange={(e)=>{this.setState({address:e.target.value})}} size="large"/></Col>
                    </Row>
                    <br/>
                    <Row type="flex" justify="space-around">
                        <Col span={12}><Button type="primary" block onClick={this.update}>Update</Button></Col>
                    </Row>
                    </div>:null
                    }
                    {
                        this.state.orderHistory?
                        <Row type="flex" justify="space-around">
                            <Col span={3}></Col>
                            <Col span={10}>
                              {this.state.orders!=null?
                              <div>
                              <table className="table table-bordered">
                                <thead>
                                  <tr>
                                    <th className="product-name">Order ID</th>
                                    <th className="product-price">Date</th>
                                    <th className="product-quantity">Status</th>
                                    <th className="product-total">Items</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {orderTableRows}
                                </tbody>
                              </table>
                            </div>
                            :<Empty description={<span>No subscriptions</span>}/>
                              }
                            </Col>
                            <Col span={3}></Col>
                        </Row>
                        :null
                    }
                    {
                        this.state.monthlySubscription?
                        <Row type="flex" justify="space-around">
                            <Col span={2}></Col>
                            <Col span={12} style={{textAlign: 'center',alignContent: 'center'}}>
                              {this.state.subscriptions!=undefined ||this.state.subscriptions!=null?
                              <div>
                                <Card style={{height: 220}} hoverable><Meta title="Subscription" description={<div ><h2>{this.state.subscriptions['Info']['duration']} - {this.state.subscriptions['Info']['start_date']} - {this.state.subscriptions['Info']['discount']} OFF</h2>
                                <table className="table site-block-order-table mb-5">
                                  <thead>
                                    <tr><th>Product</th>
                                        <th>Total</th>
                                    </tr></thead>
                                  <tbody>
                                    {tableRows}
                                  </tbody>
                                </table>
                                </div>} /></Card>
                              </div>
                              :<Empty description={<span>No subscriptions</span>}/>
                              }
                            </Col>
                            <Col span={2}></Col>
                        </Row>
                        :null
                    }
                </div>:
                <div>
                <br/>
                <Row type="flex" justify="space-around">
                    <Col span={2}></Col>
                    <Col span={6}><Card style={{height: 220}} hoverable cover={<Icon type="history" style={{fontSize: '100px',paddingTop: '20px'}}/>} onClick={(e)=>{this.setState({detailsVisible:true,orderHistory:true})}}><Meta title="Order History" description="View all your current and ongoing orders." /></Card></Col>
                    <Col span={6}><Card style={{height: 220}} hoverable cover={<Icon type="schedule" style={{fontSize: '100px',paddingTop: '20px'}}/>} onClick={(e)=>{this.setState({detailsVisible:true,monthlySubscription: true})}}><Meta title="Monthly Subscription" description="Manage your monthly medicine subscriptions here." /></Card></Col>
                    <Col span={2}></Col>
                </Row>
                <br/>
                <br/>
                <Row type="flex" justify="space-around">
                    <Col span={6}><Card style={{height: 220}} hoverable cover={<Icon type="setting" style={{fontSize: '100px',paddingTop: '20px'}}/>} onClick={(e)=>{this.setState({detailsVisible:true,settings:true})}}><Meta title="Settings" description="Change and update your profile settings." /></Card></Col>
                </Row>
                
                </div>}
                <br/>
                <br/>
                <Footer/>
            </div>
        )
    }
}