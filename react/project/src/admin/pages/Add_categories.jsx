import React from 'react'
import Admheader from '../component/Admheader'
import Admfooter from '../component/Admfooter'

function Add_categories() {
  return (
    <div>
         <Admheader/>
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
                
                <div className="col-lg-12">
                  <div className="contact-us-form">
                    <h2>Add Categories</h2>
                    <p>If you have any questions please fell free to contact with us.</p>
                    {/* Form */}
                    <form className="form" method="post" action="mail/mail.php">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input type="text" name="name" placeholder="Categories Name" required />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input type="file" name="file" required />
                          </div>
                        </div>
                        
                        <div className="col-12">
                          <div className="form-group login-btn">
                            <button className="btn" type="submit">Add</button>
                          </div>
                        </div>
                      </div>
                    </form>
                    {/*/ End Form */}
                  </div>
                </div>
              </div>
            </div>
          
          </div>
        </section>
        <Admfooter/>
    </div>
  )
}

export default Add_categories