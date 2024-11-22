import React, { useEffect, useState } from 'react'
import Admheader from '../component/Admheader'
import Admfooter from '../component/Admfooter'
import axios from 'axios'
import { toast } from 'react-toastify';
function Manage_services() {

    useEffect(() => {
        fetch();
    }, []);

    const [data, setData] = useState([]);
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/services`);
        console.log(res.data);
        setData(res.data);
    }
    const deleteHandel=async(id)=>{
        const res=await axios.delete(`http://localhost:3000/services/${id}`);
        console.log(res);
        toast.success("Services Delete Success");
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
                                <h2>Contact Us</h2>
                                <ul className="bread-list">
                                    <li><a href="index.html">Home</a></li>
                                    <li><i className="icofont-simple-right" /></li>
                                    <li className="active">Services</li>
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
                                    <h2>Manage Services</h2>
                                    <p>If you have any questions please fell free to contact with us.</p>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                            <tr>
                                                    <th>#ID</th>
                                                    <th>Cate Id</th>
                                                    <th>Service Name</th>
                                                    <th>Description</th>
                                                    <th>Price</th>
                                                    <th>Image</th>
                                                    <th>Action</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    data.map((value,index,arr) => {
                                                        return (
                                                            <tr>
                                                                <td>{value.id}</td>
                                                                <td>{value.cate_id}</td>
                                                                <td>{value.ser_name}</td>
                                                                <td>{value.description}</td>
                                                                <td>{value.price}</td>
                                                                <td><img src={value.ser_img} width="50px"></img></td>
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

export default Manage_services