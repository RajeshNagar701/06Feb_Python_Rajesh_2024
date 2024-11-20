import React, { useState } from 'react'
import Wheader from '../component/Wheader'
import Wfooter from '../component/Wfooter'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

function Signup() {

    const [formvalue,setFormvalue]=useState({
        id:"",
        name:"",
        email:"",
        password:"",
        mobile:"",
        img:"",
        status:""
    })

    const changeHandel=(e)=>{

        setFormvalue({...formvalue,id:new Date().getTime().toString(),status:"Unblock",[e.target.name]:e.target.value});
        console.log(formvalue);
    }

    function validation() {
        var result = true;
        if (formvalue.name == "") {
          result = false;
          toast.error('Name Field is required !');
          return false;
        }
        if (formvalue.email == "") {
          result = false;
          toast.error('Email Field is required !');
          return false;
        }
        if (formvalue.password == "") {
          result = false;
          toast.error('Password Field is required !');
          return false;
        }
        if (formvalue.mobile == "") {
          result = false;
          toast.error('Mobile Field is required !');
          return false;
        }
        if (formvalue.img == "") {
            result = false;
            toast.error('Image Field is required !');
            return false;
          }
        return result;
      }
    const submitHandel=async(e)=>{
        e.preventDefault();
        if(validation())
        {
        const res=await axios.post(`http://localhost:3000/user`,formvalue);
        toast.success('User Signup Success !');
        setFormvalue({...formvalue,name:"",email:"",password:"",mobile:"",img:""});
        return false;
        }
    }
    
    return (
        <div>
            <Wheader />
            <div>
                <div className="breadcrumbs overlay">
                    <div className="container">
                        <div className="bread-inner">
                            <div className="row">
                                <div className="col-12">
                                    <h2>Signup Here</h2>
                                    <ul className="bread-list">
                                        <li><Link to="/">Home</Link></li>
                                        <li><i className="icofont-simple-right" /></li>
                                        <li className="active">Signup Here</li>
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
                                                    <h2>Signup Here</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="offset-lg-3 col-lg-6 offset-md-3 col-md-6 col-12">
                                                <form className="form" action="" method='post' onSubmit={submitHandel}>
                                                    <div className="row">
                                                        <div className="col-lg-12 col-md-12 col-12">
                                                            <div className="form-group">
                                                                <input name="name" onChange={changeHandel} value={formvalue.name} type="text" placeholder="Name" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 col-md-12 col-12">
                                                            <div className="form-group">
                                                                <input name="email" onChange={changeHandel} value={formvalue.email} type="email" placeholder="Email" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 col-md-12 col-12">
                                                            <div className="form-group">
                                                                <input name="password" onChange={changeHandel} value={formvalue.password} type="password" placeholder="Password" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 col-md-12 col-12">
                                                            <div className="form-group">
                                                                <input name="mobile" onChange={changeHandel} value={formvalue.mobile} type="number" placeholder="Mobile" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 col-md-12 col-12">
                                                            <div className="form-group">
                                                                <input name="img" onChange={changeHandel} value={formvalue.img} type="url" placeholder="Add Image Url" />
                                                            </div>
                                                        </div>
                                                       
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-5 col-md-4 col-12">
                                                            <div className="form-group">
                                                                <div className="button">
                                                                    <button type="submit" className="btn">Signup</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-7 col-md-8 col-12">
                                                           <Link to="/login"> <p> If you already Regisrtered then Click Here</p></Link>
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

export default Signup