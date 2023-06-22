import '../../Shared/Navbar/Navbar.css';

const Teachers = ({ instr }) => {

    const { instructor_name, instructor_image, email } = instr;
    return (
        <div>
            <div id="cardfive" className="card lg:card-side bg-cyan-600 shadow-xl my-3 text-white">
                <div className="md:w-1/2">
                    <figure><img className='p-3' src={instructor_image} alt="" /></figure>
                </div>
                <div id='card' className="md:flex-row-reverse md:w-1/2 items-center md:mt-10 my-3 pl-5">
                    <h2 className="card-title">Instructor Name: {instructor_name}</h2>
                    <p>Instructor Email: {email}</p>
                </div>
            </div>
        </div>
    );
};

export default Teachers;