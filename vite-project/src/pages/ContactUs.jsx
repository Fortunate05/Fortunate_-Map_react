import React from 'react'
import Navbar from '../components/Navbar'
import '../pages/ContactUs.css'
import image2 from '../assets/DA_Logo.jpg'


export default function ContactUs() {
  return (
    <div>
      <Navbar />

      <div className="contact3 py-5">
        <div className="row no-gutters">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="card-shadow">
                  <img src={image2} className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-box ml-3">
                  <h1 className="font-weight-light mt-2">Chat Us</h1>
                  {/* ---------------------------- */}
                  <div className="col-lg-12">
                    <div className="card mt-4 border-0 mb-4">
                      <div className="">
                        <div className="col-lg-4 col-md-4">
                          <div className="card-body d-flex align-items-center c-detail pl-0">
                            <div className="mr-3 align-self-center">
                              <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png" />
                            </div>
                            <div className="">
                              <h6 className="font-weight-medium">Address</h6>
                              <p className="">The Media Mill , 7 Quince Street
                                <br />Auckland Park
                                Johannesburg
                                2092
                                </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="card-body d-flex align-items-center c-detail">
                        <div className="mr-3 align-self-center">
                          <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png" />
                        </div>
                        <div className="">
                          <h6 className="font-weight-medium">Phone</h6>
                          <p className=""> 061 544 9366<br/></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="card-body d-flex align-items-center c-detail">
                        <div className="mr-3 align-self-center">
                          <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png" />
                        </div>
                        <div className="">
                          <h6 className="font-weight-medium">Email</h6>
                          <p className="">
                          info@thedigitalacademy.co.za
                            <br /> 
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div >



    </div >

  )
}
