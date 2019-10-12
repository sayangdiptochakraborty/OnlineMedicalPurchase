import React from 'react';
import Header from './header';
import Footer from './footer';
export default class Item extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            specs: false,
        }
    }
    render()
    {
        return(
            <div>
              <Header/>
  <div className="bg-light py-3">
    <div className="container">
      <div className="row">
        <div className="col-md-12 mb-0"><a href="/">Home</a> <span className="mx-2 mb-0">/</span> <a href="/shop">Store</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">Ibuprofen Tablets, 200mg</strong></div>
      </div>
    </div>
  </div>
  <div className="site-section">
    <div className="container">
      <div className="row">
        <div className="col-md-5 mr-auto">
          <div className="border text-center">
            <img src="images/product_07_large.png" alt="Image" className="img-fluid p-5" />
          </div>
        </div>
        <div className="col-md-6">
          <h2 className="text-black">Ibuprofen Tablets, 200mg</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, vitae, explicabo? Incidunt facere, natus
            soluta dolores iusto! Molestiae expedita veritatis nesciunt doloremque sint asperiores fuga voluptas,
            distinctio, aperiam, ratione dolore.</p>
          <p><del>$95.00</del>  <strong className="text-primary h4">$55.00</strong></p>
          <div className="mb-5">
            <div className="input-group mb-3" style={{maxWidth: '220px'}}>
              <div className="input-group-prepend">
                <button className="btn btn-outline-primary js-btn-minus" type="button">−</button>
              </div>
              <input type="text" className="form-control text-center" defaultValue={1} placeholder aria-label="Example text with button addon" aria-describedby="button-addon1" />
              <div className="input-group-append">
                <button className="btn btn-outline-primary js-btn-plus" type="button">+</button>
              </div>
            </div>
          </div>
          <p><a href="cart.html" className="buy-now btn btn-sm height-auto px-4 py-3 btn-primary">Add To Cart</a></p>
          <div className="mt-5">
            <ul className="nav nav-pills mb-3 custom-pill" id="pills-tab" role="tablist">
              <li className="nav-item">
                <a className={this.state.specs?"nav-link":"nav-link active show"} id="pills-home-tab" role="tab" onClick={(e)=>{this.setState({specs:false})}}>Ordering Information</a>
              </li>
              <li className="nav-item">
                <a className={this.state.specs?"nav-link active show":"nav-link"} id="pills-profile-tab" role="tab" onClick={(e)=>{this.setState({specs:true})}}>Specifications</a>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div className={this.state.specs?"tab-pane fade":"tab-pane fade show active"} id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <table className="table custom-table">
                  <thead>
                    <tr><th>Material</th>
                      <th>Description</th>
                      <th>Packaging</th>
                    </tr></thead>
                  <tbody>
                    <tr>
                      <th scope="row">OTC022401</th>
                      <td>Pain Management: Acetaminophen PM Extra-Strength Caplets, 500 mg, 100/Bottle</td>
                      <td>1 BT</td>
                    </tr>
                    <tr>
                      <th scope="row">OTC022401</th>
                      <td>Pain Management: Acetaminophen PM Extra-Strength Caplets, 500 mg, 100/Bottle</td>
                      <td>144/CS</td>
                    </tr>
                    <tr>
                      <th scope="row">OTC022401</th>
                      <td>Pain Management: Acetaminophen PM Extra-Strength Caplets, 500 mg, 100/Bottle</td>
                      <td>1 EA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className={this.state.specs?"tab-pane fade active show":"tab-pane fade"} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <table className="table custom-table">
                  <tbody>
                    <tr>
                      <td>HPIS CODE</td>
                      <td className="bg-light">999_200_40_0</td>
                    </tr>
                    <tr>
                      <td>HEALTHCARE PROVIDERS ONLY</td>
                      <td className="bg-light">No</td>
                    </tr>
                    <tr>
                      <td>LATEX FREE</td>
                      <td className="bg-light">Yes, No</td>
                    </tr>
                    <tr>
                      <td>MEDICATION ROUTE</td>
                      <td className="bg-light">Topical</td>
                    </tr>
                  </tbody>
                </table>
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