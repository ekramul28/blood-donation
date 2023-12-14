import axios from 'axios';
const axiosSecure = axios.create({
    baseURL: 'https://blood-donation-server-delta.vercel.app'
})
const useAxiosSecure = () => {
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('Token');
        // console.log("stop stop stop", token)
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        return Promise.reject(error);
    })
    return axiosSecure
};

export default useAxiosSecure;