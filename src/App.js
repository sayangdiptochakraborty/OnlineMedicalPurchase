import React from 'react';
import './App.css';
import './common/css/bootstrap.min.css';
import './common/css/magnific-popup.css';
//import './common/css/jquery-ui.css';
//import './common/css/owl.carousel.min.css';
//import './common/css/owl.theme.default.min.css';
import './common/css/aos.css';
import './common/css/style.css';
import Home from './common/home';

import Header from './common/header';
import Cart from './common/cart';
import Footer from './common/footer';
import Checkout from './common/checkout';

function App() {
  return (
    <div>
      <Header/>
      <Checkout/>
      <Footer/>
    </div>
  );
}

export default App;
