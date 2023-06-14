import { useQuery } from "@tanstack/react-query";

const useSelectedClass = () => {
    const { data: selectedClasses = [], refetch } = useQuery({
        queryKey: ['selectedClasses'],
        queryFn: async () => {
            const res = await fetch(`https://nota-corda-server.vercel.app//selectedClasses`)

            return res.json()
        }
    })
    console.log(selectedClasses)
    return [selectedClasses, refetch]
};

export default useSelectedClass;