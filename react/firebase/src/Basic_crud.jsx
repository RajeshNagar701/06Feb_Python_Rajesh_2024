
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Basic_crud() {

    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch();
    },[]);
   

    const fetch=async ()=>{
        const res=await axios.get(`https://thfeb-4a3c9-default-rtdb.firebaseio.com/users.json`);
        setData(res.data);
        console.log(res);
    }

    const [formvalue, setFormvalue] = useState({
        id: "",
        name: "",
        email: "",
        password: ""
    });

    const changeHandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    function validation() {
        var result = true;
        if (formvalue.name == "") {
            result = false;
            alert('Name Field is required !');
            return false;
        }
        if (formvalue.email == "") {
            result = false;
            alert('Email Field is required !');
            return false;
        }
        if (formvalue.password == "") {
            result = false;
            alert('Password Field is required !');
            return false;
        }
        return result;
    }


    const submitHandel =async (e) => {
        e.preventDefault();
        if (validation()) {
            const res=await axios.post(`https://thfeb-4a3c9-default-rtdb.firebaseio.com/users.json`,formvalue);
            console.log(res);
            fetch();
            setFormvalue({ ...formvalue, name: "", email: "", password: "" })
            return false;
        }
    }

    const deleteHandel =async (key) => {
        const res=await axios.delete(`https://thfeb-4a3c9-default-rtdb.firebaseio.com/users/${key}.json`);
        fetch();
        return false;
    }

    const [editformvalue, seteditFormvalue] = useState({
        id: "",
        name: "",
        email: "",
        password: ""
    })

    const [editid, setEdit] = useState("");

    const editHandel = async(key) => {
        const res =await axios.get(`https://thfeb-4a3c9-default-rtdb.firebaseio.com/users/${key}.json`)
        console.log(res.data);
        seteditFormvalue(res.data)
        setEdit(key);  
    }

    const editchangeHandel = (e) => {
        seteditFormvalue({ ...editformvalue, [e.target.name]: e.target.value });
        console.log(editformvalue);
    }

    const editsubmitHandel = async(e) => {
        e.preventDefault();
        const res= await axios.put(`https://thfeb-4a3c9-default-rtdb.firebaseio.com/users/${editid}.json`,editformvalue);
        fetch();
        console.log(res);
    }

    return (
        <div>
            <div className="p-5 bg-primary text-white text-center">
                <h1>Basic Crud</h1>
                <p>Resize this responsive page to see the effect!</p>
            </div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Admin Panel</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12 mb-2">
                        <h2>Add User</h2>
                        <form action="" method="post" onSubmit={submitHandel}>
                            <div className="mb-3 mt-3">
                                <label htmlFor="email">Name:</label>
                                <input type="text" value={formvalue.name} onChange={changeHandel} className="form-control" id="email" placeholder="Enter Name" name="name" />
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="email">Email:</label>
                                <input type="email" value={formvalue.email} onChange={changeHandel} className="form-control" id="email" placeholder="Enter email" name="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="pwd">Password:</label>
                                <input type="password" value={formvalue.password} onChange={changeHandel} className="form-control" id="pwd" placeholder="Enter password" name="password" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                    <hr />
                    <div className="col-sm-12">
                        <h2>Manage User</h2>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.keys(data).map((value, index, arr) => {
                                        const { id, name,email,password } = data[value];
                                        return (
                                            <tr>
                                                <td>{id}</td>
                                                <td>{name}</td>
                                                <td>{email}</td>
                                                <td>{password}</td>
                                                <td>
                                                    <button className='btn btn-danger m-2' onClick={() => deleteHandel(value)}>Delete</button>
                                                    <button className='btn btn-primary m-2' onClick={() => editHandel(value)} data-bs-toggle="modal" data-bs-target="#myModal" >Edit</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>

                        {/* The Modal */}
                        <div className="modal" id="myModal">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    {/* Modal Header */}
                                    <div className="modal-header">
                                        <h4 className="modal-title">Modal Heading</h4>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                    </div>
                                    {/* Modal body */}
                                    <div className="modal-body">

                                        <div className="col-sm-12 mb-2">
                                            <h2>Edit User</h2>
                                            <form action="" method="post" onSubmit={editsubmitHandel}>
                                                <div className="mb-3 mt-3">
                                                    <label htmlFor="email">Name:</label>
                                                    <input type="text" value={editformvalue.name} onChange={editchangeHandel} required className="form-control" id="email" placeholder="Enter Name" name="name" />
                                                </div>
                                                <div className="mb-3 mt-3">
                                                    <label htmlFor="email">Email:</label>
                                                    <input type="email" value={editformvalue.email} onChange={editchangeHandel} required className="form-control" id="email" placeholder="Enter email" name="email" />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="pwd">Password:</label>
                                                    <input type="password" value={editformvalue.password} onChange={editchangeHandel} required className="form-control" id="pwd" placeholder="Enter password" name="password" />
                                                </div>
                                                <button type="submit" data-bs-dismiss="modal" className="btn btn-primary">Save</button>
                                            </form>

                                        </div>
                                    </div>
                                    {/* Modal footer */}
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="mt-5 p-4 bg-dark text-white text-center">
                <p>Footer</p>
            </div>
        </div>

    )
}

export default Basic_crud