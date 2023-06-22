import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";



const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch, } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    });

    const handleAdmin = user => {
        fetch(`https://b7a12-summer-camp-server-psi.vercel.app/users/admin/${user?._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} Successfully Added As Admin`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleInstructor = user => {
        fetch(`https://b7a12-summer-camp-server-psi.vercel.app/users/instructor/${user?._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} Successfully Added As Instructor`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    return (
        <div>
            <h3 className="text-3xl font-bold text-center">Total Number of Users: {users.length}</h3>
            <div className="overflow-x-auto py-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Change Role</th>
                            <th>Change Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user.photo} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h3>{user.name}</h3>
                                </td>
                                <td>
                                    <h3>{user.email}</h3>
                                </td>
                                <td>{user.role === "Admin" || user.role === "Instructor" ? <p>{user.role === "Admin" ? "Admin" : "Instructor"}</p> :
                                    <p>{user.role}</p>}
                                </td>
                                <td>
                                    <button onClick={() => handleInstructor(user)} disabled={user.role === "Instructor"} className="btn bg-cyan-600">Make Instructor</button>
                                </td>
                                <td>
                                    <button onClick={() => handleAdmin(user)} disabled={user.role === "Admin"} className="btn bg-cyan-600">Make Admin</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;