import { Link, useParams } from "react-router-dom";
import useAllClasses from "../../Hooks/useAllClasses";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

import { useForm } from "react-hook-form";
import SectionTitle from "../../Pages/Shared/SectionTitle";


const SendFeedback = () => {
    const [feedback, setFeedBack] = useState({})
    const [AllClasses, refetch] = useAllClasses()
    const { id } = useParams()

    useEffect(() => {
        if(AllClasses  && AllClasses.length > 0){
            const feddback = AllClasses.find(clas => clas._id == id);
        setFeedBack(feddback)
        }
    }, [AllClasses, id])

    console.log(feedback)

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const feedbakk = {dataa:data.feedback}
        
        console.log(feedbakk)
        fetch(`https://nota-corda-server.vercel.app//classes/feedback/${feedback._id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body:JSON.stringify(feedbakk),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: ` Send FeedBack Successfully!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    
    };

   

    return (
        <div className=" w-[70%]">
            <SectionTitle heading={'FeedBack'}/>
            <form className=" flex flex-col mb-8" onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input className="textarea textarea-success" placeholder="Feedback" {...register("feedback")} />
                <button className="btn btn-sm bg-green-500 w-1/2 mx-auto text-white">Send FeedBack</button>
            </form>

            <Link to={'/dashboard/manageClasses'}> <button className=" btn btn-sm bg-green-600 text-white">Go Back</button></Link>
        </div>
    );
};

export default SendFeedback;