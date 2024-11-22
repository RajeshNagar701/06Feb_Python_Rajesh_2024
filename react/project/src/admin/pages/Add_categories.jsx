import React, { useState } from 'react'
import Admheader from '../component/Admheader'
import Admfooter from '../component/Admfooter'
import axios from 'axios'
import { toast } from 'react-toastify'

function Add_categories() {
  const [formvalue, setFormvalue] = useState({
    id: "",
    cate_name: "",
    cate_img: "",
  })

  const changeHandel = (e) => {
    setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
    console.log(formvalue);
  }

  function validation() {
    var result = true;
    if (formvalue.cate_name == "") {
      result = false;
      toast.error('cate_name Field is required !');
      return false;
    }
    if (formvalue.cate_img == "") {
      result = false;
      toast.error('cate_img Field is required !');
      return false;
    }
    return result;
  }
  const submitHandel = async (e) => {
    e.preventDefault();
    if (validation()) {
      const res = await axios.post(`http://localhost:3000/categories`, formvalue);
      toast.success('categories Submitted Success !');
      setFormvalue({ ...formvalue, cate_name: "", cate_img: ""});
      return false;
    }
  }
  return (
    <div>
      <Admheader />
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
                  <form className="form" method="post" action="" onSubmit={submitHandel}>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input type="text" name="cate_name"  onChange={changeHandel} value={formvalue.cate_name} placeholder="Categories Name" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input type="url" name="cate_img" onChange={changeHandel} value={formvalue.cate_img} placeholder="Categories Imagew url" />
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
      <Admfooter />
    </div>
  )
}

export default Add_categories