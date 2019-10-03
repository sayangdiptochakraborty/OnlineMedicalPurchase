import React, {Component} from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const { Meta } = Card;

export default class Home extends Component
{
    constructor(props)
    {
        super(props);
        
    }
    render()
    {
        return(
            <div>
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
                <div className="site-section">
  <div className="container">
    <div className="row align-items-stretch section-overlap">
      <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
      <Card
    hoverable
    style={{ width: 240, height :410 }}
    cover={<img alt="example" src="/images/doctor.png" />}
  >
    <Meta title="All Your Pills a Click Away" description="With the wide range of pharmacies under our umbrella, you never have to worry about finding the right medicine again." />
  </Card>
      </div>
      <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
      <Card
    hoverable
    style={{ width: 240, height :410 }}
    cover={<img alt="example" src="/images/delivery.png" />}
  >
    <Meta title="Why walk to a chemist?" description="Get rid of the queues and walking. We are here to do that for you. Select a medicine and order instantly with the click of a button" />
  </Card>
      </div>
      <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
      <Card
    hoverable
    style={{ width: 240, height :410 }}
    cover={<img alt="example" src="/images/man.png" />}
  >
    <Meta title="Savings Bonanza" description="Get the best discounts on medicines here. Upto 50% discount on purchase of Rs. 999 and above." />
  </Card>
      </div>
    </div>
  </div>
</div>
<div className="site-section">
  <div className="container">
    <div className="row">
      <div className="title-section text-center col-12">
        <h2 className="text-uppercase">Popular Products</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-6 col-lg-4 text-center item mb-4">
        <span className="tag">Sale</span>
        <a href="shop-single.html"> <img src="images/product_01.png" alt="Image" /></a>
        <h3 className="text-dark"><a href="shop-single.html">Bioderma</a></h3>
        <p className="price"><del>$95.00</del> $55.00</p>
      </div>
      <div className="col-sm-6 col-lg-4 text-center item mb-4">
        <a href="shop-single.html"> <img src="images/product_02.png" alt="Image" /></a>
        <h3 className="text-dark"><a href="shop-single.html">Chanca Piedra</a></h3>
        <p className="price">$70.00</p>
      </div>
      <div className="col-sm-6 col-lg-4 text-center item mb-4">
        <a href="shop-single.html"> <img src="images/product_03.png" alt="Image" /></a>
        <h3 className="text-dark"><a href="shop-single.html">Umcka Cold Care</a></h3>
        <p className="price">$120.00</p>
      </div>
      <div className="col-sm-6 col-lg-4 text-center item mb-4">
      <span className="tag">Sale</span>
        <a href="shop-single.html"> <img src="images/product_04.png" alt="Image" /></a>
        <h3 className="text-dark"><a href="shop-single.html">Cetyl Pure</a></h3>
        <p className="price"><del>$45.00</del> $20.00</p>
      </div>
      <div className="col-sm-6 col-lg-4 text-center item mb-4">
        <a href="shop-single.html"> <img src="images/product_05.png" alt="Image" /></a>
        <h3 className="text-dark"><a href="shop-single.html">CLA Core</a></h3>
        <p className="price">$38.00</p>
      </div>
      <div className="col-sm-6 col-lg-4 text-center item mb-4">
        <span className="tag">Sale</span>
        <a href="shop-single.html"> <img src="images/product_06.png" alt="Image" /></a>
        <h3 className="text-dark"><a href="shop-single.html">Poo Pourri</a></h3>
        <p className="price"><del>$89</del>  $38.00</p>
      </div>
    </div>
    <div className="row mt-5">
      <div className="col-12 text-center">
        <a href="shop.html" className="btn btn-primary px-4 py-3" style={{color:'black'}}>View All Products</a>
      </div>
    </div>
  </div>
</div>
<div className="site-section bg-light">
  <div className="container">
    <div className="row">
      <div className="title-section text-center col-12">
        <h2 className="text-uppercase">New Products</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 block-3 products-wrap">
      <OwlCarousel
    className="noloop-block-3 owl-theme"
    loop
    autoplay={true}
    dots={false}
>
          <div className="text-center item mb-4">
            <a href="shop-single.html"> <img src="images/product_03.png" alt="Image" /></a>
            <h3 className="text-dark"><a href="shop-single.html">Umcka Cold Care</a></h3>
            <p className="price">$120.00</p>
          </div>
          <div className="text-center item mb-4">
            <a href="shop-single.html"> <img src="images/product_01.png" alt="Image" /></a>
            <h3 className="text-dark"><a href="shop-single.html">Umcka Cold Care</a></h3>
            <p className="price">$120.00</p>
          </div>
          <div className="text-center item mb-4">
            <a href="shop-single.html"> <img src="images/product_02.png" alt="Image" /></a>
            <h3 className="text-dark"><a href="shop-single.html">Umcka Cold Care</a></h3>
            <p className="price">$120.00</p>
          </div>
          <div className="text-center item mb-4">
            <a href="shop-single.html"> <img src="images/product_04.png" alt="Image" /></a>
            <h3 className="text-dark"><a href="shop-single.html">Umcka Cold Care</a></h3>
            <p className="price">$120.00</p>
          </div>
        </OwlCarousel>
      </div>
    </div>
  </div>
</div>
<div className="site-section">
  <div className="container">
    <div className="row">
      <div className="title-section text-center col-12">
        <h2 className="text-uppercase">Testimonials</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 block-3 products-wrap">
        <OwlCarousel className="nonloop-block-3 owl-theme" loop autoplay={true} dots={false} style={{marginLeft: '30px'}}>
          <div className="testimony">
            <blockquote>
              <img src="images/person_1.jpg" alt="Image" className="img-fluid w-25 mb-4 rounded-circle" />
              <p>“Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis voluptatem consectetur quam tempore obcaecati maiores voluptate aspernatur iusto eveniet, placeat ab quod tenetur ducimus. Minus ratione sit quaerat unde.”</p>
            </blockquote>
            <p>— Kelly Holmes</p>
          </div>
          <div className="testimony">
            <blockquote>
              <img src="images/person_2.jpg" alt="Image" className="img-fluid w-25 mb-4 rounded-circle" />
              <p>“Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis voluptatem consectetur quam tempore
                obcaecati maiores voluptate aspernatur iusto eveniet, placeat ab quod tenetur ducimus. Minus ratione sit quaerat
                unde.”</p>
            </blockquote>
            <p>— Rebecca Morando</p>
          </div>
          <div className="testimony">
            <blockquote>
              <img src="images/person_3.jpg" alt="Image" className="img-fluid w-25 mb-4 rounded-circle" />
              <p>“Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis voluptatem consectetur quam tempore
                obcaecati maiores voluptate aspernatur iusto eveniet, placeat ab quod tenetur ducimus. Minus ratione sit quaerat
                unde.”</p>
            </blockquote>
            <p>— Lucas Gallone</p>
          </div>
          <div className="testimony">
            <blockquote>
              <img src="images/person_4.jpg" alt="Image" className="img-fluid w-25 mb-4 rounded-circle" />
              <p>“Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis voluptatem consectetur quam tempore
                obcaecati maiores voluptate aspernatur iusto eveniet, placeat ab quod tenetur ducimus. Minus ratione sit quaerat
                unde.”</p>
            </blockquote>
            <p>— Andrew Neel</p>
          </div>
        </OwlCarousel>
      </div>
    </div>
  </div>
</div>
<div className="site-section bg-secondary bg-image" style={{backgroundImage: 'url("images/bg_2.jpg")'}}>
  <div className="container">
    <div className="row align-items-stretch">
      <div className="col-lg-6 mb-5 mb-lg-0">
        <a href="#" className="banner-1 h-100 d-flex" style={{backgroundImage: 'url("images/bg_1.jpg")'}}>
          <div className="banner-1-inner align-self-center">
            <h2>Pharma Products</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae ex ad minus rem odio voluptatem.
            </p>
          </div>
        </a>
      </div>
      <div className="col-lg-6 mb-5 mb-lg-0">
        <a href="#" className="banner-1 h-100 d-flex" style={{backgroundImage: 'url("images/bg_2.jpg")'}}>
          <div className="banner-1-inner ml-auto  align-self-center">
            <h2>Rated by Experts</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae ex ad minus rem odio voluptatem.
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>

            </div>
        )
    }
}