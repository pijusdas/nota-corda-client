import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useInstractor = () => {
    const {user} = useContext(AuthContext);

    const {data: isInstractor =[], isLoading: isInstractorLoadin} = useQuery({
      queryKey: ['isInstractor', user?.email],
      queryFn : async ()=>{
          const res = await fetch(`https://nota-corda-server.vercel.app//users/instractor/${user?.email}`)
          return res.json()
      }
    })
    return [ isInstractor,isInstractorLoadin]
};

export default useInstractor;