import React from 'react';
import useAuth from '../hooks/useAuth';
import useUser from '../hooks/useUser';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRout = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useAuth();
    const [isAdminLoading, data] = useUser();
    if (loading || isAdminLoading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if (user && (data?.Role === 'admin')) {
        return children
    }
    return <Navigate to='/' state={location} replace ></Navigate>

};

export default AdminRout;