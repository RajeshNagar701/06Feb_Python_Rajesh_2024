import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, NavLink } from 'react-router-dom'

function Wheader() {
    return (

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
            <header className="header">
                {/* Topbar */}
                <div className="topbar">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-5 col-12">
                                {/* Contact */}
                                <ul className="top-link">
                                    <li><NavLink to="/about">About</NavLink></li>
                                    <li><NavLink to="/doctor">Doctors</NavLink></li>
                                    <li><NavLink to="/contact">Contact</NavLink></li>
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
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-12">
                                    {/* Start Logo */}
                                    <div className="logo">
                                        <NavLink to="/"><img src="website/img/logo.png" alt="#" /></NavLink>
                                    </div>
                                    {/* End Logo */}
                                    {/* Mobile Nav */}
                                    <div className="mobile-nav" />
                                    {/* End Mobile Nav */}
                                </div>
                                <div className="col-lg-7 col-md-9 col-12">
                                    {/* Main Menu */}
                                    <div className="main-menu">
                                        <nav className="navigation">
                                            <ul className="nav menu">
                                                <li><NavLink to="/">Home </NavLink></li>
                                                <li><NavLink to="/doctor">Doctos Services  </NavLink></li>
                                                <li><NavLink to="/about">About </NavLink></li>
                                                <li><NavLink to="#">My Account <i className="icofont-rounded-down" /></NavLink>
                                                    <ul className="dropdown">
                                                        <li><NavLink href="404.html">404 Error</NavLink></li>
                                                    </ul>
                                                </li>

                                                <li><NavLink to="/contact">Contact</NavLink></li>
                                                <li><NavLink to="/login">Login</NavLink></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    {/*/ End Main Menu */}
                                </div>
                                <div className="col-lg-2 col-12">
                                    <div className="get-quote">
                                        <Link to="/appointment" className="btn">Book Appointment</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*/ End Header Inner */}
            </header>
            {/* End Header Area */}
        </div>

    )
}

export default Wheader