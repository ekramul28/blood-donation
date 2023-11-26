import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useAllDivision = () => {
    const axiosPublic = useAxiosPublic();
    const { data: AllDivision = [] } = useQuery({
        queryKey: ['AllDivision'],
        queryFn: async () => {
            const res = await axiosPublic.get('/division');
            return res.data;
        }
    })

    return AllDivision




};

export default useAllDivision;