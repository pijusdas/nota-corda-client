import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SectionTitle from "../../Pages/Shared/SectionTitle";

const EnrolledClasses = () => {
    const { user } = useContext(AuthContext);
    const [enrolled, setEnrolled] = useState([])
    useEffect(() => {
        fetch(`https://nota-corda-server.vercel.app/payments/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setEnrolled(data)
            })
    }, [user?.email])
    return (
        <div className=" w-full my-24">

        <SectionTitle heading={'My Enrolled Classes'}></SectionTitle>
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 px-12 mt-10">
                {
                    enrolled && enrolled.map((clas, i) => <div key={i} className="card card-compact w-full bg-base-100 shadow-xl">
                        <figure><img className=" h-80 w-full" src={clas?.enrolledClass?.ClassImage} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold">{clas?.enrolledClass?.ClassName} Class</h2>
                            <p className=" text-xl ">Student Email: {clas?.email}</p>
                            <div className="card-actions ">
                                <h1 className=" text-xl">Status: <span className=" text-green-700 font-bold">Enrolled </span></h1>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default EnrolledClasses;