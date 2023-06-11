import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {
    const { user ,logOut} = useContext(AuthContext)

    console.log(user)
    const handleLogout = ()=>{
        logOut()
        .then(()=>{})
        .catch(error => console.log(error))
    }
    return (
        <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white flex justify-between">
            <div className=''>
                <Link className=" text-2xl font-bold"><span className="text-yellow-600">Nota</span><span className="text-red-800"> Corda</span></Link>
            </div>

            <div className=" space-x-3 font-bold">
                <Link to={'/'} className=" hover:text-amber-600">home</Link>
                <Link className=" hover:text-amber-600">Instractors</Link>
                <Link to={'/classes'} className=" hover:text-amber-600">Classes</Link>
                <Link to={'/dashboard'} className=" hover:text-amber-600">Dashboard </Link>
            </div>

            {user ? <div> <p onClick={handleLogout} className="mr-5 font-bold">Logout</p>
                <div >
                    <img className=" w-10 rounded-full" src={user?.photoURL}/>
                </div>
            </div> :

                <Link to={'/login'} className=" font-bold hover:text-amber-600">Login </Link>
            }


        </div>
    );
};

export default Navbar;