import React from 'react';
import Header from './header';
import Footer from './footer';
import 'antd/dist/antd.css';
import { Empty } from 'antd';
import * as firebase from 'firebase';
import firebaseConfig from './firebaseConfig';
import 'firebase/auth';
import 'firebase/database';
import { Select } from 'antd';

const { Option } = Select;
export default class Item extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            specs: false,
            item: [],
            count: 1,
            loggedIn: false,
            selectedShop: ''
        }
        if(!firebase.apps.length)
        {
          firebase.initializeApp(firebaseConfig);
        }
        this.addToCart = this.addToCart.bind(this)
    }
    onclick(type){
      this.setState(prevState => {
         return {count: type == 'add' ? prevState.count + 1: prevState.count!=1 ? prevState.count - 1 : 1}
      });
    }

    addToCart = (e) =>{
      if(this.state.loggedIn)
      {
        console.log(e)
      }
      else
      {
        console.log(e)
      }
    }

    async componentWillMount()
    {
      var dbRef = firebase.database().ref().child('Medicine');
      dbRef.once('value',snapshot=>{
        var itemName=window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
        this.setState({item:snapshot.child(itemName).val()})
      })
      if(sessionStorage.getItem('uid')!=undefined)
      {
        this.setState({loggedIn:true})
      }
    }
    render()
    {
      var shop =[]
      if(this.state.item!=null)
      {
        if(this.state.item.Shop!=undefined)
        {
          var json =this.state.item.Shop;
          Object.keys(json).forEach(function(key) {
            shop.push(json[key]);
          });
        }
      }
      
        return(
            <div>
              <Header/>
  <div className="bg-light py-3">
    <div className="container">
      <div className="row">
        <div className="col-md-12 mb-0"><a href="/">Home</a> <span className="mx-2 mb-0">/</span> <a href="/shop">Store</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">{this.state.item!=null?this.state.item.Info!=undefined?this.state.item.Info.Name:null:null}</strong></div>
      </div>
    </div>
  </div>
  <div className="site-section">
    <div className="container">
    {this.state.item!=null?this.state.item.Info!=undefined?<div className="row">
        <div className="col-md-5 mr-auto">
          <div className="border text-center">
            <img src={this.state.item.Info!=undefined ?this.state.item.Info.Type==='Tablet'?"http://localhost:3000/images/tablet.jpg":"http://localhost:3000/images/syrup.png":null} alt="Image" className="img-fluid p-5" />
          </div>
        </div>
        <div className="col-md-6">
          <h2 className="text-black">{this.state.item.Info!=undefined ?this.state.item.Info.Name:null}</h2>
          <p>Select Your Preferred Store.
            <br/>
            <br/>
            <Select style={{ width: 300 }} onChange={(e)=>{this.setState({selectedShop:e})}} placeholder="Preferred Shop">
              {shop.map((item)=>{
                return <Option value={item.Name}>{item.Name}</Option>
              })}
            </Select>
            </p>
          <p><strong className="text-primary h4">₹{this.state.item.Info!=undefined ?parseInt(this.state.item.Info.Price)*this.state.count:null}</strong></p>
          <div className="mb-5">
            <div className="input-group mb-3" style={{maxWidth: '220px'}}>
              <div className="input-group-prepend">
                <button className="btn btn-outline-primary js-btn-minus" type="button" onClick={this.onclick.bind(this, 'sub')} value='Dec'>−</button>
              </div>
              <input type="text" className="form-control text-center" value={this.state.count} placeholder aria-label="Example text with button addon" aria-describedby="button-addon1" />
              <div className="input-group-append">
                <button className="btn btn-outline-primary js-btn-plus" type="button" onClick={this.onclick.bind(this, 'add')} value='Inc'>+</button>
              </div>
            </div>
          </div>
          <p><a className="buy-now btn btn-sm height-auto px-4 py-3 btn-primary" style={{color:'black'}} onClick={this.addToCart}>Add To Cart</a></p>
        </div>
      </div>:<Empty description={<span>No Medicine Found</span>}/>:<Empty description={<span>No Medicine Found</span>}/>}
      
    </div>
  </div>
  <Footer/>
</div>

        )
    }
}