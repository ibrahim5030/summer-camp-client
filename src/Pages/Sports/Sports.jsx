import '../../Shared/Navbar/Navbar.css'

const Sports = ({ eachClass }) => {
    const { class_name, class_image, num_students } = eachClass;
    return (
        <div id='card' className="card lg:card-side bg-cyan-600 shadow-xl my-3 text-white">
            <div className="md:w-1/2">
                <figure><img className='p-3' src={class_image} alt="" /></figure>
            </div>
            <div id='card' className="md:flex-row-reverse md:w-1/2 items-center md:mt-10 my-3 pl-5">
                <h2 className="card-title">Class Name: {class_name}</h2>
                <p>Number Of Students: {num_students}</p>
            </div>
        </div>
    );
};

export default Sports;