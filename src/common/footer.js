import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {Icon} from 'antd';

export default class Footer extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
          <div>
            <div className="site-section bg-secondary bg-image" style={{backgroundImage: 'url("http://localhost:3000/images/bg_2.jpg")'}}>
  <div className="container">
    <div className="row align-items-stretch">
      <div className="col-lg-6 mb-5 mb-lg-0">
        <a href="#" className="banner-1 h-100 d-flex" style={{backgroundImage: 'url("http://localhost:3000/images/bg_1.jpg")'}}>
          <div className="banner-1-inner align-self-center">
            <h2>Pharma Products</h2>
            <p>Get all your pharacy products right under one roof. All our products are personally verified for quality, validity and health before they are sent to you.
            </p>
          </div>
        </a>
      </div>
      <div className="col-lg-6 mb-5 mb-lg-0">
        <a href="#" className="banner-1 h-100 d-flex" style={{backgroundImage: 'url("http://localhost:3000/images/bg_2.jpg")'}}>
          <div className="banner-1-inner ml-auto  align-self-center">
            <h2>Rated by Experts</h2>
            <p>9/10 Doctors recommend GetMeds. 
              "GetMeds delivers German medicines that are rarely available in local medicos." - Dr. Thomas Atwood, Neurologist, Mumbai
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>
          
            <footer className="site-footer">
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
        <div className="block-7">
          <h3 className="footer-heading mb-4">About Us</h3>
          <p>We are a startup that works to aid to the medical needs of all. We deliver genuine and verified medicines and health supplememnts at your doorstep. You name it, we get it for you. 
          </p>
        </div>
      </div>
      <div className="col-lg-3 mx-auto mb-5 mb-lg-0">
        <h3 className="footer-heading mb-4">Quick Links</h3>
        <ul className="list-unstyled">
          <li><a href="/shop">Supplements</a></li>
          <li><a href="/shop">Vitamins</a></li>
          <li><a href="/shop">Diet &amp; Nutrition</a></li>
        </ul>
      </div>
      <div className="col-md-6 col-lg-3">
        <div className="block-5 mb-5">
          <h3 className="footer-heading mb-4">Contact Info</h3>
          <ul className="list-unstyled">
            <li className="address"><Icon type="environment" style={{fontSize: '20px'}}/>&nbsp;203 Park Street Kolkata</li>
            <li className="phone"><Icon type="phone" style={{fontSize: '20px'}}/>&nbsp;<a href="tel://919163825442">+91 916 3825 442</a></li>
            <li className="email"><Icon type="mail" style={{fontSize: '20px'}}/>&nbsp;medcare@getmeds.com</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="row pt-5 mt-5 text-center">
      <div className="col-md-12">
        <p>
          Copyright © 2019
          All rights reserved | <a href="javascript:void(0);" className="text-primary">GetMeds</a>
        </p>
      </div>
    </div>
  </div>
</footer>
</div>
        )
    }
}