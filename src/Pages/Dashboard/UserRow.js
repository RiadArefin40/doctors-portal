import React from 'react';
import {toast} from 'react-toastify'
const UserRow = ({u,index,refetch}) => {
    
    const makeAdmin=()=>{
        fetch(`http://localhost:5000/user/admin/${u.email}`, {
            method:'PUT',
              headers: {
                "Content-Type": "application/json",
              }
           
          
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount >0){
                refetch();
                toast.success('successfully made admin')
            }
            else{
                toast.error('You are not a admin')
            }
            
           

        })
    }
    return (
        <tr>
                <th>{index}</th>
                <td>{u.email}</td>
                <td>{!u.role && <button onClick={makeAdmin} class="btn btn-xs">Make admin</button>}</td>
                <td><button class="btn btn-xs">Remove user</button></td>
              </tr>
    );
};

export default UserRow;