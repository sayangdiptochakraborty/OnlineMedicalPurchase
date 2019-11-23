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
          userType: '',
          cartItems: 0,
          searchVal: ''
        }
        if(!firebase.apps.length)
        {
          firebase.initializeApp(firebaseConfig);
        }
        this.handleClick = this.handleClick.bind(this);
        this.doCreateUserWithEmailAndPassword = this.doCreateUserWithEmailAndPassword.bind(this);
        this.doSignInWithEmailAndPassword = this.doSignInWithEmailAndPassword.bind(this);
        this.keyPress = this.keyPress.bind(this);
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
      this.setState({
        visible: false,

      });
    };
    doCreateUserWithEmailAndPassword()
    {
      if(this.state.email===''||this.state.phone===''||this.state.name===''||this.state.address==='')
      {
        message.error("Please input all fields.");
        return;
      }
      if(this.state.password.length<6)
      {
        message.error("Password should have at least 6 characters.");
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).catch(function(error){
        message.error(error.code+" : "+error.message);
        return;
      });
      setTimeout(() => {
        firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then(()=>{
        sessionStorage.setItem('uid',firebase.auth().currentUser.uid);
        if(this.state.type==='customer')
        {
          firebase.database().ref().child(`Buyer/${firebase.auth().currentUser.uid}`).set({
            Address: this.state.address,
            Phone: this.state.phone,
            email: this.state.email,
            username: this.state.name,
            image: "default",
            thumb_image: "default",
          }).then(()=>{
            var dbRef = firebase.database().ref().child('Buyer').child(firebase.auth().currentUser.uid);
            dbRef.on('value',snap=>sessionStorage.setItem('userDetails',JSON.stringify(snap.val())));
            sessionStorage.setItem('type','customer');
            document.location.reload();
          }).catch(function(error){
            message.log(error.message);
          })
          
        }
        if(this.state.type==='vendor')
        {
          firebase.database().ref().child(`Seller/${firebase.auth().currentUser.uid}`).set({
            Shop_Address: this.state.address,
            Shop_Phone: this.state.phone,
            email: this.state.email,
            Shop_Name: this.state.name,
            username: this.state.name,
            image: "default",
          }).then(()=>{
            var dbRef = firebase.database().ref().child('Seller').child(firebase.auth().currentUser.uid);
            dbRef.on('value',snap=>sessionStorage.setItem('userDetails',JSON.stringify(snap.val())));
            sessionStorage.setItem('type','vendor');
          }).catch(function(error){
            message.log(error.message);
          })
          document.location.reload();
        }
        }).catch(function(error){
          message.error(error.code+" : "+error.message);
          return;
        });
      },2500)
    }
    doSignInWithEmailAndPassword = (e) =>
    {
      firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then(()=>{
        if(this.state.type==='customer')
        {
          var dbRef = firebase.database().ref().child('Buyer');
          dbRef.once('value').then(function(snapshot){
            if(snapshot.child(firebase.auth().currentUser.uid).val()===null)
            {
              throw new Error;
            }
            sessionStorage.setItem('uid',firebase.auth().currentUser.uid);
            sessionStorage.setItem('userDetails',JSON.stringify(snapshot.child(firebase.auth().currentUser.uid).val()));
            sessionStorage.setItem('type','customer');
            document.location.reload();
          }).catch(function(error){
            sessionStorage.removeItem('uid');
            sessionStorage.removeItem('userDetails')
            sessionStorage.removeItem('type');
            message.warning('NOT CUSTOMER ACCOUNT')
            return;
          })

        }
        else if(this.state.type==='vendor')
        {
          var ref = firebase.database().ref().child('Seller')
          ref.once('value').then(function(snap){
            if(snap.child(firebase.auth().currentUser.uid).val()===null)
            {
              throw new Error;
            }
            sessionStorage.setItem('uid',firebase.auth().currentUser.uid);
            sessionStorage.setItem('userDetails',JSON.stringify(snap.child(firebase.auth().currentUser.uid).val()));
            sessionStorage.setItem('type','vendor');
            document.location.reload();
          }
          ).catch(function(error){
            {
              sessionStorage.removeItem('uid');
              sessionStorage.removeItem('userDetails')
              sessionStorage.removeItem('type');
              message.warning('NOT VENDOR ACCOUNT')
              return;
            }
          })
        }
        else
        {
          var refE = firebase.database().ref().child('Employee')
          refE.once('value').then(function(snapp){
            if(snapp.child(firebase.auth().currentUser.uid).val()===null)
            {
              throw new Error;
            }
            sessionStorage.setItem('uid',firebase.auth().currentUser.uid);
            sessionStorage.setItem('userDetails',JSON.stringify(snapp.child(firebase.auth().currentUser.uid).val()));
            sessionStorage.setItem('type','employee')
            document.location.reload();
          }).catch(function(error){
            {
              sessionStorage.removeItem('uid');
              sessionStorage.removeItem('userDetails')
              sessionStorage.removeItem('type');
              message.warning('NOT EMPLOYEE ACCOUNT')
              return;
            }
          })
        }
      }).catch(function(error){
        {
          sessionStorage.removeItem('uid');
          sessionStorage.removeItem('userDetails')
          sessionStorage.removeItem('type');
          message.error('INCORRECT CREDENTIALS')
          return;
        }
      })
      
    }

    doSignOut = (e) =>{
      firebase.auth().signOut();
      this.setState({loggedIn:false})
      sessionStorage.removeItem('uid');
      sessionStorage.removeItem('userDetails');
      sessionStorage.removeItem('type');
      window.location.href = 'http://localhost:3000/';
    }
    keyPress = (e) => {
      if(e.keyCode===13)
      {
        var searchVal=this.state.searchVal;
        searchVal=searchVal.toUpperCase()[0]+searchVal.toLowerCase().substring(1);
        window.location.href = 'http://localhost:3000/item/'+searchVal;
      }
    }
    async componentDidMount()
    {
      //firebase.initializeApp(firebaseConfig);
      var uid=sessionStorage.getItem('uid');
      if(uid!=undefined)
      {
        this.setState({loggedIn:true,visible:false})
        var dbRef = firebase.database().ref().child('Cart');
          dbRef.once('value').then(function(snapshot){
            sessionStorage.setItem('cart',JSON.stringify(snapshot.child(uid).val()));
          });
      }
      else
      {
        sessionStorage.removeItem('userDetails')
        sessionStorage.removeItem('type');
        
      }

    }
    render()
    {
      if(this.state.loggedIn)
      {
        var Name='USER';
        var type=sessionStorage.getItem('type')
        if(type==='vendor')
        {
          Name = JSON.parse(sessionStorage.getItem('userDetails')).Shop_Name;
        }
        else
        {
          Name = JSON.parse(sessionStorage.getItem('userDetails')).username;
        }
      }
        return(
            <div className="site-navbar py-2">
              <div className={this.state.search?"search-wrap active":"search-wrap"}>
          <div className="container">
            <a className="search-close js-search-close" style={{right:'80px'}}><input ref="fileUploader" type="file" style={{display:"none"}}/><Icon type="camera" style={{fontSize: '30px'}} onClick={this.handleClick}/></a>
            <a href="javascript:void(0)" className="search-close js-search-close"><Icon type="close" style={{fontSize: '30px'}} onClick={(e)=>{this.setState({search:false})}}/></a>
              <input type="text" className="form-control" placeholder="Search your medicine and hit enter..." value={this.state.searchVal} onChange={(e)=>{this.setState({searchVal:e.target.value})}} onKeyDown={this.keyPress}/>
          </div>
        </div>
        <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo">
            <div className="site-logo">
              <a href="/" className="js-logo-clone"><img width={50} height={50} src="/images/logo.png"/>&nbsp;&nbsp;GETMEDS</a>
            </div>
          </div>
          <div className="main-nav d-none d-lg-block">
            <nav className="site-navigation text-right text-md-center" role="navigation">
              <ul className="site-menu js-clone-nav d-none d-lg-block">
                
                <li className={this.props!=undefined?this.props.activeItem!=undefined?this.props.activeItem.homeActive?"active":"":"":""}><a href="/">Home</a></li>
                <li className={this.props!=undefined?this.props.activeItem!=undefined?this.props.activeItem.storeActive?"active":"":"":""}><a href="/shop">Store</a></li>
                <li className={this.props!=undefined?this.props.activeItem!=undefined?this.props.activeItem.aboutActive?"active":"":"":""}><a href="/about">About</a></li>
                <li className={this.props!=undefined?this.props.activeItem!=undefined?this.props.activeItem.contactActive?"active":"":"":""}><a href="/contact">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div className="icons">
            <a href="javascript:void(0)" className="icons-btn d-inline-block"><Icon type="search" onClick={(e)=>{this.setState({search:true})}}style={{fontSize: '30px'}}/></a>
            &nbsp;
            &nbsp;
            {type==='vendor'||type=='employee'?null:<a href="/cart" className="icons-btn d-inline-block bag">
              <Icon type="shopping-cart" style={{fontSize: '30px'}}/>
            </a>}
            <a href="javascript:void(0)" className="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"><span className="icon-menu" /></a>
          </div>
          <div className="login">
              <nav className="site-navigation text-right text-md-center" role="navigation">
                {this.state.loggedIn?<ul className="site-menu js-clone-nav d-none d-lg-block">
                      <li className="has-children">
                          <a><Icon type="user" style={{fontSize: '30px'}}/><Icon type="caret-down" style={{fontSize: '25px'}}/></a>
                          <ul className="dropdown" style={{marginLeft: '-70px'}}>
                              <li><a href="javascript:void(0)">Howdy {Name}!</a></li>
                              <li><a href={type==='customer'?"/dashboard/user":type==='vendor'?"/dashboard/vendor":"/dashboard/employee"}>Dashboard</a></li>
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
                        <div className="row" style={{marginLeft:'110px'}}>
                          <Radio.Group defaultValue="customer" buttonStyle="solid" style={{width:'100%'}} value={this.state.type} onChange={(e)=>{this.setState({type:e.target.value})}}>
                            <Radio.Button value="customer">Customer</Radio.Button>
                            <Radio.Button value="vendor">Vendor</Radio.Button>
                          </Radio.Group>
                        </div>
                        <br/>
                        <br/>
                        
                        <Button type="primary" block onClick={this.doCreateUserWithEmailAndPassword}>
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
                          <div className="row" style={{marginLeft:'30px'}}>
                            <Radio.Group defaultValue="customer" buttonStyle="solid" style={{width:'100%'}} value={this.state.type} onChange={(e)=>{this.setState({type:e.target.value})}}>
                              <Radio.Button value="customer">Customer</Radio.Button>
                              <Radio.Button value="vendor">Vendor</Radio.Button>
                              <Radio.Button value="employee">Employee</Radio.Button>
                          </Radio.Group>
                          </div>
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