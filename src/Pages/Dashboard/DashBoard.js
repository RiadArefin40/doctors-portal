import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../Firebase.init';
import useAdmin from '../../Hooks/useAdmin'
const DashBoard = () => {
  const [user] = useAuthState(auth)
  console.log(user)
  const [admin]= useAdmin(user)
  console.log(admin)

    return (
        <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
    {/* <!-- Page content here --> */}
    <h2 className='text-3xl font-bold text-purple-600'>Welcome to your DashBoard</h2>
    <Outlet></Outlet>
    
  
  </div> 
  <div className="drawer-side">
    <label for="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to="/dashboard">My Appointment</Link></li>
      <li><Link to="/dashboard/review">My Review</Link></li>
      <li><Link to="/dashboard/history">My History</Link></li>
       {admin && <li><Link to="/dashboard/users">All users</Link></li>} 
    </ul>
  
  </div>
</div>
    );
};

export default DashBoard;