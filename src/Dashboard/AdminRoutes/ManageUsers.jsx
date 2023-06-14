import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import SectionTitle from "../../Pages/Shared/SectionTitle";

const ManageUsers = () => {

    const {data: users =[], refetch}= useQuery(['users'], async()=>{
        const res = await fetch('https://nota-corda-server.vercel.app/users')
        return res.json()
    })

 console.log(users)

    const makeAdmin = (user)=>{
        fetch(`https://nota-corda-server.vercel.app/users/admin/${user._id}`,{
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is admin now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
 

    const makeIntractor = (user)=>{
        fetch(`https://nota-corda-server.vercel.app/users/instractor/${user._id}`,{
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is Instractor now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    return (
        <div className=" w-full px-10 mb-20">
            <SectionTitle heading={'Manage Users'}></SectionTitle>
            <div className="overflow-x-auto rounded-2xl  mx-5">
                <table className="table">
                    <thead className=" bg-sky-500 text-white">
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Role</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            users.map(user =>  <tr className=" bg-sky-300" key={user._id}>
                                <th>1</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td><button disabled={user.role ==='admin'} onClick={()=>makeAdmin(user)} className="btn btn-neutral bg-sky-700">Make Admin</button></td>
                                <td><button disabled={user.role ==='instractor'} onClick={()=>makeIntractor(user)} className="btn btn-neutral bg-sky-700">Make Instractor</button></td>
                            </tr>)
                        }
                       
                       
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;