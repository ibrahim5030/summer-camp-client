import { Link } from "react-router-dom";
import useSports from "../../../hooks/useSports";
import Swal from "sweetalert2";





const ManageClasses = () => {
    const [sports, , refetch] = useSports();


    const handleApproved = sprts => {
        fetch(`https://b7a12-summer-camp-server-psi.vercel.app/sports/approved/${sprts._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${sprts.class_name} is Approved`,
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
    }

    const handleDeny = sprts => {
        fetch(`https://b7a12-summer-camp-server-psi.vercel.app/sports/denied/${sprts._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${sprts.class_name} is Denied`,
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
    }



    return (
        <div>
            <h3 className="text-3xl font-bold text-center">All The Classes</h3>
            <div className="overflow-x-auto py-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Class Image</th>
                            <th>Class name</th>
                            <th>Instructor name</th>
                            <th>Instructor email</th>
                            <th>Available seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sports.map(sprts => <tr key={sprts._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={sprts.class_image} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {sprts.class_name}
                                </td>
                                <td>
                                    {sprts.instructor_name}
                                </td>
                                <td>
                                    {sprts.email}
                                </td>
                                <td className="text-center">
                                    {sprts.available_seats}
                                </td>
                                <td>
                                    ${sprts.price}
                                </td>
                                <td>
                                    {sprts.status === "approved" || sprts.status === "denied" ? <p>{sprts.status === "approved" ? "approved" : "denied"}</p> :
                                        <p>{sprts.status}</p>}
                                </td>
                                <td>
                                    <button onClick={() => handleApproved(sprts)} disabled={sprts.status === "denied" || sprts.status === "approved"} className="btn btn-xs btn-success">Approve</button>

                                    <button onClick={() => handleDeny(sprts)} disabled={sprts.status === "denied" || sprts.status === "approved"} className="btn btn-xs btn-error my-1">Deny</button>

                                    <Link to={`/dashboard/feedback/${sprts._id}`}><button className="btn btn-xs btn-info">Feedback</button></Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;