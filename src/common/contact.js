import React from 'react';
import Header from './header';
import Footer from './footer';
import * as firebase from 'firebase';
import firebaseConfig from './firebaseConfig';
import 'firebase/auth';
import 'firebase/database';

import 'antd/dist/antd.css';
import { Empty,message } from 'antd';

export default class Contact extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
          activeItem: {
            homeActive: false,
            storeActive:false,
            contactActive: true,
            aboutActive: false,
          },
          firstname: '',
          lastname: '',
          email: '',
          subject: '',
          message:''
        }
        if(!firebase.apps.length)
        {
          firebase.initializeApp(firebaseConfig);
        }
        this.message = this.message.bind(this)
    }
    message = (e) =>
    {
      
      if(this.state.firstname!=''||this.state.lastname!=''||this.state.email!=''||this.state.subject!=''||this.state.message!='')
      {
        var firstPart = (Math.random() * 46656) | 0;
        var secondPart = (Math.random() * 46656) | 0;
        firstPart = ("000" + firstPart.toString(36)).slice(-3);
        secondPart = ("000" + secondPart.toString(36)).slice(-3);
        var qid = firstPart+secondPart;
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        firebase.database().ref().child(`Query`).child(qid).set({
          First_Name: this.state.firstname,
          Last_Name: this.state.lastname,
          email: this.state.email,
          subject: this.state.subject,
          message: this.state.message,
          timestamp: today
        }).then(()=>{
          message.success('We will get back to you in 24 hours.')
          document.location.reload();
        })
      }
      else
      {
        message.warning('Please Fill out all details')
      }
    }
    render()
    {
        return(
            <div>
              <Header activeItem={this.state.activeItem}/>
  <div className="bg-light py-3">
    <div className="container">
      <div className="row">
        <div className="col-md-12 mb-0">
          <a href="/">Home</a> <span className="mx-2 mb-0">/</span>
          <strong className="text-black">Contact</strong>
        </div>
      </div>
    </div>
  </div>
  <div className="site-section">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2 className="h3 mb-5 text-black">Get In Touch</h2>
        </div>
        <div className="col-md-12">
            <div className="p-3 p-lg-5 border">
              <div className="form-group row">
                <div className="col-md-6">
                  <label htmlFor="c_fname" className="text-black">First Name <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" id="c_fname" name="c_fname" value={this.state.firstname} onChange={(e)=>{this.setState({firstname:e.target.value})}}/>
                </div>
                <div className="col-md-6">
                  <label htmlFor="c_lname" className="text-black">Last Name <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" id="c_lname" name="c_lname" value={this.state.lastname} onChange={(e)=>{this.setState({lastname:e.target.value})}}/>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-12">
                  <label htmlFor="c_email" className="text-black">Email <span className="text-danger">*</span></label>
                  <input type="email" className="form-control" id="c_email" name="c_email" placeholder value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}}/>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-12">
                  <label htmlFor="c_subject" className="text-black">Subject </label>
                  <input type="text" className="form-control" id="c_subject" name="c_subject" value={this.state.subject} onChange={(e)=>{this.setState({subject:e.target.value})}}/>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-12">
                  <label htmlFor="c_message" className="text-black">Message </label>
                  <textarea name="c_message" id="c_message" cols={30} rows={7} className="form-control" value={this.state.message} onChange={(e)=>{this.setState({message:e.target.value})}} />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-lg-12">
                  <input type="submit" className="btn btn-primary btn-lg btn-block" defaultValue="Send Message" onClick={this.message} />
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  <div className="site-section bg-primary">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="text-white mb-4">Offices</h2>
        </div>
        <div className="col-lg-4">
          <div className="p-4 bg-white mb-3 rounded">
            <span className="d-block text-black h6 text-uppercase">New York</span>
            <p className="mb-0">203 Mountain View, San Francisco, California, USA</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="p-4 bg-white mb-3 rounded">
            <span className="d-block text-black h6 text-uppercase">London</span>
            <p className="mb-0">221B, Baker Street, London, UK</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="p-4 bg-white mb-3 rounded">
            <span className="d-block text-black h6 text-uppercase">India</span>
            <p className="mb-0">18/13A, Park Street, Kolkata, India</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</div>

        )
    }
}