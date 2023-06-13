import { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle";
import { Slide } from "react-awesome-reveal";

const PopularInstractor = () => {

    const [popularInstractor, setPopularInstractor] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                const findIntractor = data.filter(user => user.role === 'instractor');
                setPopularInstractor(findIntractor)
            })
    }, [])
    return (
        <div className=" px-12 my-20">
            <SectionTitle heading={'meet our best teacher'} subHeading={'Most talented teacher'}></SectionTitle>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                <Slide triggerOnce>
                    {
                        popularInstractor && popularInstractor.slice(0, 6).map((instrutor, i) => <div key={i} className="card w-full bg-base-100 mb-5">
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

export default PopularInstractor;