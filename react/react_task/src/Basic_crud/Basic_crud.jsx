import { Password } from '@mui/icons-material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Basic_crud() {
    
    const [data, setData] = useState([]);

    const [formvalue,setFormvalue]=useState({
        id:"",
        name:"",
        email:"",
        password:""
    })
    const changeHandel=(e)=>{
        setFormvalue({...formvalue,id:new Date().getTime().toString(),[e.target.name]:e.target.value});
        console.log(formvalue);
    }

    const submitHandel=(e)=>{
        e.preventDefault();
        setData([...data,formvalue]);
        setFormvalue({...formvalue,name:"",email:"",password:""})
        return false; 
    }

    const deleteHandel=(id)=>{
        console.log(id);
        const filterdata=data.filter((value,index,arr)=>{ return value.id!=id})
        setData(filterdata);
        return false; 
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
                                                    <button className='btn btn-danger m-2' onClick={()=>deleteHandel(value.id)}>Delete</button>
                                                    <button className='btn btn-primary m-2'>Edit</button>
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
            <div className="mt-5 p-4 bg-dark text-white text-center">
                <p>Footer</p>
            </div>
        </div>

    )
}

export default Basic_crud