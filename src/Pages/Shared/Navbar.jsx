import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white flex justify-between">
            <div className=''>
                <Link className=" text-2xl font-bold"><span className="text-yellow-600">Nota</span><span className="text-red-800"> Corda</span></Link>
            </div>

            <div className=" space-x-3 font-bold">
            <Link className=" hover:text-amber-600">home</Link>
            <Link className=" hover:text-amber-600">Instractors</Link>
            <Link className=" hover:text-amber-600">Classes</Link>
            <Link className=" hover:text-amber-600">Dashboard </Link>
            </div>

            <Link to={'/login'} className=" font-bold hover:text-amber-600">Login </Link>
            <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>

        </div>
    );
};

export default Navbar;