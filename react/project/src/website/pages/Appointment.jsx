import React from 'react'
import Wheader from '../component/Wheader'
import Wfooter from '../component/Wfooter'

function Appointment() {
    return (
        <div>
            <Wheader/>
            <div>
                <div className="breadcrumbs overlay">
                    <div className="container">
                        <div className="bread-inner">
                            <div className="row">
                                <div className="col-12">
                                    <h2>Doctor Appointment</h2>
                                    <ul className="bread-list">
                                        <li><a href="index.html">Home</a></li>
                                        <li><i className="icofont-simple-right" /></li>
                                        <li className="active">Doctor Appointment</li>
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
                                                    <h2>Book Doctor Appointment</h2>
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
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Wfooter />
        </div>

    )
}

export default Appointment