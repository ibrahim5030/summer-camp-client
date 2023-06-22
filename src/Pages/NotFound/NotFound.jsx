import { Link } from 'react-router-dom';
import image from '../../assets/octopus.png';

const NotFound = () => {
    return (
        <div className="bg-stone-300 h-screen">
            <div className="w-8/12 mx-auto">
            <img className='w-5/6' src={image} alt="" />
            <Link to="/"><button className='btn-block bg-stone-800 text-white py-3 font-bold rounded-lg'>Back To Home</button></Link>
            </div>
        </div>
    );
};

export default NotFound;