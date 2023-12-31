import { useEffect, useState } from "react";
import useAllClasses from "../../../Hooks/useAllClasses";
import SectionTitle from "../../Shared/SectionTitle";
import { Zoom } from "react-awesome-reveal";

const PopularClass = () => {
    const [popularClasses, setPopularClass] = useState([])
    const [AllClasses] = useAllClasses();

    useEffect(() => {
        const sortedClasses = AllClasses.sort((a, b) => b.enrolled - a.enrolled);

        setPopularClass([...sortedClasses])
        
    }, [AllClasses])

    return (
        <div className="px-12">
            <SectionTitle heading={'popular classes'} subHeading={'Our Popular Classes '}></SectionTitle>
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8">

                <Zoom delay>
                    {

                        popularClasses.slice(0, 6).map((clas, i) => <div key={i} className="card w-full bg-base-100 shadow-xl mt-10">
                            <figure><img className="h-80 w-full" src={clas?.ClassImage} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title font-bold">
                                    {clas?.ClassName}
                                </h2>
                                <p className=" font-bold">Instructor: {clas.instractorName}</p>
                                <p className=" font-bold">Enrolled Students: {clas.enrolled}</p>

                            </div>
                        </div>)

                    }
                </Zoom>

            </div>

        </div>
    );
};

export default PopularClass;