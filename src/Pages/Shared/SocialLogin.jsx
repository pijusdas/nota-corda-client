import { useContext } from "react";
 import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const SocialLogin = () => {
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/';

    const { googleSignIn } = useContext(AuthContext)

    const handleLogin = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                const savedUser = { name: loggedUser.displayName, email: loggedUser.email ,role: 'student'}

                fetch('https://nota-corda-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true })
                    })

            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="divider"></div>
            <div className=" w-full text-center my-5">
                <button onClick={handleLogin} className=" text-sky-500 btn btn-outline btn-circle">
                    <FaGoogle />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;