import cricket from '../../assets/boysplaying.jpg';
import { Bounce, Slide, Fade } from "react-awesome-reveal";
import useSports from '../../hooks/useSports';
import Sports from '../Sports/Sports';
import EachInstructor from '../EachInstructor/EachInstructor';
import '../../Shared/Navbar/Navbar.css'

const Home = () => {

    const [allSports] = useSports();
    const sports = allSports?.slice(0, 6);

    return (
        <div>
            <div>
                <Slide duration={1000}>
                    <div className="hero h-[650px]" style={{ backgroundImage: `url("${cricket}")` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Sports Academy for School Students</h1>
                                <p className="mb-5">Here are the opportunities for school students to learn many sports in their summer vacation.</p>
                            </div>
                        </div>
                    </div>
                </Slide>
            </div>
            <div>
                <div>
                    <Fade duration={5000}>
                        <div className="mt-16">
                            <h3 className="text-3xl text-center py-1 underline underline-offset-8">Popular Classes Section</h3>
                            <div className="w-10/12 mx-auto md:grid md:grid-cols-2 gap-5 my-10">
                                {
                                    sports.map(eachClass => <Sports key={eachClass._id} eachClass={eachClass}></Sports>)
                                }
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
            <div>
                <Bounce duration={3000}>
                    <div className="mt-16">
                        <h3 className="text-3xl text-center py-1 underline underline-offset-8">Popular Instructors Section</h3>
                        {/* <Fade duration={5000}> */}
                        <div className="w-10/12 mx-auto md:grid md:grid-cols-3 gap-5 my-10">
                            {
                                sports.map(instructor => <EachInstructor key={instructor._id} instructor={instructor}></EachInstructor>)
                            }
                        </div>
                    </div>
                </Bounce>
            </div>
            <div>
                <div id='partthree' className='md:flex items-center w-10/12 mx-auto bg-cyan-600 text-white rounded-3xl my-10'>
                    <div className='md:w-1/2'>
                        <img className='rounded-3xl' src="https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />    
                    </div>
                    <div className='md:w-1/2 pl-10 py-5'>
                        <h3 className='text-3xl py-3'>Why Us</h3>
                        <div className='text-xl'>
                        <p>1. Friendly Academic Sports Programmes</p>                        
                        <p>2. High Performance Sports Ecosystem</p>
                        <p>3. Strong Support in Academic and Overall Well-being</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;