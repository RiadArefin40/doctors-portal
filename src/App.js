
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Banner from "./Pages/Home/Banner/Banner";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import SignUp from "./Pages/Login/SignUp";
import Footer from "./Pages/Shared/Footer/Footer";
import Navbar from './Pages/Shared/Navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import DashBoard from "./Pages/Dashboard/DashBoard";
import Myappointment from "./Pages/Dashboard/Myappointment";
import Myreview from "./Pages/Dashboard/Myreview";
import Myhistory from "./Pages/Dashboard/Myhistory";
import Users from "./Pages/Dashboard/Users";
import RequireAdmin from "./Pages/Login/RequireAdmin";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
     <Navbar></Navbar>
   
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<SignUp></SignUp>}></Route>

       <Route path='/appointment' element={
       <RequireAuth>
          <Appointment></Appointment>
       </RequireAuth>
       }></Route>

        <Route path='/dashboard' element={
       <RequireAuth>
          <DashBoard></DashBoard>
       </RequireAuth>
       }>
          <Route index element={<Myappointment></Myappointment>}></Route>
          <Route path="review" element={<Myreview></Myreview>}></Route>
          <Route path="history" element={<Myhistory></Myhistory>}></Route>
          <Route path="users" element={
          <RequireAdmin>
            <Users></Users>
          </RequireAdmin>
          }></Route>
       </Route>

     </Routes>
     <ToastContainer />
     <Footer></Footer>
    </div>
  );
}

export default App;
