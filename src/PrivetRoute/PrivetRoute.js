import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import Loading from '../Loading/Loading';

const PrivetRoute = ({children}) => {
    const {user, isLoading} = useContext(AuthContext);
    const location = useLocation();
    if(isLoading){
        return <Loading></Loading>
    }
    if(user){
        return children;
    }
    return<Navigate state={{from: location}} replace></Navigate>;
   
    
};

export default PrivetRoute;