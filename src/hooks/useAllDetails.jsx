import { useParams } from "react-router-dom";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAllDetails = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure()
    const { refetch, data: details = [] } = useQuery({
        queryKey: ['details', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/request/man/${id}`);
            return res.data;
        }
    })
    return [refetch, details]
};

export default useAllDetails;