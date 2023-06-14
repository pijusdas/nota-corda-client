import { useQuery } from "@tanstack/react-query";

const useAllClasses = () => {
    // const { user } = useContext(AuthContext)

    const { data: AllClasses = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch(`https://nota-corda-server.vercel.app//classes`)

            return res.json()
        }
    })
    console.log(AllClasses)
    return [AllClasses, refetch]
};

export default useAllClasses;