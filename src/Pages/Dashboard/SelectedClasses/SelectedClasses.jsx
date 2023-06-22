import Swal from "sweetalert2";
import useClasses from "../../../hooks/useClasses";
import { Link } from "react-router-dom";



const SelectedClasses = () => {
    const [classes, refetch] = useClasses();
    console.log(classes);

    const handleDelete = c => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://b7a12-summer-camp-server-psi.vercel.app/classes/${c._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Class has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div>
            <div className="text-center">
                <h3 className="text-3xl">Total Selected Classes: {classes.length}</h3>
            </div>
            <div className="overflow-x-auto py-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Course Image</th>
                            <th>Course Name</th>
                            <th>Instructor Name</th>
                            <th>Price</th>
                            <th>Delete</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((c, index) => <tr key={c._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={c.classImage
                                                } />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {c.className
                                    }
                                </td>
                                <td>{c.instructorName
                                }</td>
                                <td>
                                    {c.price}
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(c)} className="btn bg-cyan-600">DELETE</button>
                                </td>
                                <td>
                                    <Link to={`/dashboard/payment/${c._id}`}><button className="btn bg-cyan-600">PAY</button></Link>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClasses;