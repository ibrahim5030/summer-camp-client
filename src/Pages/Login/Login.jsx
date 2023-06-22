import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../../Shared/Navbar/Navbar.css';

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [passwordShown, setPasswordShown] = useState(false);


    const from = location.state?.from?.pathname || "/";

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);

        signIn(data.Email, data.Password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire({
                    title: 'Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const savedUser = { name: loggedInUser.displayName, email: loggedInUser.email, photo: loggedInUser.photoURL, role: 'Student' };
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

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };


    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} className="input input-bordered text-black" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={passwordShown ? "text" : "password"} placeholder="Password" {...register("Password", { required: true, min: 6, maxLength: 12, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/i })} className="input input-bordered text-black" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-cyan-600" type="submit" value="Login" />
                        </div>
                        <div id='registerText' className='text-center'>
                            <div className='text-center mt-3'>
                                <button onClick={handleGoogleSignIn} className='btn bg-cyan-600 rounded-lg'> Login with Google </button>
                            </div>
                            <p className='mt-5'><small>Dont have an account? </small><Link to="/register"><span>Register</span></Link></p>
                        </div>
                    </form>
                    <div>
                        <button className='btn btn-block bg-cyan-600' onClick={togglePassword}>Show/hide Password</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;