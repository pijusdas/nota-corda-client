import { useContext, useEffect, useState } from "react";
import useClass from "../../Hooks/useClass";
import { AuthContext } from "../../Provider/AuthProvider";
import SectionTitle from "../../Pages/Shared/SectionTitle";

const MyClasses = () => {
    const [myclass, setMyclass] = useState([])
    const [classes] = useClass()
    const { user } = useContext(AuthContext)
    useEffect(() => {
        const loggedIntractorClass = classes.filter(clas => clas?.instractorEmail === user?.email);
        setMyclass(loggedIntractorClass)
    }, [classes, user?.email])

    console.log(myclass)
    return (
       <>
       <SectionTitle heading={'my classes'}></SectionTitle>
        <div className="overflow-x-auto shadow-2xl w-full mx-12">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className="bg-sky-300">
                        <th>
                            Image
                        </th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Total Enrolled Students</th>
                        <th>Feedback</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {myclass.map(clas => <tr className=" bg-slate-200" key={clas._id}>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={clas.ClassImage} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            {clas.ClassName}
                        </td>
                        <td><button className="btn btn-xs bg-green-400">{clas.status}</button></td>
                        <td className="text-center">{clas.enrolled}</td>
                        <td>{clas?.feedback?.dataa? `${clas?.feedback?.dataa}`:'N/A'}</td>
                        <th>
                            <button className="btn btn-ghost btn-xs bg-red-300">Update</button>
                        </th>
                    </tr>)}
                    
                  
                </tbody>
            </table>
        </div>
       </>
    );
};

export default MyClasses;