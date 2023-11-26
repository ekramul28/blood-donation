import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useAllDistrict = () => {
    const axiosPublic = useAxiosPublic();
    const { data: AllDistrict = [] } = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await axiosPublic.get('/district');
            return res.data;
        }
    })

    return AllDistrict


};

export default useAllDistrict;