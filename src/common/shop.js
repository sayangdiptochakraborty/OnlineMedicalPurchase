import React from 'react';
import Header from './header';
import Footer from './footer';
import * as firebase from 'firebase';
import firebaseConfig from './firebaseConfig';
import 'firebase/auth';
import 'firebase/database';

export default class Shop extends React.Component{
    constructor(props)
    {
        super(props)
        if(!firebase.apps.length)
        {
          firebase.initializeApp(firebaseConfig);
        }
    }
    async componentDidMount()
    {
      var dbRef = firebase.database().ref().child('Medicine');
      dbRef.once('value').then(function(snapshot){
        sessionStorage.setItem('meds',JSON.stringify(snapshot.val()))
        
      })
    }
    render()
    {
      var json = JSON.parse(sessionStorage.getItem('meds'))
      var meds =[]
      Object.keys(json).forEach(function(key) {
        meds.push(json[key]);
      });
        return(
            <div>
              <Header/>
                <div className="bg-light py-3">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12 mb-0"><a href="/">Home</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">Store</strong></div>
                    </div>
                  </div>
                </div>
                <div className="site-section">
                  <div className="container">
                    <div className="row">
                      
                        {meds!=undefined?
                          meds.map((item)=>{
                            return <div className="col-sm-6 col-lg-4 text-center item mb-4">
                              {item.Info.usage[0]!='S'?<span className="tag">{item.Info.usage}</span>:null}
                              <a href={'/item/'+item.Info.Name}> <img src={item.Info.Type==='Tablet'?"images/tablet.jpg":"images/syrup.png"} width={250} height={250}/></a>
                              <h3 className="text-dark"><a href={'/item/'+item.Info.Name}>{item.Info.Name}</a></h3>
                              <p className="price">₹{item.Info.Price}</p>
                              </div>
                          }):null
                        }
                      </div>
                  </div>
                </div>
              <Footer/>
            </div>
        )
    }
}