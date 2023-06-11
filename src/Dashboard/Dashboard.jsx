import {  FaHome, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
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
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-[#D1A054] h-full">
                    {

                        isAdmin.admin ? <>
                            <li><NavLink to={'/dashboard/home'}> <FaHome />Admin Home</NavLink></li>
                            <li><NavLink to={'/dashboard/manageClasses'}><FaWallet />Manage Classes</NavLink></li>
                            <li><NavLink to={'/dashboard/manageUser'}><FaUsers />Manage Users</NavLink></li>



                        </> : isInstractor.instractor ? <>


                            <li><NavLink to={'/dashboard/home'}> <FaHome />Instarctor Home</NavLink></li>
                            <li><NavLink to={'/dashboard/addClass'}><FaUtensils /> Add Class</NavLink></li>
                            <li><NavLink to={'/dashboard/myClasses'}><FaWallet />My Classes</NavLink></li>
                           


                        </> : <>
                            <li><NavLink to={'/dashboard/home'}> <FaHome />Student Home</NavLink></li>
                            <li><NavLink to={'/dashboard/addItem'}><FaUtensils />My Selected Classes</NavLink></li>
                            <li><NavLink to={'/dashboard/manageitems'}><FaWallet />My Enrolled Classes</NavLink></li>
                            


                        </>
                    }

                    <div className="divider"></div>
                    <li><NavLink to={'/'}><FaHome />Home</NavLink></li>
                    <li><NavLink to={'menu'}> Menu</NavLink></li>
                    <li><NavLink to={'/order'}>Shop</NavLink></li>
                    <li><NavLink to={'/order'}>Contact</NavLink></li>



                </ul>

            </div>
        </div>
    );
};

export default Dashboard;