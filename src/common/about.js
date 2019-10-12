import React from 'react';
import Header from './header';
import Footer from './footer';
export default class About extends React.Component
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
  <div className="site-blocks-cover inner-page" style={{backgroundImage: 'url("images/hero_1.jpg")'}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-7 mx-auto align-self-center">
          <div className=" text-center">
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum obcaecati natus iure voluptatum eveniet harum recusandae ducimus saepe.</p>ˀ
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="site-section bg-light custom-border-bottom aos-init aos-animate" data-aos="fade">
    <div className="container">
      <div className="row mb-5">
        <div className="col-md-6">
          <div className="block-16">
            <figure>
              <img src="images/bg_1.jpg" alt="Image placeholder" className="img-fluid rounded" />
              <a href="https://vimeo.com/channels/staffpicks/93951774" className="play-button popup-vimeo"><span className="icon-play" /></a>
            </figure>
          </div>
        </div>
        <div className="col-md-1" />
        <div className="col-md-5">
          <div className="site-section-heading pt-3 mb-4">
            <h2 className="text-black">How We Started</h2>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius repellat, dicta at laboriosam, nemo
            exercitationem itaque eveniet architecto cumque, deleniti commodi molestias repellendus quos sequi hic fugiat
            asperiores illum. Atque, in, fuga excepturi corrupti error corporis aliquam unde nostrum quas.</p>
          <p>Accusantium dolor ratione maiores est deleniti nihil? Dignissimos est, sunt nulla illum autem in, quibusdam
            cumque recusandae, laudantium minima repellendus.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="site-section bg-light custom-border-bottom  aos-init aos-animate" data-aos="fade">
    <div className="container">
      <div className="row mb-5">
        <div className="col-md-6 order-md-2">
          <div className="block-16">
            <figure>
              <img src="images/hero_1.jpg" alt="Image placeholder" className="img-fluid rounded" />
              <a href="https://vimeo.com/channels/staffpicks/93951774" className="play-button popup-vimeo"><span className="icon-play" /></a>
            </figure>
          </div>
        </div>
        <div className="col-md-5 mr-auto">
          <div className="site-section-heading pt-3 mb-4">
            <h2 className="text-black">We Are Trusted Company</h2>
          </div>
          <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius repellat, dicta at laboriosam, nemo
            exercitationem itaque eveniet architecto cumque, deleniti commodi molestias repellendus quos sequi hic fugiat
            asperiores illum. Atque, in, fuga excepturi corrupti error corporis aliquam unde nostrum quas.</p>
          <p className="text-black">Accusantium dolor ratione maiores est deleniti nihil? Dignissimos est, sunt nulla illum autem in, quibusdam
            cumque recusandae, laudantium minima repellendus.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="site-section site-section-sm site-blocks-1 border-0  aos-init aos-animate" data-aos="fade">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay>
          <div className="icon mr-4 align-self-start">
            <span className="icon-truck text-primary" />
          </div>
          <div className="text">
            <h2>Free Shipping</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan
              tincidunt fringilla.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay={100}>
          <div className="icon mr-4 align-self-start">
            <span className="icon-refresh2 text-primary" />
          </div>
          <div className="text">
            <h2>Free Returns</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan
              tincidunt fringilla.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay={200}>
          <div className="icon mr-4 align-self-start">
            <span className="icon-help text-primary" />
          </div>
          <div className="text">
            <h2>Customer Support</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan
              tincidunt fringilla.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="site-section bg-light custom-border-bottom aos-init aos-animate" data-aos="fade">
    <div className="container">
      <div className="row justify-content-center mb-5">
        <div className="col-md-7 site-section-heading text-center pt-4">
          <h2>The Team</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-6 mb-5">
          <div className="block-38 text-center">
            <div className="block-38-img">
              <div className="block-38-header">
                <img src="images/person_1.jpg" alt="Image placeholder" className="mb-4" />
                <h3 className="block-38-heading h4">Elizabeth Graham</h3>
                <p className="block-38-subheading">CEO/Co-Founder</p>
              </div>
              <div className="block-38-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio
                  recusandae doloribus ut fugit officia voluptate soluta. </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 mb-5">
          <div className="block-38 text-center">
            <div className="block-38-img">
              <div className="block-38-header">
                <img src="images/person_2.jpg" alt="Image placeholder" className="mb-4" />
                <h3 className="block-38-heading h4">Jennifer Greive</h3>
                <p className="block-38-subheading">Co-Founder</p>
              </div>
              <div className="block-38-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio
                  recusandae doloribus ut fugit officia voluptate soluta. </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 mb-5">
          <div className="block-38 text-center">
            <div className="block-38-img">
              <div className="block-38-header">
                <img src="images/person_3.jpg" alt="Image placeholder" className="mb-4" />
                <h3 className="block-38-heading h4">Patrick Marx</h3>
                <p className="block-38-subheading">Marketing</p>
              </div>
              <div className="block-38-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio
                  recusandae doloribus ut fugit officia voluptate soluta. </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 mb-5">
          <div className="block-38 text-center">
            <div className="block-38-img">
              <div className="block-38-header">
                <img src="images/person_4.jpg" alt="Image placeholder" className="mb-4" />
                <h3 className="block-38-heading h4">Mike Coolbert</h3>
                <p className="block-38-subheading">Sales Manager</p>
              </div>
              <div className="block-38-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio
                  recusandae doloribus ut fugit officia voluptate soluta. </p>
              </div>
            </div>
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