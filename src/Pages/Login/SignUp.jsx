import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from "../Shared/SocialLogin";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser,userUpadteProfile } = useContext(AuthContext);
    const navigate = useNavigate()


    const onSubmit = data => {

        createUser(data?.email, data?.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)


                userUpadteProfile(data.name, data.photoUrl)
                    .then(() => {
                        const savedUser = { name: data.name, email: data.email, role: 'student',photoUrl: data.photoUrl }

                        fetch('https://nota-corda-server.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Sign Up successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate('/')
                                }
                            })


                    })

            })
            .catch(error => console.log(error))

        console.log(data)

    };
    return (
        <div className="hero min-h-screen bg-base-200 py-28">
            <div className="hero-content w-2/4">

                <div className="card w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"  {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text"  {...register("photoUrl", )} placeholder="PhotoUrl" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text"  {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text"  {...register("password", {
                                required: true, minLength: 6, maxLength: 20,
                                pattern: /(?=.*[a-z].*[a-z].*[a-z])/
                            })} placeholder="password" className="input input-bordered" />

                            {errors.password?.type === 'required' && <span className="text-red-600">Password must be require</span>}

                            {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be six character</span>}

                            {errors.password?.type === 'pattern' && <span className="text-red-600">Password must have at least three lowr case letter</span>}


                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Comfirm Password</span>
                            </label>
                            <input type="text"  {...register("comfirmPassword", {
                                required: true,
                            })} placeholder="Comfirm password" className="input input-bordered" />

                            {/* { <span className="text-red-600">Password must be require</span>} */}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary bg-amber-700">Login</button>
                        </div>
                        <p>Already Have an account? <Link className=' text-red-600 font-bold' to={'/login'}>Please Login</Link></p>
                    </form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default SignUp;