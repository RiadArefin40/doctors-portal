import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import UserRow from './UserRow';

const Users = () => {
    const {data:users,isLoading,refetch}= useQuery('users',()=> fetch('http://localhost:5000/user').then(res=>res.json()))
    if(users){
        console.log(users[0].role)
    }
   
    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h2>All users{users.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
        {
            users.map((u,index)=> <UserRow key={u._id} u={u} refetch={refetch}></UserRow>)
        }
     
      
     
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;