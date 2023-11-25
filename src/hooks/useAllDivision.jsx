import { useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useAllDivision = () => {
    const axiosPublic = useAxiosPublic();
    const [AllDivision, setDivision] = useState([]);
    axiosPublic.get('/division')
        .then(res => {
            setDivision(res.data)
        })


    return AllDivision;

};

export default useAllDivision;