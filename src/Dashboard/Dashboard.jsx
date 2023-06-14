import {  FaHome, FaUsers, FaUtensils ,FaBuffer, FaDatabase, FaFunnelDollar, FaCashRegister} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useInstractor from "../Hooks/useInstractor";



const Dashboard = () => {
    const [isAdmin] = useAdmin()
    const [isInstractor] = useInstractor()

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary outline-none bg-sky-500 drawer-button lg:hidden hover:bg-sky-700 mt-20">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                
                <ul className="menu p-4 w-80 bg-sky-200 h-full">
                    <h1 className=" text-4xl font-bold text-center mt-4">Nota <span className=" text-red-500">Corda</span></h1>
                    <p  className=" text-center font-bold text-lg my-5">Harmonize your musical journey </p>
                    {

                        isAdmin.admin ? <>
                            <li><NavLink className="bg-sky-500 font-bold text-white" to={'/dashboard/home'}> <FaHome />Admin Home</NavLink></li>
                            <li><NavLink className="bg-sky-500 font-bold text-white" to={'/dashboard/manageClasses'}><FaBuffer />Manage Classes</NavLink></li>
                            <li><NavLink className="bg-sky-500 font-bold text-white" to={'/dashboard/manageUser'}><FaUsers />Manage Users</NavLink></li>



                        </> : isInstractor.instractor ? <>


                            <li><NavLink className="bg-sky-500 font-bold text-white" to={'/dashboard/home'}> <FaHome />Instarctor Home</NavLink></li>
                            <li><NavLink className="bg-sky-500 font-bold text-white" to={'/dashboard/addClass'}><FaUtensils /> Add Class</NavLink></li>
                            <li><NavLink className="bg-sky-500 font-bold text-white" to={'/dashboard/myClasses'}><FaBuffer />My Classes</NavLink></li>
                           
                           


                        </> : <>
                            <li><NavLink className="bg-sky-500 font-bold text-white" to={'/dashboard/selectedClass'}><FaBuffer />My Selected Classes</NavLink></li>
                            <li ><NavLink className="bg-sky-500 font-bold text-white" to={'/dashboard/enrolled'}><FaDatabase />My Enrolled Classes</NavLink></li>
                            <li><NavLink className="bg-sky-500 font-bold text-white" to={'/dashboard/paymentHistory'}><FaFunnelDollar />Payment History</NavLink></li>
                            
                        </>
                    }

                    <div className="divider "></div>
                    <li><NavLink className="bg-sky-500 font-bold text-white" to={'/'}><FaHome />Home</NavLink></li>
                    <li><NavLink className="bg-sky-500 font-bold text-white" to={'/classes'}> <FaCashRegister/>Classes</NavLink></li>



                </ul>

            </div>
        </div>
    );
};

export default Dashboard;