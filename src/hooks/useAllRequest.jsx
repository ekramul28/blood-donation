import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useAllRequest = () => {
    const axiosPublic = useAxiosPublic()
    const { refetch, data: requestData = [] } = useQuery({
        queryKey: ["requestData"],
        queryFn: async () => {
            const res = await axiosPublic.get('/request');
            return res.data;
        }
    })
    return [refetch, requestData];
};

export default useAllRequest;