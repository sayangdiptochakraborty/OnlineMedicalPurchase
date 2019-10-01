import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {Icon} from 'antd';
import { Modal, Button } from 'antd';
import { tsObjectKeyword } from '@babel/types';

export default class Header extends Component{
    constructor(props)
    {
        super(props);
        this.state={
          loggedIn : true,
          visible : false
        }
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
    render()
    {
        return(
            <div className="site-navbar py-2">
        <div className="search-wrap">
          <div className="container">
            <a href="#" className="search-close js-search-close"><span className="icon-close2" /></a>
            <form action="#" method="post">
              <input type="text" className="form-control" placeholder="Search keyword and hit enter..." />
            </form>
          </div>
        </div>
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <div className="logo">
              <div className="site-logo">
                <a href="index.html" className="js-logo-clone">GETMEDS</a>
              </div>
            </div>
            <div className="main-nav d-none d-lg-block">
              <nav className="site-navigation text-right text-md-center" role="navigation">
                <ul className="site-menu js-clone-nav d-none d-lg-block">
                  <li className="active"><a href="index.html">Home</a></li>
                  <li><a href="shop.html">Store</a></li>
                  <li className="has-children">
                    <a>Dropdown&nbsp;<Icon type="caret-down" style={{fontSize: '25px'}}/></a>
                    <ul className="dropdown">
                      <li><a href="#">Supplements</a></li>
                      <li><a href="#">Vitamins</a></li>
                      <li><a href="#">Diet &amp; Nutrition</a></li>
                      <li><a href="#">Tea &amp; Coffee</a></li>
                    </ul>
                  </li>
                  <li><a href="about.html">About</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </nav>
            </div>
            <div className="icons">
              <a href="#" className="icons-btn d-inline-block js-search-open"><Icon type="search"  style={{fontSize: '30px'}}/></a>
              &nbsp;
              &nbsp;
              <a href="cart.html" className="icons-btn d-inline-block bag">
                <Icon type="shopping-cart" style={{fontSize: '30px'}}/>
                {this.state.loggedIn?<span class="number"style={{marginTop: '-15px'}}>2</span>:null}
              </a>
              <a href="#" className="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"><span className="icon-menu" /></a>
            </div>
            <div className="login">
                <nav className="site-navigation text-right text-md-center" role="navigation">
                  {this.state.loggedIn?<ul className="site-menu js-clone-nav d-none d-lg-block">
                        <li className="has-children">
                            <a><Icon type="user" style={{fontSize: '30px'}}/><Icon type="caret-down" style={{fontSize: '25px'}}/></a>
                            <ul className="dropdown" style={{marginLeft: '-70px'}}>
                                <li><a href="#">Howdy Derp!</a></li>
                                <li><a href="#">Dashboard</a></li>
                                <li onClick={(e)=>{this.setState({loggedIn:false})}}><a href="#">Sign Out</a></li>
                             </ul>
                        </li>
                    </ul>:<ul className="site-menu js-clone-nav d-none d-lg-block">
                        <li className="has-children" onClick={this.showModal}><a><Icon type="user-add" style={{fontSize: '30px'}}/><Icon type="caret-down" style={{fontSize: '25px'}}/></a>
                          <ul className="dropdown" style={{marginLeft: '-70px'}}>
                              <li style={{textAlign:'center'}} onClick={this.showModal}><a href="#">Login or Sign Up</a></li>
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
                        <p> HELLO</p>
                      </Modal>
                </nav>
            </div>
          </div>
        </div>
      </div>
        )
    }
}