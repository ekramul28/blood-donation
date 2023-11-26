import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const UseMyDonationRequests = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth();
    const { refetch, data: donner = [] } = useQuery({
        queryKey: ['donner'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/request/${user?.email}`);
            return res.data;
        }
    })
    return [donner, refetch]
};

export default UseMyDonationRequests;