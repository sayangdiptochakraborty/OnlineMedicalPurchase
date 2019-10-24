import React, {Component} from 'react';
import * as firebase from 'firebase';
import 'antd/dist/antd.css';
import Header from './header';
import Footer from './footer';

export default class Checkout extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            collapse:false,
        }
        this.toggleState=this.toggleState.bind(this)
    }
    toggleState=(e)=>{
        this.setState(prevState=>({collapse:!prevState.collapse}))
    }
    render()
    {
        return(
            <div>
              <Header/>
                <div className="bg-light py-3">
  <div className="container">
    <div className="row">
      <div className="col-md-12 mb-0">
        <a href="index.html">Home</a> <span className="mx-2 mb-0">/</span>
        <strong className="text-black">Checkout</strong>
      </div>
    </div>
  </div>
</div>
<div className="site-section">
  <div className="container">
    <div className="row mb-5">
      <div className="col-md-12">
        <div className="bg-light rounded p-3">
          <p className="mb-0">Returning customer? Please login. Or continue as guest.</p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 mb-5 mb-md-0">
        <h2 className="h3 mb-3 text-black">Billing Details</h2>
        <div className="p-3 p-lg-5 border">
          <div className="form-group">
            <label htmlFor="c_country" className="text-black">Country <span className="text-danger">*</span></label>
            <select id="c_country" className="form-control">
              <option value={1}>Select a country</option>
              <option value={2}>bangladesh</option>
              <option value={3}>Algeria</option>
              <option value={4}>Afghanistan</option>
              <option value={5}>Ghana</option>
              <option value={6}>Albania</option>
              <option value={7}>Bahrain</option>
              <option value={8}>Colombia</option>
              <option value={9}>Dominican Republic</option>
            </select>
          </div>
          <div className="form-group row">
            <div className="col-md-6">
              <label htmlFor="c_fname" className="text-black">First Name <span className="text-danger">*</span></label>
              <input type="text" className="form-control" id="c_fname" name="c_fname" />
            </div>
            <div className="col-md-6">
              <label htmlFor="c_lname" className="text-black">Last Name <span className="text-danger">*</span></label>
              <input type="text" className="form-control" id="c_lname" name="c_lname" />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-md-12">
              <label htmlFor="c_address" className="text-black">Address <span className="text-danger">*</span></label>
              <input type="text" className="form-control" id="c_address" name="c_address" placeholder="Street address" />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-md-6">
              <label htmlFor="c_state_country" className="text-black">State / Country <span className="text-danger">*</span></label>
              <input type="text" className="form-control" id="c_state_country" name="c_state_country" />
            </div>
            <div className="col-md-6">
              <label htmlFor="c_postal_zip" className="text-black">Postal / Zip <span className="text-danger">*</span></label>
              <input type="text" className="form-control" id="c_postal_zip" name="c_postal_zip" />
            </div>
          </div>
          <div className="form-group row mb-5">
            <div className="col-md-6">
              <label htmlFor="c_email_address" className="text-black">Email Address <span className="text-danger">*</span></label>
              <input type="text" className="form-control" id="c_email_address" name="c_email_address" />
            </div>
            <div className="col-md-6">
              <label htmlFor="c_phone" className="text-black">Phone <span className="text-danger">*</span></label>
              <input type="text" className="form-control" id="c_phone" name="c_phone" placeholder="Phone Number" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="c_order_notes" className="text-black">Order Notes</label>
            <textarea name="c_order_notes" id="c_order_notes" cols={30} rows={5} className="form-control" placeholder="Write your notes here..." defaultValue={""} />
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="row mb-5">
          <div className="col-md-12">
            <h2 className="h3 mb-3 text-black">Your Order</h2>
            <div className="p-3 p-lg-5 border">
              <table className="table site-block-order-table mb-5">
                <thead>
                  <tr><th>Product</th>
                    <th>Total</th>
                  </tr></thead>
                <tbody>
                  <tr>
                    <td>Bioderma <strong className="mx-2">x</strong> 1</td>
                    <td>$55.00</td>
                  </tr>
                  <tr>
                    <td>Ibuprofeen <strong className="mx-2">x</strong> 1</td>
                    <td>$45.00</td>
                  </tr>
                  <tr>
                    <td className="text-black font-weight-bold"><strong>Cart Subtotal</strong></td>
                    <td className="text-black">$350.00</td>
                  </tr>
                  <tr>
                    <td className="text-black font-weight-bold"><strong>Order Total</strong></td>
                    <td className="text-black font-weight-bold"><strong>$350.00</strong></td>
                  </tr>
                </tbody>
              </table>
              <div className="border mb-3">
                <h3 className="h6 mb-0"><a className={this.state.collaps?"d-block":"d-block collapsed"} href="javascript:void(0);" onClick={this.toggleState} data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapsebank">Credit / Debit Card</a></h3>
                <div className={this.state.collaps?"collapse show":"collapse"} id="collapsebank">
                  <div className="py-2 px-4">
                    <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the
                      payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                  </div>
                </div>
              </div>
              <div className="border mb-3">
                <h3 className="h6 mb-0"><a className="d-block" data-toggle="collapse" href="#collapsecheque" role="button" aria-expanded="false" aria-controls="collapsecheque">NetBanking / UPI</a></h3>
                <div className="collapse" id="collapsecheque">
                  <div className="py-2 px-4">
                    <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the
                      payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                  </div>
                </div>
              </div>
              <div className="border mb-5">
                <h3 className="h6 mb-0"><a className="d-block" data-toggle="collapse" href="#collapsepaypal" role="button" aria-expanded="false" aria-controls="collapsepaypal">PayTM / PayPal</a></h3>
                <div className="collapse" id="collapsepaypal">
                  <div className="py-2 px-4">
                    <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the
                      payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <button className="btn btn-primary btn-lg btn-block"><a href="/thankyou">Place Order</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* </form> */}
  </div>
</div>
<Footer/>
            </div>
        )
    }
}