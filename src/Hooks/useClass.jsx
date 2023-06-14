import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useClass = () => {

    const { user } = useContext(AuthContext)

    const { data: classes = [], refetch } = useQuery({
        queryKey: ['classes', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://nota-corda-server.vercel.app//classes?email=${user?.email}`)

            return res.json()
        }
    })
    console.log(classes)
    return [classes, refetch]

};

export default useClass;