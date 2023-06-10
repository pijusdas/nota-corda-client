import { FaBook, FaHome, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useInstractor from "../Hooks/useInstractor";


const Dashboard = () => {
    // const [isAdmin,setIsAdmin] = useState(false)
    // const [isInstractor,setInstractor] = useState(false)


    // useEffect(()=>{
    //     fetch('http://localhost:5000/users')
    //     .then(res => res.json())
    //     .then(data => {
    //         data.forEach((user) => {
    //             if (user.role === 'admin') {
    //               setIsAdmin(!isAdmin);
    //             } else if (user.role === 'instructor') {
    //               setInstractor(!isInstractor);
    //             } 
    //           });
    //     })
    // },[])
    
    const [isAdmin] = useAdmin()
    console.log(isAdmin.admin)
    const [isInstractor] = useInstractor()
    console.log(isInstractor)

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
                            <li><NavLink to={'/dashboard/manageitems'}><FaWallet />Manage Items</NavLink></li>
                           


                        </> : <>
                            <li><NavLink to={'/dashboard/home'}> <FaHome />Student Home</NavLink></li>
                            <li><NavLink to={'/dashboard/addItem'}><FaUtensils /> Add an Item</NavLink></li>
                            <li><NavLink to={'/dashboard/manageitems'}><FaWallet />Manage Items</NavLink></li>
                            <li><NavLink to={'/dashboard/myCart'}><FaBook />Manage Bokings</NavLink></li>
                            <li><NavLink to={'/dashboard/allUsers'}><FaUsers />All Users</NavLink></li>


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