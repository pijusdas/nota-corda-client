import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";
// import { config } from "localforage";



const axiosSecure = axios.create({
 baseURL: 'https://nota-corda-server.vercel.app'
});
 
const useAxiosSecure = () => {
   const {logOut} = useContext(AuthContext);

   const navigate = useNavigate();



   useEffect(()=>{
    axiosSecure.interceptors.request.use((config)=>{
        const token = localStorage.getItem('access-token');
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config
    });


    axiosSecure.interceptors.response.use(
        (response) => response,
        async (error) => {
            if(error.response &&(error.response.status === 401 || error.response.status === 403)) {
                // await logOut();
                // navigate('/login')
                console.log('error got in 36')
            }
            return Promise.reject(error);
        }
    );
   },[logOut,navigate, axiosSecure])

   return [ axiosSecure]




};

export default useAxiosSecure;