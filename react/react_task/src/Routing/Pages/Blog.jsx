import React from 'react'
import Header from '../Common/Header'
import Navbar from '../Common/Navbar'
import Sidebar from '../Common/Sidebar'
import Footer from '../Common/Footer'

function Blog() {
    return (
        <div>
            <Header />
            <Navbar />
            <div class="container mt-5">
                <div class="row">
                    <Sidebar />
                    <div class="col-sm-8">
                        <h2>Blog Page</h2>
                     

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Blog