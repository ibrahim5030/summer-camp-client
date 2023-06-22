import { Link } from "react-router-dom";


const MyCls = ({mycls}) => {
    const {class_image, class_name, instructor_name, num_students, price, status, feedback, _id} = mycls;
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={class_image} />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {class_name}
            </td>
            <td>
                {instructor_name}
            </td>
            <td className="text-center">
                {num_students}
            </td>
            <td className="text-center">
                ${price}
            </td>
            <td>
                {status === "approved" || status === "denied" ? <p>{status === "approved" ? "approved" : "denied"}</p> :
                    <p>{status}</p>}
            </td>
            <td>
                {feedback}
            </td>
            <td>
                <Link to={`/dashboard/update/${_id}`}><button className="btn bg-cyan-600">Update</button></Link>
            </td>
        </tr>
    );
};

export default MyCls;