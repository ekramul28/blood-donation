import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useAllRequest = () => {
    const axiosPublic = useAxiosPublic()
    const { data: requestData = [] } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosPublic.get('/request');
            return res.data;
        }
    })
    return [requestData];
};

export default useAllRequest;