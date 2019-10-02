import React, {Component} from 'react';
import 'antd/dist/antd.css';

export default class Home extends Component
{
    constructor(props)
    {
        super(props);
        
    }
    render()
    {
        return(
                <div className="site-blocks-cover" style={{backgroundImage: 'url("images/hero_1.jpg")'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 mx-auto order-lg-2 align-self-center">
                                <div className="site-block-cover-content text-center">
                                    <h2 className="sub-title">Your doorstep medicine delivery partner</h2>
                                    <h1>Welcome To GetMeds</h1>
                                    <p>
                                        <a href="javascript:void(0);" className="btn btn-primary px-5 py-3" >Shop Now</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        )
    }
}