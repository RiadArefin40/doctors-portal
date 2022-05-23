import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const Myappointment = () => {
    const [appointments,setAppointments]=useState([]);
    const [user, loading, error] = useAuthState(auth);
    useEffect(()=>{
       if(user){
        fetch(`http://localhost:5000/booking?patient=${user.email}`)
        .then(res=>res.json())
        .then(data=> setAppointments(data))
       }

    },[user])
    return (
        <div>
            <h2>My appointment:{appointments.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>treatment</th>
        <th>Time</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
        {
            appointments.map((a ,index)=>  <tr>
                <th>{index+1}</th>
                <td>{a.patientName}</td>
                <td>{a.treatment}</td>
                <td>{a.slot}</td>
                <td>{a.date}</td>
              </tr>)
        }
    
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Myappointment;