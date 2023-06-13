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
        <div className="navbar h-20 max-w-screen-xl bg-sky-500 text-white flex justify-between">
            <div className=''>
                <Link className=" text-2xl font-bold"><span className="text-sky-100">Nota</span><span className="text-red-800"> Corda</span></Link>
            </div>

            <div className=" space-x-3 font-bold">
                <Link to={'/'} className=" hover:text-sky-800">home</Link>
                <Link to={'/instructor'} className=" hover:text-sky-800">Instractors</Link>
                <Link to={'/classes'} className=" hover:text-sky-800">Classes</Link>
                <Link to={'/dashboard'} className=" hover:text-sky-800">Dashboard </Link>
            </div>

            {user ? <div> <p onClick={handleLogout} className="mr-5 font-bold">Logout</p>
                <div >
                    <img className=" h-14 w-14 rounded-full" src={user?.photoURL}/>
                </div>
            </div> :

                <Link to={'/login'} className=" font-bold hover:text-sky-800">Login </Link>
            }


        </div>
    );
};

export default Navbar;