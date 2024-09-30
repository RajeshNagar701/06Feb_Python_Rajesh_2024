import React from 'react'
import Wheader from '../component/Wheader'
import Wfooter from '../component/Wfooter'

function Home() {
  return (
    <div>
      <Wheader/>
      <section className="slider">
        <div className="hero-slider">
          {/* Start Single Slider */}
          <div className="single-slider" style={{ backgroundImage: 'url("website/img/slider2.jpg")' }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="text">
                    <h1>We Provide <span>Medical</span> Services That You Can <span>Trust!</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam. </p>
                    <div className="button">
                      <a href="#" className="btn">Get Appointment</a>
                      <a href="#" className="btn primary">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Single Slider */}
          {/* Start Single Slider */}
          <div className="single-slider" style={{ backgroundImage: 'url("website/img/slider.jpg")' }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="text">
                    <h1>We Provide <span>Medical</span> Services That You Can <span>Trust!</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam. </p>
                    <div className="button">
                      <a href="#" className="btn">Get Appointment</a>
                      <a href="#" className="btn primary">About Us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Start End Slider */}
          {/* Start Single Slider */}
          <div className="single-slider" style={{ backgroundImage: 'url("website/img/slider3.jpg")' }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="text">
                    <h1>We Provide <span>Medical</span> Services That You Can <span>Trust!</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam. </p>
                    <div className="button">
                      <a href="#" className="btn">Get Appointment</a>
                      <a href="#" className="btn primary">Conatct Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Single Slider */}
        </div>
      </section>
      {/*/ End Slider Area */}
      {/* Start Schedule Area */}
      <section className="schedule">
        <div className="container">
          <div className="schedule-inner">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12 ">
                {/* single-schedule */}
                <div className="single-schedule first">
                  <div className="inner">
                    <div className="icon">
                      <i className="fa fa-ambulance" />
                    </div>
                    <div className="single-content">
                      <span>Lorem Amet</span>
                      <h4>Emergency Cases</h4>
                      <p>Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.</p>
                      <a href="#">LEARN MORE<i className="fa fa-long-arrow-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                {/* single-schedule */}
                <div className="single-schedule middle">
                  <div className="inner">
                    <div className="icon">
                      <i className="icofont-prescription" />
                    </div>
                    <div className="single-content">
                      <span>Fusce Porttitor</span>
                      <h4>Doctors Timetable</h4>
                      <p>Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.</p>
                      <a href="#">LEARN MORE<i className="fa fa-long-arrow-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-12">
                {/* single-schedule */}
                <div className="single-schedule last">
                  <div className="inner">
                    <div className="icon">
                      <i className="icofont-ui-clock" />
                    </div>
                    <div className="single-content">
                      <span>Donec luctus</span>
                      <h4>Opening Hours</h4>
                      <ul className="time-sidual">
                        <li className="day">Monday - Fridayp <span>8.00-20.00</span></li>
                        <li className="day">Saturday <span>9.00-18.30</span></li>
                        <li className="day">Monday - Thusday <span>9.00-15.00</span></li>
                      </ul>
                      <a href="#">LEARN MORE<i className="fa fa-long-arrow-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/End Start schedule Area */}
      {/* Start Feautes */}
      <section className="Feautes section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>We Are Always Ready to Help You &amp; Your Family</h2>
                <img src="website/img/section-img.png" alt="#" />
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-12">
              {/* Start Single features */}
              <div className="single-features">
                <div className="signle-icon">
                  <i className="icofont icofont-ambulance-cross" />
                </div>
                <h3>Emergency Help</h3>
                <p>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
              </div>
              {/* End Single features */}
            </div>
            <div className="col-lg-4 col-12">
              {/* Start Single features */}
              <div className="single-features">
                <div className="signle-icon">
                  <i className="icofont icofont-medical-sign-alt" />
                </div>
                <h3>Enriched Pharmecy</h3>
                <p>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
              </div>
              {/* End Single features */}
            </div>
            <div className="col-lg-4 col-12">
              {/* Start Single features */}
              <div className="single-features last">
                <div className="signle-icon">
                  <i className="icofont icofont-stethoscope" />
                </div>
                <h3>Medical Treatment</h3>
                <p>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
              </div>
              {/* End Single features */}
            </div>
          </div>
        </div>
      </section>
      {/*/ End Feautes */}
      {/* Start Fun-facts */}
      <div id="fun-facts" className="fun-facts section overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              {/* Start Single Fun */}
              <div className="single-fun">
                <i className="icofont icofont-home" />
                <div className="content">
                  <span className="counter">3468</span>
                  <p>Hospital Rooms</p>
                </div>
              </div>
              {/* End Single Fun */}
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* Start Single Fun */}
              <div className="single-fun">
                <i className="icofont icofont-user-alt-3" />
                <div className="content">
                  <span className="counter">557</span>
                  <p>Specialist Doctors</p>
                </div>
              </div>
              {/* End Single Fun */}
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* Start Single Fun */}
              <div className="single-fun">
                <i className="icofont-simple-smile" />
                <div className="content">
                  <span className="counter">4379</span>
                  <p>Happy Patients</p>
                </div>
              </div>
              {/* End Single Fun */}
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* Start Single Fun */}
              <div className="single-fun">
                <i className="icofont icofont-table" />
                <div className="content">
                  <span className="counter">32</span>
                  <p>Years of Experience</p>
                </div>
              </div>
              {/* End Single Fun */}
            </div>
          </div>
        </div>
      </div>
      {/*/ End Fun-facts */}
      {/* Start Why choose */}
      <section className="why-choose section">
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
            <div className="col-lg-6 col-12">
              {/* Start Choose Left */}
              <div className="choose-left">
                <h3>Who We Are</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra antege vel est lobortis, a commodo magna rhoncus. In quis nisi non emet quam pharetra commodo. </p>
                <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul className="list">
                      <li><i className="fa fa-caret-right" />Maecenas vitae luctus nibh. </li>
                      <li><i className="fa fa-caret-right" />Duis massa massa.</li>
                      <li><i className="fa fa-caret-right" />Aliquam feugiat interdum.</li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul className="list">
                      <li><i className="fa fa-caret-right" />Maecenas vitae luctus nibh. </li>
                      <li><i className="fa fa-caret-right" />Duis massa massa.</li>
                      <li><i className="fa fa-caret-right" />Aliquam feugiat interdum.</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End Choose Left */}
            </div>
            <div className="col-lg-6 col-12">
              {/* Start Choose Rights */}
              <div className="choose-right">
                <div className="video-image">
                  {/* Video Animation */}
                  <div className="promo-video">
                    <div className="waves-block">
                      <div className="waves wave-1" />
                      <div className="waves wave-2" />
                      <div className="waves wave-3" />
                    </div>
                  </div>
                  {/*/ End Video Animation */}
                  <a href="https://www.youtube.com/watch?v=RFVXy6CRVR4" className="video video-popup mfp-iframe"><i className="fa fa-play" /></a>
                </div>
              </div>
              {/* End Choose Rights */}
            </div>
          </div>
        </div>
      </section>
      {/*/ End Why choose */}
      {/* Start Call to action */}
      <section className="call-action overlay" data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="content">
                <h2>Do you need Emergency Medical Care? Call @ 1234 56789</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor dictum turpis nec gravida.</p>
                <div className="button">
                  <a href="#" className="btn">Contact Now</a>
                  <a href="#" className="btn second">Learn More<i className="fa fa-long-arrow-right" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/ End Call to action */}
      {/* Start portfolio */}
      <section className="portfolio section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>We Maintain Cleanliness Rules Inside Our Hospital</h2>
                <img src="website/img/section-img.png" alt="#" />
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-12">
              <div className="owl-carousel portfolio-slider">
                <div className="single-pf">
                  <img src="website/img/pf1.jpg" alt="#" />
                  <a href="portfolio-details.html" className="btn">View Details</a>
                </div>
                <div className="single-pf">
                  <img src="website/img/pf2.jpg" alt="#" />
                  <a href="portfolio-details.html" className="btn">View Details</a>
                </div>
                <div className="single-pf">
                  <img src="website/img/pf3.jpg" alt="#" />
                  <a href="portfolio-details.html" className="btn">View Details</a>
                </div>
                <div className="single-pf">
                  <img src="website/img/pf4.jpg" alt="#" />
                  <a href="portfolio-details.html" className="btn">View Details</a>
                </div>
                <div className="single-pf">
                  <img src="website/img/pf1.jpg" alt="#" />
                  <a href="portfolio-details.html" className="btn">View Details</a>
                </div>
                <div className="single-pf">
                  <img src="website/img/pf2.jpg" alt="#" />
                  <a href="portfolio-details.html" className="btn">View Details</a>
                </div>
                <div className="single-pf">
                  <img src="website/img/pf3.jpg" alt="#" />
                  <a href="portfolio-details.html" className="btn">View Details</a>
                </div>
                <div className="single-pf">
                  <img src="website/img/pf4.jpg" alt="#" />
                  <a href="portfolio-details.html" className="btn">View Details</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/ End portfolio */}
      {/* Start service */}
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
      {/*/ End service */}
      {/* Pricing Table */}
      <section className="pricing-table section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>We Provide You The Best Treatment In Resonable Price</h2>
                <img src="website/img/section-img.png" alt="#" />
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Single Table */}
            <div className="col-lg-4 col-md-12 col-12">
              <div className="single-table">
                {/* Table Head */}
                <div className="table-head">
                  <div className="icon">
                    <i className="icofont icofont-ui-cut" />
                  </div>
                  <h4 className="title">Plastic Suggery</h4>
                  <div className="price">
                    <p className="amount">$199<span>/ Per Visit</span></p>
                  </div>
                </div>
                {/* Table List */}
                <ul className="table-list">
                  <li><i className="icofont icofont-ui-check" />Lorem ipsum dolor sit</li>
                  <li><i className="icofont icofont-ui-check" />Cubitur sollicitudin fentum</li>
                  <li className="cross"><i className="icofont icofont-ui-close" />Nullam interdum enim</li>
                  <li className="cross"><i className="icofont icofont-ui-close" />Donec ultricies metus</li>
                  <li className="cross"><i className="icofont icofont-ui-close" />Pellentesque eget nibh</li>
                </ul>
                <div className="table-bottom">
                  <a className="btn" href="#">Book Now</a>
                </div>
                {/* Table Bottom */}
              </div>
            </div>
            {/* End Single Table*/}
            {/* Single Table */}
            <div className="col-lg-4 col-md-12 col-12">
              <div className="single-table">
                {/* Table Head */}
                <div className="table-head">
                  <div className="icon">
                    <i className="icofont icofont-tooth" />
                  </div>
                  <h4 className="title">Teeth Whitening</h4>
                  <div className="price">
                    <p className="amount">$299<span>/ Per Visit</span></p>
                  </div>
                </div>
                {/* Table List */}
                <ul className="table-list">
                  <li><i className="icofont icofont-ui-check" />Lorem ipsum dolor sit</li>
                  <li><i className="icofont icofont-ui-check" />Cubitur sollicitudin fentum</li>
                  <li><i className="icofont icofont-ui-check" />Nullam interdum enim</li>
                  <li className="cross"><i className="icofont icofont-ui-close" />Donec ultricies metus</li>
                  <li className="cross"><i className="icofont icofont-ui-close" />Pellentesque eget nibh</li>
                </ul>
                <div className="table-bottom">
                  <a className="btn" href="#">Book Now</a>
                </div>
                {/* Table Bottom */}
              </div>
            </div>
            {/* End Single Table*/}
            {/* Single Table */}
            <div className="col-lg-4 col-md-12 col-12">
              <div className="single-table">
                {/* Table Head */}
                <div className="table-head">
                  <div className="icon">
                    <i className="icofont-heart-beat" />
                  </div>
                  <h4 className="title">Heart Suggery</h4>
                  <div className="price">
                    <p className="amount">$399<span>/ Per Visit</span></p>
                  </div>
                </div>
                {/* Table List */}
                <ul className="table-list">
                  <li><i className="icofont icofont-ui-check" />Lorem ipsum dolor sit</li>
                  <li><i className="icofont icofont-ui-check" />Cubitur sollicitudin fentum</li>
                  <li><i className="icofont icofont-ui-check" />Nullam interdum enim</li>
                  <li><i className="icofont icofont-ui-check" />Donec ultricies metus</li>
                  <li><i className="icofont icofont-ui-check" />Pellentesque eget nibh</li>
                </ul>
                <div className="table-bottom">
                  <a className="btn" href="#">Book Now</a>
                </div>
                {/* Table Bottom */}
              </div>
            </div>
            {/* End Single Table*/}
          </div>
        </div>
      </section>
      {/*/ End Pricing Table */}
      {/* Start Blog Area */}
      <section className="blog section" id="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Keep up with Our Most Recent Medical News.</h2>
                <img src="website/img/section-img.png" alt="#" />
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              {/* Single Blog */}
              <div className="single-news">
                <div className="news-head">
                  <img src="website/img/blog1.jpg" alt="#" />
                </div>
                <div className="news-body">
                  <div className="news-content">
                    <div className="date">22 Aug, 2020</div>
                    <h2><a href="blog-single.html">We have annnocuced our new product.</a></h2>
                    <p className="text">Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.</p>
                  </div>
                </div>
              </div>
              {/* End Single Blog */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Single Blog */}
              <div className="single-news">
                <div className="news-head">
                  <img src="website/img/blog2.jpg" alt="#" />
                </div>
                <div className="news-body">
                  <div className="news-content">
                    <div className="date">15 Jul, 2020</div>
                    <h2><a href="blog-single.html">Top five way for solving teeth problems.</a></h2>
                    <p className="text">Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.</p>
                  </div>
                </div>
              </div>
              {/* End Single Blog */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Single Blog */}
              <div className="single-news">
                <div className="news-head">
                  <img src="website/img/blog3.jpg" alt="#" />
                </div>
                <div className="news-body">
                  <div className="news-content">
                    <div className="date">05 Jan, 2020</div>
                    <h2><a href="blog-single.html">We provide highly business soliutions.</a></h2>
                    <p className="text">Lorem ipsum dolor a sit ameti, consectetur adipisicing elit, sed do eiusmod tempor incididunt sed do incididunt sed.</p>
                  </div>
                </div>
              </div>
              {/* End Single Blog */}
            </div>
          </div>
        </div>
      </section>
      {/* End Blog Area */}
      {/* Start clients */}
      <div className="clients overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="owl-carousel clients-slider">
                <div className="single-clients">
                  <img src="website/img/client1.png" alt="#" />
                </div>
                <div className="single-clients">
                  <img src="website/img/client2.png" alt="#" />
                </div>
                <div className="single-clients">
                  <img src="website/img/client3.png" alt="#" />
                </div>
                <div className="single-clients">
                  <img src="website/img/client4.png" alt="#" />
                </div>
                <div className="single-clients">
                  <img src="website/img/client5.png" alt="#" />
                </div>
                <div className="single-clients">
                  <img src="website/img/client1.png" alt="#" />
                </div>
                <div className="single-clients">
                  <img src="website/img/client2.png" alt="#" />
                </div>
                <div className="single-clients">
                  <img src="website/img/client3.png" alt="#" />
                </div>
                <div className="single-clients">
                  <img src="website/img/client4.png" alt="#" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*/Ens clients */}
      {/* Start Appointment */}
      <section className="appointment">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>We Are Always Ready to Help You. Book An Appointment</h2>
                <img src="website/img/section-img.png" alt="#" />
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <form className="form" action="#">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input name="name" type="text" placeholder="Name" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input name="email" type="email" placeholder="Email" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input name="phone" type="text" placeholder="Phone" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <div className="nice-select form-control wide" tabIndex={0}><span className="current">Department</span>
                        <ul className="list">
                          <li data-value={1} className="option selected ">Department</li>
                          <li data-value={2} className="option">Cardiac Clinic</li>
                          <li data-value={3} className="option">Neurology</li>
                          <li data-value={4} className="option">Dentistry</li>
                          <li data-value={5} className="option">Gastroenterology</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <div className="nice-select form-control wide" tabIndex={0}><span className="current">Doctor</span>
                        <ul className="list">
                          <li data-value={1} className="option selected ">Doctor</li>
                          <li data-value={2} className="option">Dr. Akther Hossain</li>
                          <li data-value={3} className="option">Dr. Dery Alex</li>
                          <li data-value={4} className="option">Dr. Jovis Karon</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input type="text" placeholder="Date" id="datepicker" />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-12">
                    <div className="form-group">
                      <textarea name="message" placeholder="Write Your Message Here....." defaultValue={""} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-5 col-md-4 col-12">
                    <div className="form-group">
                      <div className="button">
                        <button type="submit" className="btn">Book An Appointment</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-8 col-12">
                    <p>( We will be confirm by an Text Message )</p>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6 col-md-12 ">
              <div className="appointment-image">
                <img src="website/img/contact-img.png" alt="#" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Wfooter/>
    </div>


  )
}

export default Home