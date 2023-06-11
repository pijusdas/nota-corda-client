import { useContext, useEffect, useState } from "react";
import useAllClasses from "../../../Hooks/useAllClasses";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Classes = () => {
    const [approvedClasses, setApprovedClass] = useState([])
    const [AllClasses] = useAllClasses();
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        const approvedClasses = AllClasses.filter(clas => clas.status === 'approved');
        setApprovedClass(approvedClasses)
    }, [AllClasses])


    const handleSelectClass =(clas)=>{
        console.log(clas)
        if(!user){
            console.log()
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

        fetch('')
    }

    return (
        <div className=" pt-24 px-24">
           

          <div className=" grid grid-cols-2 gap-10">
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
          </div>

        </div>
    );
};

export default Classes;