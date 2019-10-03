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
import Footer from './common/footer';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
