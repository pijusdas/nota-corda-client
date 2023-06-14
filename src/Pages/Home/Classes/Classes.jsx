import { useContext, useEffect, useState } from "react";
import useAllClasses from "../../../Hooks/useAllClasses";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";
import SectionTitle from "../../Shared/SectionTitle";

const Classes = () => {
    const [approvedClasses, setApprovedClass] = useState([])
    const [AllClasses] = useAllClasses();
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
       if(AllClasses && AllClasses.length > 0){
        const approvedClasses = AllClasses.filter(clas => clas.status === 'approved');
        setApprovedClass(approvedClasses)
       }
    }, [AllClasses])


    const handleSelectClass =(clas)=>{
        console.log(user)
        const {ClassImage,ClassName,availableSeats,_id,price,enrolled} = clas 
        const selectedClass = {clasId:_id,ClassImage,ClassName,availableSeats,price,enrolled,studentEmail:user?.email}
        if(user){
         


            fetch('https://nota-corda-server.vercel.app/selectedClasses',{
                method: 'POST',
                headers: {
                    'content-type':'application/json'
                },
                body: JSON.stringify(selectedClass)
            })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'class Selected successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

        }
           Swal.fire({
                title: 'Please Login to select the Class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
              }).then((result) => {
                if (result.isConfirmed) {
                 navigate('/login')
                }
              })

       
    }

    return (
        <div className=" pt-20 px-24 mb-20">
           
            <SectionTitle heading={'find your class'} subHeading={'We Provide Best Classes'}></SectionTitle>
          <div className=" grid grid-cols-2 gap-10 mt-12">
            <Zoom delay  cascade damping={0.1}>
            {
                approvedClasses.map(clas => <div key={clas._id} className={`card w-full bg-base-100 shadow-xl ${clas?.availableSeats == 0? 'bg-red-600 text-white':''}`}>
                    <figure><img className=" h-80 w-full" src={clas?.ClassImage} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-sky-700">{clas?.ClassName} Class</h2>
                        <p className=" font-semibold">Instructor: {clas?.instractorName}</p>
                        <p className=" font-semibold">Available seats: {clas?.availableSeats}</p>
                        <p className=" font-semibold">Price: ${clas?.price}</p>
                        <div className="card-actions justify-center">
                            <button disabled={clas?.availableSeats == 0 || user?.role === 'admin' || user?.role === 'instractor'} onClick={()=> handleSelectClass(clas)} className="btn btn-primary bg-sky-500 text-white">Select Class</button>
                        </div>
                    </div>
                </div>)
            }
            </Zoom>
          </div>

        </div>
    );
};

export default Classes;