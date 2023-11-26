import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useAllDistrict = () => {
    const axiosPublic = useAxiosPublic();
    const { data: District = [] } = useQuery({

        queryKey: ['District'],
        queryFn: async () => {
            const res = await axiosPublic.get('/district');
            return res.data;
        }
    })

    return District


};

export default useAllDistrict;