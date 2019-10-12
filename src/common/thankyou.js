import React from 'react'
import Header from './header';
import Footer from './footer';
export default class ThankYou extends React.Component
{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return(
            <div>
              <Header/>
  <div className="bg-light py-3">
    <div className="container">
      <div className="row">
        <div className="col-md-12 mb-0"><a href="/">Home</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">Thank You</strong></div>
      </div>
    </div>
  </div>
  <div className="site-section">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <span className="display-3 text-success"><img src="images/success.png" width={118.5} height={153.6}/></span>
          <h2 className="display-3 text-black">Thank you!</h2>
          <p className="lead mb-5">You order was successfuly completed.</p>
          <p><a href="/shop" className="btn btn-md height-auto px-4 py-3 btn-primary">Back to store</a></p>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</div>

        )
    }
} 