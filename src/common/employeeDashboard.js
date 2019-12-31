import React from 'react';
import 'antd/dist/antd.css';
import {Row,Col} from 'antd';
import { Card, Icon, Button, Input, Upload, Divider } from 'antd';
import Header from './header';
import Footer from './footer';
import { Empty,message } from 'antd';
import * as firebase from 'firebase';
import firebaseConfig from './firebaseConfig';
import 'firebase/auth';
import 'firebase/database';


const { Meta } = Card;
export default class EmployeeDashboard extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            detailsVisible: false,
            settings: false,
            eid: '',
            phone: '',
            email: '',
            name: '',
            transactions: [],
            vendors: [],
            image: 'default',
            last_login_date: '',
            thumb_image: ''
        }
        if(!firebase.apps.length)
        {
          firebase.initializeApp(firebaseConfig);
        }
        this.update = this.update.bind(this)
    }
    update = (e) =>{
        if(this.state.name!= '' || this.state.phone!='')
        {
            var uid= sessionStorage.getItem('uid')
            message.loading('Updating Profile')
            firebase.database().ref().child(`Employee`).child(uid).update({
                Employee_ID: this.state.eid,
                Phone: this.state.phone,
                email: this.state.email,
                image: this.state.image,
                last_login_date: this.state.last_login_date,
                thumb_image: this.state.thumb_image,
                username: this.state.name
            }).then(()=>{
                sessionStorage.removeItem('userDetails');
                message.success('Profile Updated');
                firebase.database().ref().child('Employee').child(uid).once('value').then(function(snapshot){
                    sessionStorage.setItem('userDetails',JSON.stringify(snapshot.val()));
                    document.location.reload()
                })
                
            }).catch(()=>{
                message.error('Failed')
            });
        }
    }
    async componentWillMount()
    {
      var uid =  sessionStorage.getItem('uid');
      if(uid!=undefined)
      {
        var userDetails = JSON.parse(sessionStorage.getItem('userDetails'));
        this.setState({eid: userDetails['Employee_ID'],name:userDetails['username'],phone:userDetails['Phone'],email:userDetails['email'],image: userDetails['image'],thumb_image: userDetails['thumb_image'],last_login_date: userDetails['last_login_date'],transactions:JSON.parse(sessionStorage.getItem('transactions')),vendors:JSON.parse(sessionStorage.getItem('vendors'))})
      }
      else
      {
        window.location.href="/"
      }
    }
    render()
    {
        if(this.state.transactions)
        {
            var transaction = this.state.transactions
            var keys= Object.keys(this.state.transactions)
            var data = keys.map((key)=>{
            return(
              <tr> 
                <td style={{width:'100%'}}><strong className="mx-2">{key}</strong></td>
                <td style={{width:'100%'}}>₹{transaction[key].Amount}</td>
              </tr>
            )})
        }
        if(this.state.vendors)
        {
            var vendors = this.state.vendors
            var keys = Object.keys(this.state.vendors)
            var vendorData = keys.map((key)=>{
            return(
              <tr> 
                <td style={{width:'100%'}}>{vendors[key].username}</td>
                <td style={{width:'100%'}}>{vendors[key].Shop_Name}</td>
                <td style={{width:'100%'}}>{vendors[key].Shop_Address}</td>
                <td style={{width:'100%'}}>{vendors[key].Shop_Phone}</td>
                <td style={{width:'100%'}}>{vendors[key].email}</td>
              </tr>
            )})
        }
        return(
            <div>
                <Header/>
                <div className="bg-light py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-0">
                                <a href="/">Home</a> <span className="mx-2 mb-0">/</span>
                                <strong className="text-black">Dashboard</strong>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.detailsVisible?<div className="bg-light py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-0">
                                <a href="javascript:void(0);" onClick={(e)=>{this.setState({detailsVisible:false,settings:false,vendorReport:false})}}><span className="mx-2 mb-0"><Icon type="arrow-left" style={{fontSize: '27px'}}/></span>Back</a>
                            </div>
                        </div>
                    </div>
                    <Divider/>{
                        this.state.settings?
                        <div>
                            <br/>
                            <Row type="flex" justify="space-around">
                                <Col span={8}><Input addonBefore={<Icon type="user" />} size="large" value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}}/></Col>
                                <Col span={8}><Input disabled="true" addonBefore={<Icon type="mail" />} size="large" value={this.state.email} disabled/></Col>
                            </Row>
                            <br/>
                    <Row type="flex" justify="space-around">
                        <Col span={8}><Input addonBefore={<Icon type="phone" />} size="large" value={this.state.phone} onChange={(e)=>{this.setState({phone:e.target.value})}}/></Col>
                        <Col span={8}><Input addonBefore={<Icon type="lock" />} size="large" disabled value={this.state.eid}/></Col>
                    </Row>
                    <br/>
                    <Row type="flex" justify="space-around">
                        <Col span={12}><Button type="primary" block onClick={this.update}>Update</Button></Col>
                    </Row>
                    </div>:null
                    }
                    {
                        this.state.orderHistory?
                        this.state.transactions?
                            <Row type="flex" justify="space-around">
                            <Col span={3}></Col>
                            <Col span={10}>
                              <div>
                              <table className="table table-bordered">
                                <thead>
                                  <tr>
                                    <th className="product-name">Month - Year</th>
                                    <th className="product-price">Price</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {data}
                                </tbody>
                              </table>
                            </div>
                            </Col>
                            <Col span={3}></Col>
                        </Row>:
                        <Empty description={<span>No Transactions</span>}/>:
                        null
                    }
                    {
                        this.state.vendorReport?
                        this.state.vendors?
                        <Row type="flex" justify="space-around">
                            <Col span={3}></Col>
                            <Col span={10}>
                              <div>
                              <table className="table table-bordered">
                                <thead>
                                  <tr>
                                    <th className="product-name">Vendor Name</th>
                                    <th className="product-price">Shop Name</th>
                                    <th className="product-price">Address</th>
                                    <th className="product-price">Phone</th>
                                    <th className="product-price">E-Mail</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {vendorData}
                                </tbody>
                              </table>
                            </div>
                            </Col>
                            <Col span={3}></Col>
                        </Row>:
                        <Empty description={<span>No Vendors</span>}/>:
                        null
                    }
                </div>:
                <div>
                <br/>
                <Row type="flex" justify="space-around">
                    <Col span={2}></Col>
                    <Col span={6}><Card style={{height: 220}} hoverable cover={<Icon type="dollar" style={{fontSize: '100px',paddingTop: '20px'}}/>} onClick={(e)=>{this.setState({detailsVisible:true,orderHistory:true})}}><Meta title="Manage Transactions" description="View and manage all your transactions right here. Generate a report as per your need." /></Card></Col>
                    <Col span={6}><Card style={{height: 220}} hoverable cover={<Icon type="shop" style={{fontSize: '100px',paddingTop: '20px'}}/>} onClick={(e)=>{this.setState({detailsVisible:true,vendorReport: true})}}><Meta title="Manage Vendors" description="View and manage all your vendors right here. Generate a report as per your need." /></Card></Col>
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