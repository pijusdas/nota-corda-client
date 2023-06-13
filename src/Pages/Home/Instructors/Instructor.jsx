import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import SectionTitle from "../../Shared/SectionTitle";

const AllInstractor = () => {

    const [allInstractor, setAllInstractor] = useState([])


    useEffect(() => {
        fetch('https://nota-corda-server.vercel.app/users')
            .then(res => res.json())
            .then(data => {
                const findIntractor = data.filter(user => user.role === 'instractor');
                setAllInstractor(findIntractor)
            })
    }, [])
    return (
        <div className=" px-12 my-20">
            <SectionTitle heading={'Met our teachers'} subHeading={'Word Class Teachers'}></SectionTitle>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                <Slide triggerOnce>
                    {
                        allInstractor && allInstractor.map((instrutor, i) => <div key={i} className="card w-full bg-base-100 mb-5">
                            <div >
                                <div className=" border-2 hover:border-8 border-sky-600 rounded-full h-64 w-64 ">
                                    <img className=" rounded-full h-64 w-64 p-4" src={instrutor?.photoUrl} alt="Shoes" />
                                </div>
                                <h1 className=" text-center text-2xl mt-5 font-bold text-blue-800">{instrutor?.name}</h1>
                                <p className=" text-red-800 text-center"> {instrutor.email}</p>

                            </div>

                        </div>)
                    }
                </Slide>
            </div>
        </div>
    );
};

export default AllInstractor;