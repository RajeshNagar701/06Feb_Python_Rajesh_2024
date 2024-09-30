import React from 'react'
import Wheader from '../component/Wheader'
import Wfooter from '../component/Wfooter'

function Contact() {
  return (
    <div>
      <Wheader />
      <div>
        <div className="breadcrumbs overlay">
          <div className="container">
            <div className="bread-inner">
              <div className="row">
                <div className="col-12">
                  <h2>Contact Us</h2>
                  <ul className="bread-list">
                    <li><a href="index.html">Home</a></li>
                    <li><i className="icofont-simple-right" /></li>
                    <li className="active">Contact Us</li>
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
                <div className="col-lg-6">
                  <div className="contact-us-left">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.7210008580046!2d72.6064277740739!3d22.99728481727376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85c2fc005927%3A0x918e69150ca1c935!2sTOPS%20Technologies%20-%20Best%20IT%20Training%20Institute%20in%20Ahmedabad!5e0!3m2!1sen!2sin!4v1727678527161!5m2!1sen!2sin" width="100%" height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="contact-us-form">
                    <h2>Contact With Us</h2>
                    <p>If you have any questions please fell free to contact with us.</p>
                    {/* Form */}
                    <form className="form" method="post" action="mail/mail.php">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input type="text" name="name" placeholder="Name" required />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input type="email" name="email" placeholder="Email" required />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input type="text" name="phone" placeholder="Phone" required />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input type="text" name="subject" placeholder="Subject" required />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <textarea name="message" placeholder="Your Message" required defaultValue={""} />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group login-btn">
                            <button className="btn" type="submit">Send</button>
                          </div>
                          <div className="checkbox">
                            <label className="checkbox-inline" htmlFor={2}><input name="news" id={2} type="checkbox" />Do you want to subscribe our Newsletter ?</label>
                          </div>
                        </div>
                      </div>
                    </form>
                    {/*/ End Form */}
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-info">
              <div className="row">
                {/* single-info */}
                <div className="col-lg-4 col-12 ">
                  <div className="single-info">
                    <i className="icofont icofont-ui-call" />
                    <div className="content">
                      <h3>+(000) 1234 56789</h3>
                      <p>info@company.com</p>
                    </div>
                  </div>
                </div>
                {/*/End single-info */}
                {/* single-info */}
                <div className="col-lg-4 col-12 ">
                  <div className="single-info">
                    <i className="icofont-google-map" />
                    <div className="content">
                      <h3>2 Fir e Brigade Road</h3>
                      <p>Chittagonj, Lakshmipur</p>
                    </div>
                  </div>
                </div>
                {/*/End single-info */}
                {/* single-info */}
                <div className="col-lg-4 col-12 ">
                  <div className="single-info">
                    <i className="icofont icofont-wall-clock" />
                    <div className="content">
                      <h3>Mon - Sat: 8am - 5pm</h3>
                      <p>Sunday Closed</p>
                    </div>
                  </div>
                </div>
                {/*/End single-info */}
              </div>
            </div>
          </div>
        </section>
      </div>


      <Wfooter />
    </div>
  )
}

export default Contact