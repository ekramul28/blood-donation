import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useUser = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { data = [] } = useQuery({
        queryKey: ['data', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/${user?.email}`);
            return res.data;
        }
    })
    return [data]
};

export default useUser;