import React, { useState } from 'react'
import Wheader from '../component/Wheader'
import Wfooter from '../component/Wfooter'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

function Login() {

    const redirect=useNavigate();

    const [formvalue, setFormvalue] = useState({
        email: "",
        password: "",
    })

    const changeHandel = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    function validation() {
        var result = true;

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
        return result;
    }
    const submitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.get(`http://localhost:3000/user?email=${formvalue.email}`);
            console.log(res.data);
            if(res.data.length>0)
            {
                if(res.data[0].password==formvalue.password)
                {
                    if(res.data[0].status=="Unblock")
                    {
                        //session create
                        localStorage.setItem('userid',res.data[0].id)
                        localStorage.setItem('username',res.data[0].name);

                        toast.success('Login Success  !');
                        redirect('/');

                    }
                    else
                    {
                        toast.error('Account Blocked  !');
                        setFormvalue({...formvalue,email:"",password:""});
                        return false;
                    }
                }
                else
                {
                    toast.error('Password Not match !');
                    setFormvalue({...formvalue,email:"",password:""});
                    return false;
                }
            }
            else
            {
                toast.error('Email does not Exist !');
                setFormvalue({...formvalue,email:"",password:""});
                return false;
            }
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
                                                <form className="form" action="" method="post" onSubmit={submitHandel}>
                                                    <div className="row">
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