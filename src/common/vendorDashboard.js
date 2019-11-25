import React from 'react';
import 'antd/dist/antd.css';
import {Row,Col} from 'antd';
import { Radio } from 'antd';
import { Card, Icon, Button, Input, Upload, Divider } from 'antd';
import { List, Avatar} from 'antd';
import Header from './header';
import Footer from './footer';
import * as firebase from 'firebase';
import firebaseConfig from './firebaseConfig';
import 'firebase/auth';
import 'firebase/database';
import 'antd/dist/antd.css';
import { Empty,message } from 'antd';

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
  
  

const { Meta } = Card;
export default class VendorDashboard extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            detailsVisible: false,
            settings: false,
            addMedicine: false,
            itemList: false,
            orderList: false,
            name: '',
            address: '',
            phone: '',
            email: '',
            transaction: [],
            image: '',
            thumb_image: '',
            username: '',
            itemName: '',
            itemPrice: '',
            itemExpiry: '',
            itemType: 'tablet',
            itemUsage: 'Medicine'
        }
        if(!firebase.apps.length)
        {
          firebase.initializeApp(firebaseConfig);
        }
        this.update =  this.update.bind(this)
        this.addItem = this.addItem.bind(this)
    }
    addItem = (e) => {
      var meds = JSON.parse(sessionStorage.getItem('meds'))
      if(meds[this.state.name]!=null)
      {
        message.loading('Adding Item')
        firebase.database().ref().child(`Medicine/${this.state.itemName}/Shop`).child(this.state.name).update({
          Expiry: this.state.itemExpiry,
          Name: this.state.name,
          image: this.state.image
        }).then(()=>{message.success('Item Added');setTimeout(()=>{document.location.reload();},1500)}).catch(()=>{
          message.error('Failed')
        });
      }
      else
      {
        firebase.database().ref().child(`Medicine/${this.state.itemName}`).set({
          Info: {
            Name: this.state.itemName,
            Price: this.state.itemPrice,
            Type: this.state.itemType,
            usage: this.state.itemUsage
          },
        }).then(()=>{
          message.loading('Adding Item')
        }).catch(()=>{
          message.error('Failed')
        })
        setTimeout(()=>{
        firebase.database().ref().child(`Medicine/${this.state.itemName}/Shop/${this.state.name}`).set({
          Expiry: this.state.itemExpiry,
          Name: this.state.name,
          image: this.state.image
        }).then(()=>{message.success('Item Added');setTimeout(()=>{document.location.reload();},800)}).catch(()=>{
          message.error('Failed')
        })},2000)
      }
    }
    update = (e) => {
      var uid = sessionStorage.getItem('uid');
        firebase.database().ref().child(`Seller/${uid}`).set({
          Shop_Address: this.state.address,
          Shop_Phone: this.state.phone,
          Shop_Name: this.state.name,
          email: this.state.email,
          username: this.state.username,
          image: this.state.image,
          thumb_image: this.state.thumb_image,
          Transaction: this.state.transaction
        }).then(()=>{
          message.success('Details Updated')
          sessionStorage.removeItem('userDetails');
          var dbRef = firebase.database().ref().child('Seller').child(uid);
          dbRef.on('value',snap=>sessionStorage.setItem('userDetails',JSON.stringify(snap.val())));
          document.location.reload();
        }).catch(function(error){
          message.log(error.message);
        })
    }
    async componentWillMount()
    {
      var uid = sessionStorage.getItem('userDetails')
      if(uid!=undefined)
      {
        var userDetails = JSON.parse(sessionStorage.getItem('userDetails'))
        this.setState({name: userDetails.Shop_Name, address: userDetails.Shop_Address, phone: userDetails.Shop_Phone, transaction: userDetails.Transaction, image:userDetails.image, thumb_image: userDetails.thumb_image,username: userDetails.username})
      }
    }
    render()
    {
        return(
            <div>
              <Header/>
                <div className="bg-light py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-0">
                                <a href="javascript:void(0);">Home</a> <span className="mx-2 mb-0">/</span>
                                <strong className="text-black">Dashboard</strong>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.detailsVisible?<div className="bg-light py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-0">
                                <a href="javascript:void(0);" onClick={(e)=>{this.setState({detailsVisible:false,settings:false,addMedicine:false,itemList:false, orderList:false})}}><span className="mx-2 mb-0"><Icon type="arrow-left" style={{fontSize: '27px'}}/></span>Back</a>
                            </div>
                        </div>
                    </div>
                    <Divider/>{
                        this.state.settings?
                        <div>
                    <br/>
                    <Row type="flex" justify="space-around">
                        <Col span={8}><Input addonBefore={<Icon type="user" />}  defaultValue={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}} size="large"/></Col>
                        <Col span={8}><Input disabled="true" addonBefore={<Icon type="mail" />}  placeholder={this.state.email} size="large"/></Col>
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
                        this.state.addMedicine?<div>
                            <Row type="flex" justify="space-around">
                                <Col span={3}></Col>
                                <Col span={8} className="medDetail">
                                    <Input addonBefore={<span style={{width:'200px'}}>Item Name</span>} value={this.state.itemName} onChange={(e)=>{this.setState({itemName:e.target.value})}} size="large"/>
                                    <br/>
                                    <br/>
                                    <Input addonBefore={<span style={{width:'200px'}}>Item Price</span>} value={this.state.itemPrice} onChange={(e)=>{this.setState({itemPrice:e.target.value})}} size="large"/>
                                    <br/>
                                    <br/>
                                    <Input addonBefore={<span style={{width:'200px'}}>Best Before</span>} value={this.state.itemExpiry} onChange={(e)=>{this.setState({itemExpiry:e.target.value})}} size="large"/>
                                    <br/>
                                    <br/>
                                    <Radio.Group defaultValue={this.state.itemUsage} onChange={(e)=>{this.setState({itemUsage:e.target.value})}}size="large">
                                        <Radio.Button value="Medicine">Medicine</Radio.Button>
                                        <Radio.Button value="Supplement">Supplement</Radio.Button>
                                        <Radio.Button value="Diet">Diet</Radio.Button>
                                    </Radio.Group>
                                    <br/>
                                    <br/>
                                    <Row type="flex" justify="space-around">
                                      <Radio.Group defaultValue={this.state.itemType} onChange={(e)=>{this.setState({itemType:e.target.value})}}size="large">
                                        <Radio.Button value="tablet">Tablet</Radio.Button>
                                        <Radio.Button value="syrup">Syrup</Radio.Button>
                                      </Radio.Group>
                                    </Row>
                                    <br/>
                                    <br/>
                                    <Button type="primary" block onClick={this.addItem}>Add Item</Button>
                                </Col>
                                <Col span={3}></Col>
                            </Row>
                            <br/>
                        </div>:null
                    }
                    {
                        this.state.orderList?
                        <Row type="flex" justify="space-around">
                            <Col span={2}></Col>
                            <Col span={12}>
                            <List
                        itemLayout="vertical"
                        size="small"
                        pagination={{pageSize: 3,
                        }}
                        dataSource={listData}
                        renderItem={item => (
                          <List.Item
                            key={item.title}
                            actions={[
                              <IconText type="edit"/>,
                              <IconText type="delete"/>
                            ]}
                            extra={
                              <img
                                width={100}
                                alt="logo"
                                src={item.img}
                              />
                            }
                          >
                            <List.Item.Meta
                              title={<a href={item.href}>{item.title}</a>}
                              description={item.description}
                            />
                          </List.Item>)}/>
                            </Col>
                            <Col span={2}></Col>
                        </Row>
                        :null
                    }
                    {
                        this.state.itemList?
                        <Row type="flex" justify="space-around">
                            <Col span={2}></Col>
                            <Col span={12}>
                            <List
                        itemLayout="vertical"
                        size="small"
                        pagination={{pageSize: 3,
                        }}
                        dataSource={listData}
                        renderItem={item => (
                          <List.Item
                            key={item.title}
                            actions={[
                                <IconText type="edit"/>,
                                <IconText type="delete"/>
                            ]}
                            extra={
                              <img
                                width={100}
                                alt="logo"
                                src={item.img}
                              />
                            }
                          >
                            <List.Item.Meta
                              title={<a href={item.href}>{item.title}</a>}
                              description={item.description}
                            />
                          </List.Item>)}/>
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
                    <Col span={6}><Card style={{height: 250}} hoverable cover={<Icon type="plus-circle" style={{fontSize: '100px',paddingTop: '20px'}}/>} onClick={(e)=>{this.setState({detailsVisible:true,addMedicine:true})}}><Meta title="Add Medicine" description="Add a medicine, vitamin or supplement in the shop alongwith all the details" /></Card></Col>
                    <Col span={6}><Card style={{height: 250}} hoverable cover={<Icon type="bars" style={{fontSize: '100px',paddingTop: '20px'}}/>} onClick={(e)=>{this.setState({detailsVisible:true,itemList: true})}}><Meta title="View Medicines" description="Get a list of all your medicines, view and edit the items as per your need." /></Card></Col>
                    <Col span={2}></Col>
                </Row>
                <br/>
                <br/>
                <Row type="flex" justify="space-around">
                    <Col span={2}></Col>
                    <Col span={6}><Card style={{height: 250}} hoverable cover={<Icon type="file-done" style={{fontSize: '100px',paddingTop: '20px'}}/>} onClick={(e)=>{this.setState({detailsVisible:true,orderList:true})}}><Meta title="Orders and Report" description="Get a list of all your orders, download the report and revenue generated." /></Card></Col>
                    <Col span={6}><Card style={{height: 250}} hoverable cover={<Icon type="setting" style={{fontSize: '100px',paddingTop: '20px'}}/>} onClick={(e)=>{this.setState({detailsVisible:true,settings:true})}}><Meta title="Settings" description="Change and update your profile settings." /></Card></Col>
                    <Col span={2}></Col>
                </Row>
                
                </div>}
                <br/>
                <br/>
                <Footer/>
            </div>
        )
    }
}