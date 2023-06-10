import { useContext, } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
 import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
import SocialLogin from '../Shared/SocialLogin';

const Login = () => {
    const { singIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/'

    

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const pass = form.passwords.value
        console.log(email, 'pass===', pass)

        singIn(email, pass)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    title: 'User Loged In Succesfully ',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })
    }

   

    return (
        <>
          
            <div className="hero min-h-screen pt-10 bg-base-200">
                <div className="hero-content w-2/4 ">
                    
                    <div className="card w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="passwords" placeholder="password" className="input input-bordered" />
                               
                            </div>
                           
                            <div className="form-control mt-6">
                                <input className="btn btn-primary bg-amber-700" type="submit" value="Login" />
                            </div>
                            <p>New to Nota Corda? <Link className=' text-red-600 font-bold' to={'/signUp'}>Please Sign Up</Link></p>
                        </form>
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;