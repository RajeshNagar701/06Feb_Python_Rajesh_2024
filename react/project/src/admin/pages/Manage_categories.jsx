import React, { useEffect, useState } from 'react'
import Admheader from '../component/Admheader'
import Admfooter from '../component/Admfooter'
import axios from 'axios'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Manage_categories() {

    const redirect=useNavigate();
    useEffect(() => {
        fetch();
    }, []);

    const [data, setData] = useState([]);
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/categories`);
        console.log(res.data);
        setData(res.data);
    }

    const deleteHandel = async (id) => {
        const res = await axios.delete(`http://localhost:3000/categories/${id}`);
        console.log(res);
        toast.success("Categories Delete Success");
        fetch();
    }

    const [formvalue, setFormvalue] = useState({
        id: "",
        cate_name: "",
        cate_img: "",
      })

    const editHandel = async (id) => {
        const res = await axios.get(`http://localhost:3000/categories/${id}`);
        console.log(res);
        setFormvalue(res.data);
    }

    
    
      const changeHandel = (e) => {
        setFormvalue({ ...formvalue,[e.target.name]: e.target.value });
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
          const res = await axios.put(`http://localhost:3000/categories/${formvalue.id}`, formvalue);
          toast.success('categories Updated Success !');
          fetch();
          
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
                                    <h2>Manage Categories</h2>
                                    <p>If you have any questions please fell free to contact with us.</p>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>#ID</th>
                                                    <th>Category Name</th>
                                                    <th>Image</th>
                                                    <th>Action</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    data.map((value, index, arr) => {
                                                        return (
                                                            <tr>
                                                                <td>{value.id}</td>
                                                                <td>{value.cate_name}</td>
                                                                <td><img src={value.cate_img} width="50px"></img></td>
                                                                <td>
                                                                    <button className='btn btn-primary' data-toggle="modal" data-target="#myModal" onClick={() => editHandel(value.id)}>Edit</button>
                                                                    <button className='btn btn-danger' onClick={() => deleteHandel(value.id)}>Delete</button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }

                                            </tbody>
                                        </table>


                                        <div className="modal" id="myModal">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    {/* Modal Header */}
                                                    <div className="modal-header">
                                                        <h4 className="modal-title">Modal Heading</h4>
                                                        <button type="button" className="close" data-dismiss="modal">×</button>
                                                    </div>
                                                    {/* Modal body */}
                                                    <div className="modal-body">
                                                        <form className="form" method="post" action="" >
                                                            <div className="row">
                                                                <div className="col-lg-6">
                                                                    <div className="form-group">
                                                                        <input type="text" name="cate_name" onChange={changeHandel} value={formvalue.cate_name} placeholder="Categories Name" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <div className="form-group">
                                                                        <input type="url" name="cate_img" onChange={changeHandel} value={formvalue.cate_img} placeholder="Categories Imagew url" />
                                                                    </div>
                                                                </div>

                                                                <div className="col-12">
                                                                    <div className="form-group login-btn">
                                                                        <button className="btn" type="submit" data-dismiss="modal" onClick={submitHandel}>Save</button>
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
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <Admfooter />
        </div>
    )
}

export default Manage_categories