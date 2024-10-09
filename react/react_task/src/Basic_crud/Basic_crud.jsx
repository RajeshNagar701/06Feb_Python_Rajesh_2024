import { Password } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Basic_crud() {

    const [data, setData] = useState([]);
    const [formvalue, setFormvalue] = useState({
        id: "",
        name: "",
        email: "",
        password: ""
    })
    const changeHandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    const submitHandel = (e) => {
        e.preventDefault();
        setData([...data, formvalue]);
        setFormvalue({ ...formvalue, name: "", email: "", password: "" })
        return false;
    }

    const deleteHandel = (id) => {
        console.log(id);
        const filterdata = data.filter((value, index, arr) => { return value.id != id })
        setData(filterdata);
        return false;
    }


    const [editformvalue, seteditFormvalue] = useState({
        id: "",
        name: "",
        email: "",
        password: ""
    })

    const [editid, setEdit] = useState("");
    const editHandel = (id) => {
        const editdata = data.filter((value, index, arr) => { return value.id == id });
        seteditFormvalue(editdata[0])
        setEdit(id);
    }

    const editchangeHandel = (e) => {
        seteditFormvalue({ ...editformvalue, [e.target.name]: e.target.value });
        console.log(editformvalue);
    }

    const editsubmitHandel = (e) => {
        e.preventDefault();
            const updatedata=data.map((item) => {
                return item.id === editid ? { ...data, id:editid ,name: editformvalue.name, email: editformvalue.email, password: editformvalue.password } : item;
            });
            setData(updatedata);
            console.log(data);
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
                                <input type="text" value={formvalue.name} onChange={changeHandel} required className="form-control" id="email" placeholder="Enter Name" name="name" />
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="email">Email:</label>
                                <input type="email" value={formvalue.email} onChange={changeHandel} required className="form-control" id="email" placeholder="Enter email" name="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="pwd">Password:</label>
                                <input type="password" value={formvalue.password} onChange={changeHandel} required className="form-control" id="pwd" placeholder="Enter password" name="password" />
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
                                    data && data.map((value, index, arr) => {
                                        return (
                                            <tr>
                                                <td>{value.id}</td>
                                                <td>{value.name}</td>
                                                <td>{value.email}</td>
                                                <td>{value.password}</td>
                                                <td>
                                                    <button className='btn btn-danger m-2' onClick={() => deleteHandel(value.id)}>Delete</button>
                                                    <button className='btn btn-primary m-2' onClick={() => editHandel(value.id)} data-bs-toggle="modal" data-bs-target="#myModal" >Edit</button>
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