import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useClasses from "../../hooks/useClasses";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";



const Class = ({ cls }) => {
    const { class_image, class_name, instructor_name, available_seats, num_students, price, _id } = cls;

    const { user } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [, refetch] = useClasses();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();


    const notAvailable = available_seats === 0;


    const handleSelectClass = cls => {
        console.log(cls);
        if (user && user.email) {
            const selectedClass = { classId: _id, className: class_name, classImage: class_image, instructorName: instructor_name, availableSeats: available_seats, price, email: user.email };

            fetch('https://b7a12-summer-camp-server-psi.vercel.app/classes', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class Selected Successfully.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to select class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div>
            {notAvailable ? <div id="cardsix" className="card lg:card-side bg-red-300 shadow-xl my-3 text-black">
                <div className="md:w-1/2">
                    <figure><img className='p-3' src={class_image} alt="" /></figure>
                </div>
                <div id='cardseven' className="md:flex-row-reverse md:w-1/2 items-center my-3 pl-5">
                    <h2 className="card-title">Class Name: {class_name}</h2>
                    <p>Instructor Name: {instructor_name}</p>
                    <p>Available Seats: {available_seats}</p>
                    <p>Number Of Students: {num_students}</p>
                    <p>Price: ${price}</p>
                    <button disabled={true} className="btn">Select</button>
                </div>
            </div> : isAdmin || isInstructor ? 
            <div id="cardfive" className="card lg:card-side bg-cyan-600 shadow-xl my-3 text-white">
                <div className="md:w-1/2">
                    <figure><img className='p-3' src={class_image} alt="" /></figure>
                </div>
                <div id='card' className="md:flex-row-reverse md:w-1/2 items-center my-3 pl-5">
                    <h2 className="card-title">Class Name: {class_name}</h2>
                    <p>Instructor Name: {instructor_name}</p>
                    <p>Available Seats: {available_seats}</p>
                    <p>Number Of Students: {num_students}</p>
                    <p>Price: ${price}</p>
                    <button disabled={true} className="btn">Select</button>
                </div>
            </div> :
            <div id="cardfive" className="card lg:card-side bg-cyan-600 shadow-xl my-3 text-white">
                <div className="md:w-1/2">
                    <figure><img className='p-3' src={class_image} alt="" /></figure>
                </div>
                <div id='card' className="md:flex-row-reverse md:w-1/2 items-center my-3 pl-5">
                    <h2 className="card-title">Class Name: {class_name}</h2>
                    <p>Instructor Name: {instructor_name}</p>
                    <p>Available Seats: {available_seats}</p>
                    <p>Number Of Students: {num_students}</p>
                    <p>Price: ${price}</p>
                    <button onClick={() => handleSelectClass(cls)} className="btn">Select</button>
                </div>
            </div>}
        </div>
    );
};

export default Class;