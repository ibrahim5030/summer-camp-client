import '../../Shared/Navbar/Navbar.css'

const EachInstructor = ({ instructor }) => {
    const { instructor_name, instructor_image } = instructor;
    return (
        <div id='cardtwo' className="card lg:card-side bg-cyan-600 shadow-xl my-3 text-white">
            <div className="md:w-1/2">
                <figure><img className='p-3' src={instructor_image} alt="" /></figure>
            </div>
            <div id='card' className="md:flex-row-reverse md:w-1/2 items-center md:mt-3 my-3 pl-5">
                <h2 className="card-title">Instructor Name: {instructor_name}</h2>                
            </div>
        </div>
    );
};

export default EachInstructor;