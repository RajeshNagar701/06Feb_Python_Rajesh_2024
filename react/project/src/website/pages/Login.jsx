import React from 'react'
import Wheader from '../component/Wheader'
import Wfooter from '../component/Wfooter'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div>
            <Wheader />
            <div>
                <div className="breadcrumbs overlay">
                    <div className="container">
                        <div className="bread-inner">
                            <div className="row">
                                <div className="col-12">
                                    <h2>Login Here</h2>
                                    <ul className="bread-list">
                                        <li><Link to="/">Home</Link></li>
                                        <li><i className="icofont-simple-right" /></li>
                                        <li className="active">Login Here</li>
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
                                <section className="appointment">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="section-title">
                                                    <h2>Login Here</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="offset-lg-3 col-lg-6 offset-md-3 col-md-6 col-12">
                                                <form className="form" action="#">
                                                    <div className="row">
                                                        <div className="col-lg-12 col-md-12 col-12">
                                                            <div className="form-group">
                                                                <input name="email" type="email" placeholder="Email" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 col-md-12 col-12">
                                                            <div className="form-group">
                                                                <input name="password" type="password" placeholder="Password" />
                                                            </div>
                                                        </div>
                                                       
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-5 col-md-4 col-12">
                                                            <div className="form-group">
                                                                <div className="button">
                                                                    <button type="submit" className="btn">Login</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-7 col-md-8 col-12">
                                                           <Link to="/signup"> <p> If Not Regisrtered then Click Here</p></Link>
                                                        </div>
                                                    </div>
                                                </form>
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

export default Login