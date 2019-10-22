import React from 'react';
import Header from './header';
import Footer from './footer';

export default class Shop extends React.Component{
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
        <div className="col-md-12 mb-0"><a href="/">Home</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">Store</strong></div>
      </div>
    </div>
  </div>
  <div className="site-section">
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-lg-4 text-center item mb-4">
          <span className="tag">Sale</span>
          <a href="/item"> <img src="images/product_01.png" alt="Image" /></a>
          <h3 className="text-dark"><a href="shop-single.html">Bioderma</a></h3>
          <p className="price"><del>95.00</del> — $55.00</p>
        </div>
        <div className="col-sm-6 col-lg-4 text-center item mb-4">
          <a href="/item"> <img src="images/product_02.png" alt="Image" /></a>
          <h3 className="text-dark"><a href="shop-single.html">Chanca Piedra</a></h3>
          <p className="price">$70.00</p>
        </div>
        <div className="col-sm-6 col-lg-4 text-center item mb-4">
          <a href="/item"> <img src="images/product_03.png" alt="Image" /></a>
          <h3 className="text-dark"><a href="shop-single.html">Umcka Cold Care</a></h3>
          <p className="price">$120.00</p>
        </div>
        <div className="col-sm-6 col-lg-4 text-center item mb-4">
          <a href="/item"> <img src="images/product_04.png" alt="Image" /></a>
          <h3 className="text-dark"><a href="shop-single.html">Cetyl Pure</a></h3>
          <p className="price"><del>45.00</del> — $20.00</p>
        </div>
        <div className="col-sm-6 col-lg-4 text-center item mb-4">
          <a href="/item"> <img src="images/product_05.png" alt="Image" /></a>
          <h3 className="text-dark"><a href="shop-single.html">CLA Core</a></h3>
          <p className="price">$38.00</p>
        </div>
        <div className="col-sm-6 col-lg-4 text-center item mb-4">
          <span className="tag">Sale</span>
          <a href="/item"> <img src="images/product_06.png" alt="Image" /></a>
          <h3 className="text-dark"><a href="shop-single.html">Poo Pourri</a></h3>
          <p className="price"><del>$89</del> — $38.00</p>
        </div>
        <div className="col-sm-6 col-lg-4 text-center item mb-4">
          <span className="tag">Sale</span>
          <a href="/item"> <img src="images/product_01.png" alt="Image" /></a>
          <h3 className="text-dark"><a href="shop-single.html">Bioderma</a></h3>
          <p className="price"><del>95.00</del> — $55.00</p>
        </div>
        <div className="col-sm-6 col-lg-4 text-center item mb-4">
          <a href="/item"> <img src="images/product_02.png" alt="Image" /></a>
          <h3 className="text-dark"><a href="shop-single.html">Chanca Piedra</a></h3>
          <p className="price">$70.00</p>
        </div>
        <div className="col-sm-6 col-lg-4 text-center item mb-4">
          <a href="/item"> <img src="images/product_03.png" alt="Image" /></a>
          <h3 className="text-dark"><a href="shop-single.html">Umcka Cold Care</a></h3>
          <p className="price">$120.00</p>
        </div>
        <div className="col-sm-6 col-lg-4 text-center item mb-4">
          <a href="/item"> <img src="images/product_04.png" alt="Image" /></a>
          <h3 className="text-dark"><a href="shop-single.html">Cetyl Pure</a></h3>
          <p className="price"><del>45.00</del> — $20.00</p>
        </div>
        <div className="col-sm-6 col-lg-4 text-center item mb-4">
          <a href="/item"> <img src="images/product_05.png" alt="Image" /></a>
          <h3 className="text-dark"><a href="shop-single.html">CLA Core</a></h3>
          <p className="price">$38.00</p>
        </div>
        <div className="col-sm-6 col-lg-4 text-center item mb-4">
          <span className="tag">Sale</span>
          <a href="/item"> <img src="images/product_06.png" alt="Image" /></a>
          <h3 className="text-dark"><a href="shop-single.html">Poo Pourri</a></h3>
          <p className="price"><del>$89</del> — $38.00</p>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</div>

        )
    }
}