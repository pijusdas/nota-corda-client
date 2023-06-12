import { useQuery } from "@tanstack/react-query";

const useSelectedClass = () => {
    const { data: selectedClasses = [], refetch } = useQuery({
        queryKey: ['selectedClasses'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/selectedClasses`)

            return res.json()
        }
    })
    console.log(selectedClasses)
    return [selectedClasses, refetch]
};

export default useSelectedClass;