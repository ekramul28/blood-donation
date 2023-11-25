import { useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useAllDistrict = () => {
    const axiosPublic = useAxiosPublic();
    const [AllDistrict, setDistrict] = useState([]);
    axiosPublic.get('/district')
        .then(res => {
            setDistrict(res.data)
        })


    return AllDistrict;
};

export default useAllDistrict;