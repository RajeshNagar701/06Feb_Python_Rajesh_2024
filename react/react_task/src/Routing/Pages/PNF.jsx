import React from 'react'
import Header from '../Common/Header'
import Navbar from '../Common/Navbar'
import Sidebar from '../Common/Sidebar'
import Footer from '../Common/Footer'
import { Link } from 'react-router-dom'

function PNF() {
    return (
        <div>
          
            <div class="container mt-5">
                <div class="row">
                    <div class="col-sm-12 text-center">
                        <h1>404</h1>
                        <h2>Page Not Found</h2>
                        <Link to="/" className='btn btn-primary'>Back</Link>
                    </div>
                </div>
            </div>
          
        </div>
    )
}

export default PNF