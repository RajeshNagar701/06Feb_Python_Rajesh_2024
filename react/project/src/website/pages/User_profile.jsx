import React, { useState, useEffect } from 'react'
import Wheader from '../component/Wheader'
import Wfooter from '../component/Wfooter'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

function User_profile() {

    const redirect=useNavigate();
    useEffect(() => {
        fetch();
    }, []);

    const [data, setData] = useState({});
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/user/${localStorage.getItem('userid')}`);
        console.log(res.data);
        setData(res.data);
    }

    const [formvalue, setFormvalue] = useState({
        id: "",
        name: "",
        email: "",
        mobile: "",
        img: "",
    })
    const editHandel = async (id) => {
        const res = await axios.get(`http://localhost:3000/user/${id}`);
        console.log(res);
        setFormvalue(res.data);
    }

    const changeHandel = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    function validation() {
        var result = true;
        if (formvalue.name == "") {
            result = false;
            toast.error('name Field is required !');
            return false;
        }
        if (formvalue.email == "") {
            result = false;
            toast.error('email Field is required !');
            return false;
        }
        if (formvalue.mobile == "") {
            result = false;
            toast.error('mobile Field is required !');
            return false;
        }
        if (formvalue.img == "") {
            result = false;
            toast.error('img Field is required !');
            return false;
        }
        return result;
    }
    const submitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.put(`http://localhost:3000/user/${formvalue.id}`, formvalue);
            toast.success('User Updated Success !');
            fetch();
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
                                    <h2>User Profile</h2>
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
                <section className="blog section" id="blog">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <h2>User Profile</h2>
                                    <img src="website/img/section-img.png" alt="#" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                {/* Single Blog */}
                                <div className="single-news">
                                    <div className="news-head">
                                        <img src={data.img} width="100%" alt="#" />
                                    </div>
                                </div>
                                {/* End Single Blog */}
                            </div>
                            <div className="col-md-9">
                                {/* Single Blog */}
                                <div className="single-news">

                                    <div className="news-body">
                                        <div className="news-content">
                                            <div className="date">Id : {data.id}</div>
                                            <h2>Name : {data.name}</h2>
                                            <p className="text">Email : {data.email}</p>
                                            <p className="text">Mobile : {data.mobile}</p>
                                            <p className="text">status : {data.status}</p>

                                            <button className="date fa fa-edit p-2" onClick={()=> redirect('/user_edit/'+ data.id)}> Page Edit</button>
                                            <button className="date fa fa-edit p-2" data-toggle="modal" data-target="#myModal" onClick={() => editHandel(data.id)}>Model  Edit </button>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Blog */}
                            </div>

                            <div className="modal" id="myModal">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        {/* Modal Header */}
                                        <div className="modal-header">
                                            <h4 className="modal-title">Edit Profile</h4>
                                            <button type="button" className="close" data-dismiss="modal">×</button>
                                        </div>
                                        {/* Modal body */}
                                        <div className="modal-body">
                                            <form className="form" action="" method='post'>
                                                <div className="row">
                                                    <div className="col-lg-12 col-md-12 col-12">
                                                        <div className="form-group">
                                                            <input className='form-control' name="name" onChange={changeHandel} value={formvalue.name} type="text" placeholder="Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-12">
                                                        <div className="form-group">
                                                            <input className='form-control'  name="email" onChange={changeHandel} value={formvalue.email} type="email" placeholder="Email" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-12">
                                                        <div className="form-group">
                                                            <input className='form-control' name="mobile" onChange={changeHandel} value={formvalue.mobile} type="number" placeholder="Mobile" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-12">
                                                        <div className="form-group">
                                                            <input className='form-control' name="img" onChange={changeHandel} value={formvalue.img} type="url" placeholder="Add Image Url" />
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-5 col-md-4 col-12">
                                                        <div className="form-group">
                                                            <div className="button">
                                                                <button type="submit" data-dismiss="modal"  onClick={submitHandel} className="btn">Save</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        {/* Modal footer */}
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
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