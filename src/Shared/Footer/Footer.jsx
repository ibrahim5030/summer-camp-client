import '../Navbar/Navbar.css';
import logo from'../../assets/sportslogo.png';


const Footer = () => {
    return (
        <div id='footer' className='bg-cyan-600 text-center'>
            <div className='md:grid md:grid-cols-3 md:gap-8 w-10/12 mx-auto py-10 text-white'>
                <div className='mt-10 mb-3 w-8/12 mx-auto'>
                    <img className='w-56' src={logo} alt="" />
                </div>
                <div className='my-10'>
                    <h3 className='text-xl font-bold mb-3'>Address</h3>
                    <p className='mb-3'>1198 130th Rd, Osceola, Nebraska 68651, USA</p>

                </div>
                <div className='my-10'>
                    <h3 className='text-xl font-bold mb-3'>Contact</h3>
                    <p className='mb-3'>Phone: 202-555-0138, 202-555-0188</p>
                    <p>Email: info@example.com</p>
                </div>
            </div>
            <p className='text-center py-5 text-white'>©Copyright rights reserved</p>
        </div>
    );
};

export default Footer;