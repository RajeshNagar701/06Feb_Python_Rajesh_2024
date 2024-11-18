import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./website/pages/Home";
import About from "./website/pages/About";
import Contact from "./website/pages/Contact";
import Doctor from "./website/pages/Doctor";
import Dashboard from "./admin/pages/Dashboard";
import Add_categories from "./admin/pages/Add_categories";
import Manage_categories from "./admin/pages/Manage_categories";
import Add_services from "./admin/pages/Add_services";
import Manage_services from "./admin/pages/Manage_services";
import Admin_login from "./admin/pages/Admin_login";
import Manage_customer from "./admin/pages/Manage_customer";
import Manage_contact from "./admin/pages/Manage_contact";
import Appointment from "./website/pages/Appointment";
import Login from "./website/pages/Login";
import Signup from "./website/pages/Signup";

// add 2 lines for toast notification
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer></ToastContainer>
        <Routes>
          
          {
            // wEBSITE
          }
          
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/doctor" element={<Doctor/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/appointment" element={<Appointment/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>

          {
            // Admin
          }
          <Route path="/admin-login" element={<Admin_login/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/add_categories" element={<Add_categories/>}></Route>
          <Route path="/manage_categories" element={<Manage_categories/>}></Route>
          <Route path="/add_services" element={<Add_services/>}></Route>
          <Route path="/manage_services" element={<Manage_services/>}></Route>
          <Route path="/manage_customer" element={<Manage_customer/>}></Route>
          <Route path="/manage_contact" element={<Manage_contact/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
