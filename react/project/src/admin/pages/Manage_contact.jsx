import React, { useEffect, useState } from 'react'
import Admheader from '../component/Admheader'
import Admfooter from '../component/Admfooter'
import axios from 'axios'

function Manage_contact() {


    useEffect(() => {
        fetch();
    }, []);

    const [data, setData] = useState([]);
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/contact`);
        console.log(res.data);
        setData(res.data);
    }

    const deleteHandel=async(id)=>{
        const res=await axios.delete(`http://localhost:3000/contact/${id}`);
        console.log(res);
        fetch();
    }

    return (
        <div>
            <Admheader />
            <div className="breadcrumbs overlay">
                <div className="container">
                    <div className="bread-inner">
                        <div className="row">
                            <div className="col-12">
                                <h2>Manage Contact</h2>
                                <ul className="bread-list">
                                    <li><a href="index.html">Home</a></li>
                                    <li><i className="icofont-simple-right" /></li>
                                    <li className="active">Manage Contact</li>
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
                                    <h2>Manage Contact</h2>
                                    <p>If you have any questions please fell free to contact with us.</p>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>#ID</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Subject</th>
                                                    <th>Message</th>
                                                    <th>Action</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    data.map((value,index,arr) => {
                                                        return (
                                                            <tr>
                                                                <td>{value.id}</td>
                                                                <td>{value.name}</td>
                                                                <td>{value.email}</td>
                                                                <td>{value.sub}</td>
                                                                <td>{value.msg}</td>
                                                                <td>
                                                                    <button className='btn btn-primary'>Edit</button>
                                                                    <button className='btn btn-danger' onClick={()=>deleteHandel(value.id)}>Delete</button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }

                                            </tbody>
                                        </table>
                                    </div>


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

export default Manage_contact