import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import '../../Shared/Navbar/Navbar.css';
import { useForm } from "react-hook-form";


const Register = () => {

    const { createUser, updateUserProfile, googleSignIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();


    const onSubmit = data => {
        console.log(data);
        createUser(data.Email, data.Password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.Name, data.PhotoURL)
                    .then(() => {
                        const savedUser = { name: data.Name, email: data.Email, photo: data.PhotoURL, role: 'Student'}
                        console.log(savedUser);
                        fetch('https://b7a12-summer-camp-server-psi.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate('/');
                                }
                            })

                    })
                    .catch(error => console.log(error));
            })
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const savedUser = { name: loggedInUser.displayName, email: loggedInUser.email, photo: loggedInUser.photoURL, role: 'Student'};                
                fetch('https://b7a12-summer-camp-server-psi.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            navigate(from, { replace: true });
                        }
                        navigate(from, { replace: true });
                    })
                    
            })
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" {...register("Name", { required: true, maxLength: 80 })} className="input input-bordered text-black" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" {...register("Email", { required: 'Email is required' })} className="input input-bordered text-black" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" {...register("Password", { required: true, minLength: 6, maxLength: 12, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/ })} className="input input-bordered text-black" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="Confirm Password" {...register("ConfirmPassword", {
                                validate: data => {
                                    if (watch('Password') !== data) {
                                        return 'password did not match'
                                    }
                                }
                            }, { required: true, min: 6, maxLength: 12, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/ })} className="input input-bordered text-black" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" placeholder="Photo URL" {...register("PhotoURL", {})} className="input input-bordered text-black" />
                        </div>

                        {errors.Password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                        <p className="text-red-600">{errors.Email?.message}</p>
                        {errors.Password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                        {errors.Password?.type === 'pattern' && <p className="text-red-600">dont have a capital letter or a special character</p>}
                        <p className='text-red-600'>{errors.ConfirmPassword?.message}</p>

                        <div className="form-control mt-6">
                            <input className="btn bg-cyan-600" type="submit" value="Register" />
                        </div>
                        <div id='loginText' className='text-center'>
                            <div className='text-center mt-3'>
                                <button onClick={handleGoogleSignIn} className='btn bg-cyan-600 rounded-lg'> Register with Google </button>
                            </div>
                            <p><small>already have an account? </small><Link to="/login"><span>Login</span></Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;