import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useClass from "../../Hooks/useClass";

const AddClass = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, } = useForm();
    const [,refetch] = useClass()

    const onSubmit = (data) => {
        console.log(data);
        const {ClassName,ClassImage,instractorName,instractorEmail,availableSeats,price} =data;

        const classes = {ClassName,ClassImage,instractorName,instractorEmail,availableSeats,price, status: 'pending',enrolled: 0, feedback: ''}
        fetch('http://localhost:5000/classes',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(classes)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'class added successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        } )
    };
console.log(user)
    return <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-full ">

            <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                    <div className="grid grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class Name</span>
                            </label>
                            <input type="text"  {...register("ClassName", { required: true })}  placeholder="Class Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class Image</span>
                            </label>
                            <input type="text"  {...register("ClassImage", { required: true })}  placeholder="Class Image" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instractor Name</span>
                            </label>
                            <input type="text" value={user?.displayName}  {...register("instractorName", { required: true })}  placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instractor Email</span>
                            </label>
                            <input type="text" value={user?.email} {...register("instractorEmail", { required: true })}  placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available seats</span>
                            </label>
                            <input type="number"  {...register("availableSeats", { required: true })}  placeholder="Available seats" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number"  {...register("price", { required: true })}  placeholder="$Price" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary bg-amber-600">Add Class</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
}


export default AddClass;