import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';
import Navbar from '../Shared/NavBar/NavBar';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import { FaChalkboardTeacher, FaCheckCircle, FaFolderPlus, FaForward, FaGraduationCap, FaHistory, FaList, FaSitemap, FaUserShield, FaUsers } from 'react-icons/fa';



const Dashboard = () => {    

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();


    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-slate-200 text-base-content text-xl">

                        {
                            isAdmin ? <>
                                <li><FaUserShield></FaUserShield> Admin Dashboard:</li>
                                <li><Link to="/dashboard/manageclasses"><FaList></FaList> Manage Classes</Link></li>
                                <li><Link to="/dashboard/manageusers"><FaUsers></FaUsers> Manage Users</Link></li>
                            </> :
                                isInstructor ? <><li><FaChalkboardTeacher></FaChalkboardTeacher> Instructor Dashboard:</li>
                                    <li><Link to="/dashboard/myclasses"><FaSitemap></FaSitemap> My Classes</Link></li>
                                    <li><Link to="/dashboard/addaclass"><FaFolderPlus></FaFolderPlus> Add a Class</Link></li>
                                </> :
                                    <><li><FaGraduationCap></FaGraduationCap> Student Dashboard:</li>
                                        <li><Link to="/dashboard/selectedclass"><FaCheckCircle></FaCheckCircle> My Selected Classes</Link></li>
                                        <li><Link to="/dashboard/enrolledclass"><FaForward></FaForward> My Enrolled Classes</Link></li>
                                        <li><Link to="/dashboard/paymenthistory"><FaHistory></FaHistory> Payment History</Link></li>
                                    </>
                        }
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;