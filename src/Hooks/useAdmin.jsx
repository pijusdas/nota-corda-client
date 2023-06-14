import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

 
const useAdmin = () => {
  const {user} = useContext(AuthContext);

  const {data: isAdmin =[], isLoading: isAdminLoading} = useQuery({
    queryKey: ['isAdmin', user?.email],
    queryFn : async ()=>{
        const res = await fetch(`https://nota-corda-server.vercel.app/users/admin/${user?.email}`)
        return res.json()
    }
  })
  return [ isAdmin,isAdminLoading]
};

export default useAdmin;