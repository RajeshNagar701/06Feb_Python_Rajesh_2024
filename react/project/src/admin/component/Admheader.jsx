import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Admheader() {
    const redirect = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('adminid')) {
        }
        else {
            redirect('/admin-login')
        }
    })
    const adminlogout = () => {

        localStorage.removeItem('adminid');
        localStorage.removeItem('adminname');
        toast.success('Logout Success');
        redirect('/admin-login');

    }
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
                                    <li><NavLink to="/dashboard">Admin Dashboard</NavLink></li>
                                </ul>
                                {/* End Contact */}
                            </div>
                            <div className="col-lg-6 col-md-7 col-12">
                                {/* Top Contact */}
                                <ul className="top-contact">
                                    {
                                        (
                                            () => {
                                                if (localStorage.getItem('adminid')) {
                                                    return (<li><i className="fa fa-user" />Hi.. {localStorage.getItem('adminname')}</li>)
                                                }
                                            }
                                        )()
                                    }
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
                                        <NavLink to="/dashboard"><img src="website/img/logo.png" alt="#" /></NavLink>
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
                                                <li><NavLink to="/dashboard">Dashboard </NavLink></li>
                                                <li><NavLink to="#">Categories <i className="icofont-rounded-down" /></NavLink>
                                                    <ul className="dropdown">
                                                        <li><NavLink to="/add_categories">Add Categories</NavLink></li>
                                                        <li><NavLink to="/manage_categories">Manage Categories</NavLink></li>
                                                    </ul>
                                                </li>
                                                <li><NavLink to="#">Services <i className="icofont-rounded-down" /></NavLink>
                                                    <ul className="dropdown">
                                                        <li><NavLink to="/add_services">Add Services</NavLink></li>
                                                        <li><NavLink to="/manage_services">Manage Services</NavLink></li>
                                                    </ul>
                                                </li>
                                                <li><NavLink to="/manage_customer">Customer </NavLink></li>
                                                <li><NavLink to="/manage_contact">Contact </NavLink></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    {/*/ End Main Menu */}
                                </div>
                                <div className="col-lg-2 col-12">
                                    <div className="get-quote">
                                        <a href="javascript:void(0)" onClick={adminlogout} className="btn">Logout</a>
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

export default Admheader