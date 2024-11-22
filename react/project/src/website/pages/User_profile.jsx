import React, { useState } from 'react'
import Wheader from '../component/Wheader'
import Wfooter from '../component/Wfooter'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

function User_profile() {

    
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
                                        <li className="active">User Profile</li>
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
                                                    <h2>User Profile</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                          
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

export default User_profile