import React from 'react'
import Admheader from '../component/Admheader'
import Admfooter from '../component/Admfooter'

function Manage_customer() {
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
                                    <li className="active">Manage Customer</li>
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
                                    <h2>Manage Customer</h2>
                                    <p>If you have any questions please fell free to contact with us.</p>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>#ID</th>
                                                    <th>Cate Name</th>
                                                    <th>Image</th>
                                                    <th>Action</th>
                                                  
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Heart</td>
                                                    <td><img src=""/></td>
                                                    <td>
                                                        <button className='btn btn-primary'>Edit</button>
                                                        <button className='btn btn-danger'>Delete</button>
                                                    </td>
                                                    
                                                </tr>
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

export default Manage_customer