import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";



const AddAClass = () => {
    const { user } = useContext(AuthContext);

    const handleAddClass = event => {
        event.preventDefault();

        const form = event.target;
        const class_name = form.class_name.value;
        const class_image = form.class_image.value;
        const instructor_name = form.instructor_name.value;
        const email = form.email.value;
        const available_seats = parseInt(form.available_seats.value);
        const price = parseInt(form.price.value);
        const instructor_image = form.instructor_image.value;
        const num_students = parseInt(0);      

        form.reset('');

        const newClasses = { class_name, class_image, instructor_name, email, available_seats, price, instructor_image, num_students, status: 'pending', feedback: '' };
        console.log(newClasses);

        fetch('https://b7a12-summer-camp-server-psi.vercel.app/sports', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newClasses)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Class Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className="w-10/12 mx-auto">
            <p className="text-3xl text-center my-10">Add a Class</p>
            
            <form onSubmit={handleAddClass}>
                <div className="md:flex gap-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <label className="input-group">
                            <span>Class Name</span>
                            <input type="text" name="class_name" placeholder="Class Name" className="input input-bordered w-full text-black" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Class Image URL</span>
                        </label>
                        <label className="input-group">
                            <span>Class Image URL</span>
                            <input type="text" name="class_image" placeholder="Class Image URL" className="input input-bordered w-full text-black" />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Instructor name</span>
                        </label>
                        <label className="input-group">
                            <span>Instructor name</span>
                            <input type="text" name="instructor_name" defaultValue={user?.displayName} placeholder="Instructor name" className="input input-bordered w-full text-black" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Instructor email</span>
                        </label>
                        <label className="input-group">
                            <span>Instructor email</span>
                            <input type="email" name="email" defaultValue={user?.email} placeholder="Instructor email" className="input input-bordered w-full text-black" />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Available seats</span>
                        </label>
                        <label className="input-group">
                            <span>Available seats</span>
                            <input type="text" name="available_seats" placeholder="Available seats" className="input input-bordered w-full text-black" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <span>Price</span>
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full text-black" />
                        </label>
                    </div>
                </div>                                
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Instructors Image URL</span>
                    </label>
                    <label className="input-group">
                        <span>Instructors Image URL</span>
                        <input type="text" name="instructor_image" defaultValue={user?.photoURL} placeholder="Instructors Image URL" className="input input-bordered w-full text-black" />
                    </label>
                </div>
                <input className="btn bg-cyan-600 w-full my-10" type="submit" value="Add" />
            </form>
        </div>

    );
};

export default AddAClass;