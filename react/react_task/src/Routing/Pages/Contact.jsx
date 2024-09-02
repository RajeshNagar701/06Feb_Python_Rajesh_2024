import React from 'react'
import Header from '../Common/Header'
import Navbar from '../Common/Navbar'
import Sidebar from '../Common/Sidebar'
import Footer from '../Common/Footer'

function Contact() {
    return (
        <div>
            <Header title="Contact Page"/>
            <Navbar />
            <div class="container mt-5">
                <div class="row">
                    <Sidebar />
                    <div class="col-sm-8">
                        <h2>Contact Form</h2>
                        <form action="/action_page.php">
                            <div class="mb-3 mt-3">
                                <label for="email" class="form-label">Email:</label>
                                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
                            </div>
                            <div class="mb-3">
                                <label for="pwd" class="form-label">Password:</label>
                                <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
                            </div>
                            <div class="form-check mb-3">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" name="remember"/> Remember me
                                </label>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact