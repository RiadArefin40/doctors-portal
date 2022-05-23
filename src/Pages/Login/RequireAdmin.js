import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import Loading from '../Shared/Loading/Loading';

const RequireAdmin = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const [admin,adminLoadning]= useAdmin(user)
    if(loading || adminLoadning){
        return <Loading></Loading>
    }
    if(!user || !admin ){
        return <Navigate to ="/login" state={{ from: location }} replace></Navigate>
    }
   
    return children;
        
    ;
};

export default RequireAdmin;