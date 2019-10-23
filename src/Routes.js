import React, {Component} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import App from './App';
import Header from './common/header';
import Cart from './common/cart';
import Footer from './common/footer';
import Checkout from './common/checkout';
import ThankYou from './common/thankyou';
import About from './common/about';
import Contact from './common/contact';
import Shop from './common/shop';
import Item from './common/item';
import VendorDashboard from './common/vendorDashboard';
import UserDashboard from './common/userDashboard';
import EmployeeDashboard from './common/employeeDashboard';

class ErrorComponent extends Component{
    render()
    {
        return(
            <div>
                <h1>404: Page Not Found</h1>
            </div>
        )
    }
}

export default class Routes extends Component{
    render()
    {
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={App}></Route>
                    <Route exact path="/contact" component={Contact}></Route>
                    <Route exact path="/about" component={About}></Route>
                    <Route exact path="/cart" component={Cart}></Route>
                    <Route exact path="/dashboard/vendor" component={VendorDashboard}></Route>
                    <Route exact path="/dashboard/user" component={UserDashboard}></Route>
                    <Route exact path="/dashboard/employee" component={EmployeeDashboard}></Route>
                    <Route exact path="/shop/medicine" component={Shop}></Route>
                    <Route exact path="/shop/diet" component={Shop}></Route>
                    <Route exact path="/shop/supplement" component={Shop}></Route>
                    <Route exact path="/shop" component={Shop}></Route>
                    <Route exact path="/item/:name" component={Item}></Route>
                    <Route exact path="/checkout" component={Checkout}></Route>
                    <Route exact path="/thankyou" component={ThankYou}></Route>
                </Switch>
            </Router>
        )
    }
}