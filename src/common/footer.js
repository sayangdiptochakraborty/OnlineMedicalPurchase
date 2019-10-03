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
            <footer className="site-footer">
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
        <div className="block-7">
          <h3 className="footer-heading mb-4">About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quae reiciendis distinctio voluptates
            sed dolorum excepturi iure eaque, aut unde.</p>
        </div>
      </div>
      <div className="col-lg-3 mx-auto mb-5 mb-lg-0">
        <h3 className="footer-heading mb-4">Quick Links</h3>
        <ul className="list-unstyled">
          <li><a href="#">Supplements</a></li>
          <li><a href="#">Vitamins</a></li>
          <li><a href="#">Diet &amp; Nutrition</a></li>
          <li><a href="#">Tea &amp; Coffee</a></li>
        </ul>
      </div>
      <div className="col-md-6 col-lg-3">
        <div className="block-5 mb-5">
          <h3 className="footer-heading mb-4">Contact Info</h3>
          <ul className="list-unstyled">
            <li className="address"><Icon type="environment" style={{fontSize: '20px'}}/>&nbsp;203 Fake St. Mountain View, San Francisco, California, USA</li>
            <li className="phone"><Icon type="phone" style={{fontSize: '20px'}}/>&nbsp;<a href="tel://919163825442">+91 916 3825 442</a></li>
            <li className="email"><Icon type="mail" style={{fontSize: '20px'}}/>&nbsp;emailaddress@domain.com</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="row pt-5 mt-5 text-center">
      <div className="col-md-12">
        <p>
          Copyright ©
          All rights reserved | This template is made
          with <i className="icon-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank" className="text-primary">Colorlib</a>
        </p>
      </div>
    </div>
  </div>
</footer>

        )
    }
}