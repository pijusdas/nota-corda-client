import Swal from "sweetalert2";
import useSelectedClass from "../../Hooks/useSelectedClass";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MySelectedClass = () => {
    const [myClass,setMyClass] = useState([])
    const {user} = useContext(AuthContext)
    const [selectedClasses,refetch] = useSelectedClass();
    
    useEffect(()=>{
        const selectClas = selectedClasses.filter(clas=> clas.studentEmail == user?.email);
        setMyClass([...selectClas])
    },[selectedClasses,user?.email])

    const handleDelete = (clas)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://nota-corda-server.vercel.app/selectedClasses/${clas._id}`,{
                    method:'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        refetch()
                        Swal.fire(
                          'Deleted!',
                          'Your Selected Class has been deleted.',
                          'success'
                        )
                    }
                })
            }
          })
    }
    return (
        <div className=" w-full grid grid-cols-2 gap-8 mt-20 px-12">
            {myClass && myClass.map(clas => <div key={clas._id} className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img className=" h-80 w-full" src={clas?.ClassImage} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{clas?.ClassName}</h2>
                    <p>Price : ${clas?.price}</p>
                    <p>Available seats: {clas?.availableSeats}</p>
                    <p>Enrolled : {clas?.enrolled}</p>
                    <div className="card-actions justify-self-center ">
                        <Link state={clas} to={'/dashboard/payment'}>
                        <button className="btn text-white  bg-green-800">Pay</button>
                        </Link>
                        <button onClick={()=> handleDelete(clas)} className="btn text-white btn-error">Delete</button>
                    </div>
                </div>
            </div>)}
        </div>
    );
};

export default MySelectedClass;