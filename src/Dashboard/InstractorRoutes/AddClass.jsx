import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";

const AddClass = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, } = useForm();

    const onSubmit = (data) => {
        console.log(data);
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