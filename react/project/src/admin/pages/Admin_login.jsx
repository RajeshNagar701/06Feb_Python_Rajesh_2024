import React from 'react'
import { Helmet } from 'react-helmet'
import { NavLink } from 'react-router-dom'


function Admin_login() {
  return (
    <div>
      <div>
        <Helmet>

          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="keywords" content="Site keywords here" />
          <meta name="description" content="" />
          <meta name='copyright' content='' />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />


          <title>Mediplus - Free Medical and Doctor Directory HTML Template.</title>


          <link rel="icon" href="website/img/favicon.png" />


          <link href="https://fonts.googleapis.com/css?family=Poppins:200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap" rel="stylesheet" />


          <link rel="stylesheet" href="website/css/bootstrap.min.css" />

          <link rel="stylesheet" href="website/css/nice-select.css" />

          <link rel="stylesheet" href="website/css/font-awesome.min.css" />

          <link rel="stylesheet" href="website/css/icofont.css" />

          <link rel="stylesheet" href="website/css/slicknav.min.css" />

          <link rel="stylesheet" href="website/css/owl-carousel.css" />

          <link rel="stylesheet" href="website/css/datepicker.css" />

          <link rel="stylesheet" href="website/css/animate.min.css" />

          <link rel="stylesheet" href="website/css/magnific-popup.css" />

          <link rel="stylesheet" href="website/css/normalize.css" />
          <link rel="stylesheet" href="style.css" />
          <link rel="stylesheet" href="website/css/responsive.css" />
          <script src="website/js/jquery.min.js"></script>
        </Helmet>

        {/* End Preloader */}
        {/* Get Pro Button */}
        <ul className="pro-features">
          <a className="get-pro" href="#">Get Pro</a>
          <li className="big-title">Pro Version Available on Themeforest</li>
          <li className="title">Pro Version Features</li>
          <li>2+ premade home pages</li>
          <li>20+ html pages</li>
          <li>Color Plate With 12+ Colors</li>
          <li>Sticky Header / Sticky Filters</li>
          <li>Working Contact Form With Google Map</li>
          <div className="button">
            <a href="http://preview.themeforest.net/item/mediplus-medical-and-doctor-html-template/full_screen_preview/26665910?_ga=2.145092285.888558928.1591971968-344530658.1588061879" target="_blank" className="btn">Pro Version Demo</a>
            <a href="https://themeforest.net/item/mediplus-medical-and-doctor-html-template/26665910" target="_blank" className="btn">Buy Pro Version</a>
          </div>
        </ul>
        {/* Header Area */}
        <header className="header">
          {/* Topbar */}
          <div className="topbar">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-5 col-12">
                  {/* Contact */}
                  <ul className="top-link">
                    <li><NavLink to="/admin-login">Admin Login</NavLink></li>
                  </ul>
                  {/* End Contact */}
                </div>
                <div className="col-lg-6 col-md-7 col-12">
                  {/* Top Contact */}
                  <ul className="top-contact">
                    <li><i className="fa fa-phone" />+880 1234 56789</li>
                    <li><i className="fa fa-envelope" /><a href="mailto:support@yourmail.com">support@yourmail.com</a></li>
                  </ul>
                  {/* End Top Contact */}
                </div>
              </div>
            </div>
          </div>
          {/* End Topbar */}
          {/* Header Inner */}
          <div className="header-inner">
            <div className="container">
              <div className="inner">

              </div>
            </div>
          </div>
          {/*/ End Header Inner */}
        </header>
        {/* End Header Area */}
      </div>
      <div className="breadcrumbs overlay">
        <div className="container">
          <div className="bread-inner">
            <div className="row">
              <div className="col-12">
                <h2>Admin Login</h2>
                <ul className="bread-list">
                  <li><a href="index.html">Home</a></li>
                  <li><i className="icofont-simple-right" /></li>
                  <li className="active">Admin Login</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrumbs */}
      {/* Start Contact Us */}
      <section className="contact-us section">
        <div className="container">
          <div className="inner">
            <div className="row">

              <div className="col-lg-12">
                <div className="contact-us-form">
                  <h2>Add Login</h2>
                  <p>If you have any questions please fell free to contact with us.</p>

                  <form className="form" method="post" action="mail/mail.php">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input type="text" name="email" placeholder="Email" required />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input type="password" name="password" placeholder="Password" required />
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group login-btn">
                        <button className="btn" type="submit">LOGIN</button>
                      </div>
                    </div>

                  </form>
                  {/*/ End Form */}
                </div>
              </div>
            </div>
          </div>

        </div >
      </section >
      <footer id="footer" className="footer ">
               
                {/*/ End Footer Top */}
                {/* Copyright */}
                <div className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-12">
                                <div className="copyright-content">
                                    <p>© Copyright 2018  |  All Rights Reserved by <a href="https://www.wpthemesgrid.com" target="_blank">wpthemesgrid.com</a> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*/ End Copyright */}
            </footer>
    </div >
  )
}

export default Admin_login