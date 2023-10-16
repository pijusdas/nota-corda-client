import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from 'react-scroll-trigger';


const TotalStudents = () => {
    const [counterStart, seCounterStar] = useState(false)
    return (
        <>
        <ScrollTrigger onEnter={()=> seCounterStar(true)} onExit={()=> seCounterStar(false)}>
            <div className=" bg-amber-400 h-60 w-full flex justify-between items-center px-20">
                <div className=" flex flex-col justify-center items-center">
                   {counterStart && <CountUp className=" text-7xl font-extrabold font-serif text-white " start={0} end={27} duration={2.5} delay={0} />} 
                    <h1 className=" mt-2 text-4xl text-indigo-900 font-bold font-serif">professional <br /> <span className=" text-red-600">teachers</span> </h1>
                </div>
                <div className=" flex flex-col justify-center items-center">
                   {counterStart && <CountUp className=" text-7xl font-extrabold font-serif text-white " start={0} end={54} duration={2.5} delay={0} />} 
                    <h1 className=" mt-2 text-4xl text-indigo-900 font-bold font-serif">learning <br /> <span className=" text-red-600">groups</span> </h1>
                </div>
                <div className=" flex flex-col justify-center items-center">
                   {counterStart && <CountUp className=" text-7xl font-extrabold font-serif text-white " start={0} end={590} duration={2.5} delay={0} />} 
                    <h1 className=" mt-2 text-4xl text-indigo-900 font-bold font-serif">happy <br /> <span className=" text-red-600">students</span> </h1>
                </div>
                <div className=" flex flex-col justify-center items-center">
                   {counterStart && <CountUp className=" text-7xl font-extrabold font-serif text-white " start={0} end={12} duration={2.5} delay={0} />} 
                    <h1 className=" mt-2 text-4xl text-indigo-900 font-bold font-serif">music <br /> <span className=" text-red-600">classes</span> </h1>
                </div>


            </div>

        </ScrollTrigger>
        </>
    );
};

export default TotalStudents;