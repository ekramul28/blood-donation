import axios from "axios";
import { useEffect } from "react";

const man = () => {
    const data1 = useEffect(() => {
        axios.get('devision.json')
            .then(res => {
                setDivision(res.data);
            })
    }, [])
};

export default man;