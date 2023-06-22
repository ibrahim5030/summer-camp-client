import useMyClass from "../../../hooks/useMyClass";
import MyCls from "../../MyCls/MyCls";



const MyClasses = () => {
    const [myclasses] = useMyClass(); 
    
    return (
        <div>
            <h3 className="text-3xl font-bold text-center">My Classes</h3>
            <div className="overflow-x-auto py-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Class Image</th>
                            <th>Class name</th>
                            <th>Instructor name</th>
                            <th>Enrolled Students</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Feedback</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myclasses.map(mycls => <MyCls key={mycls._id} mycls={mycls}></MyCls>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;