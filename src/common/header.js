import React, {Component} from 'react';
import * as firebase from 'firebase';
import 'antd/dist/antd.css';
import {Icon} from 'antd';
import { Modal, Button } from 'antd';
import { tsObjectKeyword } from '@babel/types';
import { Input, Select, Divider, Typography} from'antd';
import firebaseConfig from './firebaseConfig';
import { Radio } from 'antd';
import 'firebase/auth';
import 'firebase/database';
import {message} from 'antd';
const { Option } = Select;
const { Title, Paragraph, Text } = Typography;



export default class Header extends Component{
    constructor(props)
    {
        super(props);
        this.state={
          loggedIn : false,
          visible : false,
          signup : true,
          search: false,
          name: '',
          phone: '',
          email: '',
          password: '',
          address: '',
          type: 'customer',
          userID: '',
          userName: '',
        }
        firebase.initializeApp(firebaseConfig);
        this.handleClick = this.handleClick.bind(this);
        

        this.auth = firebase.auth();
    }
    handleClick(e) {
      this.refs.fileUploader.click();
    }
    showModal = () => {
      this.setState({
        visible: true,
      });
    };
    handleOk = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };
  
    handleCancel = e => {
      console.log(e);
      this.setState({
        visible: false,

      });
    };
    doCreateUserWithEmailAndPassword()
    {
      this.auth.createUserWithEmailAndPassword(this.state.email,this.state.password)
    }
    doSignInWithEmailAndPassword = (e) =>
    {
      //firebase.initializeApp(firebaseConfig);
      this.auth.signInWithEmailAndPassword(this.state.email,this.state.password);
      message.success('Logged In');
      this.setState({loggedIn:true,visible:false,userID:this.auth.currentUser.uid});
      sessionStorage.setItem('uid',this.state.userID);
      var uid=sessionStorage.getItem('uid');
      this.setState({userName:firebase.database.ref('/medicine-delivery-8cc6f/Buyer/'+uid+'/username')});
    }

    doSignOut = (e) =>{
      this.auth.signOut();
      this.setState({loggedIn:false})
    }
    componentWillMount()
    {
      //firebase.initializeApp(firebaseConfig);
      var uid=sessionStorage.getItem('uid');
      if(uid!=undefined)
      {
        this.setState({userName:firebase.database.ref('/medicine-delivery-8cc6f/Buyer/'+uid+'/username')})
      }
    }
    render()
    {
        return(
            <div className="site-navbar py-2">
              <div className={this.state.search?"search-wrap active":"search-wrap"}>
          <div className="container">
            <a className="search-close js-search-close" style={{right:'80px'}}><input ref="fileUploader" type="file" style={{display:"none"}}/><Icon type="camera" style={{fontSize: '30px'}} onClick={this.handleClick}/></a>
            <a href="javascript:void(0)" className="search-close js-search-close"><Icon type="close" style={{fontSize: '30px'}} onClick={(e)=>{this.setState({search:false})}}/></a>
            <form action="#" method="post">
              <input type="text" className="form-control" placeholder="Search your medicine and hit enter..." />
            </form>
          </div>
        </div>
        <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo">
            <div className="site-logo">
              <a href="javascript:void(0)" className="js-logo-clone"><img width={50} height={50} src="/images/logo.png"/>&nbsp;&nbsp;GETMEDS</a>
            </div>
          </div>
          <div className="main-nav d-none d-lg-block">
            <nav className="site-navigation text-right text-md-center" role="navigation">
              <ul className="site-menu js-clone-nav d-none d-lg-block">
                <li className="active"><a href="index.html">Home</a></li>
                <li className="has-children">
                  <a>Store&nbsp;<Icon type="caret-down" style={{fontSize: '25px'}}/></a>
                  <ul className="dropdown">
                    <li><a href="javascript:void(0)">Supplements</a></li>
                    <li><a href="javascript:void(0)">Vitamins</a></li>
                    <li><a href="javascript:void(0)">Diet &amp; Nutrition</a></li>
                  </ul>
                </li>
                <li><a href="javascript:void(0)">About</a></li>
                <li><a href="javascript:void(0)">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div className="icons">
            <a href="javascript:void(0)" className="icons-btn d-inline-block"><Icon type="search" onClick={(e)=>{this.setState({search:true})}}style={{fontSize: '30px'}}/></a>
            &nbsp;
            &nbsp;
            <a href="cart.html" className="icons-btn d-inline-block bag">
              <Icon type="shopping-cart" style={{fontSize: '30px'}}/>
              {this.state.loggedIn?<span class="number"style={{marginTop: '-12px'}}>2</span>:null}
            </a>
            <a href="javascript:void(0)" className="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"><span className="icon-menu" /></a>
          </div>
          <div className="login">
              <nav className="site-navigation text-right text-md-center" role="navigation">
                {this.state.loggedIn?<ul className="site-menu js-clone-nav d-none d-lg-block">
                      <li className="has-children">
                          <a><Icon type="user" style={{fontSize: '30px'}}/><Icon type="caret-down" style={{fontSize: '25px'}}/></a>
                          <ul className="dropdown" style={{marginLeft: '-70px'}}>
                              <li><a href="javascript:void(0)">Howdy Derp!</a></li>
                              <li><a href="javascript:void(0)">Dashboard</a></li>
                              <li onClick={this.doSignOut}><a href="javascript:void(0)">Sign Out</a></li>
                           </ul>
                      </li>
                  </ul>:<ul className="site-menu js-clone-nav d-none d-lg-block">
                      <li className="has-children" onClick={this.showModal}><a><Icon type="user-add" style={{fontSize: '30px'}}/><Icon type="caret-down" style={{fontSize: '25px'}}/></a>
                        <ul className="dropdown" style={{marginLeft: '-70px'}}>
                            <li style={{textAlign:'center'}} onClick={this.showModal}><a href="javascript:void(0)">Login or Sign Up</a></li>
                        </ul>
                      </li>
                    </ul>}
                    <Modal
                      title="LOGIN OR SIGN UP"
                      visible={this.state.visible}
                      onOk={this.handleOk}
                      onCancel={this.handleCancel}
                      footer={null}
                    >
                      {this.state.signup?
                      <div className="row">
                        <Title level={3} style={{marginLeft:'118px'}}>Let's create your account!</Title>
                        <br/>
                        <br/>
                        <Input addonBefore={<Icon type="user" />} value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}} placeholder={this.state.type==='customer'?"John Sturgis":"Life Care Medicine Retailer"}/>
                        <br/>
                        <br/>
                        <Input addonBefore={<Icon type="mail" />} value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}} placeholder={this.state.type==='customer'?"john@gmail.com":"lifecare@medicare.com"}/>
                        <br/>
                        <br/>
                        
                        <Input addonBefore={<Icon type="phone" />} placeholder="9163825442" value={this.state.phone} onChange={(e)=>{this.setState({phone:e.target.value})}}/>
                        <br/>
                        <br/>
                        
                        <Input.Password addonBefore={<Icon type="lock" />} placeholder="password" value={this.state.password} onChange={(e)=>{this.setState({password:e.target.value})}}/>
                        <br/>
                        <br/>
                        <Input addonBefore={<Icon type="environment" />} placeholder="12 Baker Street" value={this.state.address} onChange={(e)=>{this.setState({address:e.target.value})}}/>
                        <br/>
                        <br/>
                        <div className="row" style={{marginLeft:'160px'}}>

                          <Radio.Group defaultValue="customer" buttonStyle="solid" style={{width:'100%'}} value={this.state.type} onChange={(e)=>{this.setState({type:e.target.value})}}>
                          <Radio.Button value="customer">Customer</Radio.Button>
                          <Radio.Button value="vendor">Vendor</Radio.Button>
                        </Radio.Group>
                        </div>
                        <br/>
                        <br/>
                        
                        <Button type="primary" block>
                          REGISTER
                        </Button>
                        <br/>
                        <br/>
                        
                        <Divider/>
                        <br/>
                        <br/>
                        <Text style={{marginLeft:'165px'}}>Already have an account? <a href="javascript:void(0)" onClick={(e)=>{this.setState({signup:false})}}>Login</a></Text>
                      </div>
                        
                        
                        : 
                        <div className="row">
                          <Title level={3} style={{marginLeft:'118px'}}>We're glad to see you again!</Title>
                          <br/>
                          <br/>
                          <Input addonBefore={<Icon type="mail" />} placeholder="john@gmail.com" value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}}/>
                          <br/>
                          <br/>
                          <Input.Password addonBefore={<Icon type="lock" />} placeholder="password" value={this.state.password} onChange={(e)=>{this.setState({password:e.target.value})}}/>
                          <br/>
                          <br/>
                          <Button type="primary" block onClick={this.doSignInWithEmailAndPassword}>
                            LOGIN
                          </Button>
                        <br/>
                        <br/>
                        
                        <Divider/>
                        <br/>
                        <br/>
                        <Text style={{marginLeft:'165px'}}>Don't have an account? <a href="javascript:void(0)" onClick={(e)=>{this.setState({signup:true})}}>Sign Up</a></Text>
                        </div>
                      }
                    </Modal>
              </nav>
          </div>
        </div>
      </div>
      </div>
        )
    }
}