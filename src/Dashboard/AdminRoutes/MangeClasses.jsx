import Swal from "sweetalert2";
import useAllClasses from "../../Hooks/useAllClasses";
import { Link } from "react-router-dom";


const MangeClasses = () => {
    const [AllClasses, refetch] = useAllClasses()


    const handleApproved = (clas) => {
        console.log('clikkkkedd', clas)
        fetch(`https://nota-corda-server.vercel.app/classes/approved/${clas._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: ` The class is Appreved!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    const handleDeny = (clas) => {
        console.log('clikedddddddddddddddd')
        fetch(`https://nota-corda-server.vercel.app/classes/deny/${clas._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: ` The class is Deny!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    const handleFeedback = (clas) => {
        console.log(clas)

    }

    return (
        <div className=" w-full px-12 mt-10">

            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-7">

                {
                    AllClasses.map(clas => <div key={clas._id} className="card w-full bg-base-100 shadow-xl">
                        <figure><img className="h-80 w-full" src={clas.ClassImage} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{clas?.ClassName} Class</h2>
                            <p>Instructor Name: {clas?.instractorName}</p>
                            <p>Instructor Email : {clas?.instractorEmail}</p>
                            <p>Available Seats : {clas?.availableSeats}</p>
                            <p>Price : ${clas?.price}</p>
                            <p>Status :
                                <button className="btn btn-xs bg-sky-400">{clas?.status}</button>
                            </p>
                            <div className="card-actions mt-5">

                                <button disabled={clas?.status === 'approved' || clas?.status === 'deny'} onClick={() => handleApproved(clas)} className="btn btn-sm bg-green-500">Approved </button>

                                <button onClick={() => handleDeny(clas)} disabled={clas?.status === 'approved' || clas?.status === 'deny'} className="btn btn-sm bg-red-500">deny </button>

                                <Link to={`/dashboard/feedBack/${clas._id}`}>
                                    <button  onClick={() => handleFeedback(clas)} className="btn btn-sm bg-yellow-500">Send FeedBack </button>
                                </Link>

                            </div>
                        </div>
                    </div>

                    )}
            </div>
        </div>
    );
};

export default MangeClasses;