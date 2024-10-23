import React from 'react'
import Wheader from '../component/Wheader'
import Wfooter from '../component/Wfooter'

function Doctor() {
  return (
    <div>
      <Wheader />
      <div>
        <div className="breadcrumbs overlay">
          <div className="container">
            <div className="bread-inner">
              <div className="row">
                <div className="col-12">
                  <h2>Doctor Services</h2>
                  <ul className="bread-list">
                    <li><a href="index.html">Home</a></li>
                    <li><i className="icofont-simple-right" /></li>
                    <li className="active">Doctor Details</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrumbs */}
        {/* Start Portfolio Details Area */}
        <section className="pf-details section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <section className="services section">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="section-title">
                          <h2>We Offer Different Services To Improve Your Health</h2>
                          <img src="website/img/section-img.png" alt="#" />
                          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-12">
                        {/* Start Single Service */}
                        <div className="single-service">
                          <i className="icofont icofont-prescription" />
                          <h4><a href="service-details.html">General Treatment</a></h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. </p>
                        </div>
                        {/* End Single Service */}
                      </div>
                      <div className="col-lg-4 col-md-6 col-12">
                        {/* Start Single Service */}
                        <div className="single-service">
                          <i className="icofont icofont-tooth" />
                          <h4><a href="service-details.html">Teeth Whitening</a></h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. </p>
                        </div>
                        {/* End Single Service */}
                      </div>
                      <div className="col-lg-4 col-md-6 col-12">
                        {/* Start Single Service */}
                        <div className="single-service">
                          <i className="icofont icofont-heart-alt" />
                          <h4><a href="service-details.html">Heart Surgery</a></h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. </p>
                        </div>
                        {/* End Single Service */}
                      </div>
                      <div className="col-lg-4 col-md-6 col-12">
                        {/* Start Single Service */}
                        <div className="single-service">
                          <i className="icofont icofont-listening" />
                          <h4><a href="service-details.html">Ear Treatment</a></h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. </p>
                        </div>
                        {/* End Single Service */}
                      </div>
                      <div className="col-lg-4 col-md-6 col-12">
                        {/* Start Single Service */}
                        <div className="single-service">
                          <i className="icofont icofont-eye-alt" />
                          <h4><a href="service-details.html">Vision Problems</a></h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. </p>
                        </div>
                        {/* End Single Service */}
                      </div>
                      <div className="col-lg-4 col-md-6 col-12">
                        {/* Start Single Service */}
                        <div className="single-service">
                          <i className="icofont icofont-blood" />
                          <h4><a href="service-details.html">Blood Transfusion</a></h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. </p>
                        </div>
                        {/* End Single Service */}
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Wfooter />
    </div>

  )
}

export default Doctor