import { FaEnvelopeOpen, FaFacebook, FaInstagram, FaPhone } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const Footer = () => {

    const handleClick = (ref) => {
        window.location.href=ref;
    }

    return (
        <>
            <footer className="text-sm w-full bg-gray-50 pt-4 bottom-0 text-gray-700">
                
                <div className='w-full md:w-11/12 m-auto md:grid grid-cols-3 gap-2 lex flex-col md:flex-row justify-between py-16'>
                    <div className="w-11/12 mx-auto py-10">
                        <p className='font-semibold uppercase text-red-800 py-4'>Riverside Chapel</p>
                        <p className='text-sm md:pr-8'>Our mission is to preach Christ and him crucified.</p>

                    </div>
                    <div className="w-11/12 mx-auto">
                        <p className='py-4 font-semibold'>Reach out on our socials</p>
                        <div className="flex flex-col">
                            <div className='p-3 bg-green-10 rounded-md my-2 text-gray-700 w-full md:w-80 flex items-center border border-gray-600 cusor-pointer' onClick={() => handleClick("https://facebook.com/profile.php?id=100089700964105&mibextid=ZbWKwl")}>
                                <FaFacebook className="mr-3 text-[20px]"/>
                                <p className='font-semibold'>Facebook</p>
                            </div>
                            <div className='p-3 bg-green-10 rounded-md my-2 text-gray-700 w-full md:w-80 flex items-center border border-gray-600 cusor-pointer'>
                                <FaInstagram  className="mr-3 text-[20px]"/>
                                <p className='font-semibold'>Instagram</p>
                            </div>
                        </div>

                    </div>
                    <div className='w-11/12 mx-auto py-20 md:py-0' id="contact">
                        <p className='py-4 font-semibold'>CONTACT US</p>
                        <div>
                            <div className='flex items-center' onClick={() => handleClick("tel:+260763959660")}>
                                <button className='p-4 text-red-800'><FaPhone /></button>
                                <p>+260 763959660</p>
                            </div>

                            <div className='w-11/12 m-auto h-[1px] bg-gray-200'></div>

                            <div className='flex items-center' onClick={() => handleClick("tel:+260974323234")}>
                                <button className='p-4 text-red-800'><FaPhone /></button>
                                <p>+260 974323234</p>
                            </div>

                            <div className='w-11/12 m-auto h-[1px] bg-gray-200'></div>

                            <div className='flex items-center' onClick={() => handleClick("mailto:kolota.loan@gmail.com")}>
                                <button className='p-4 text-red-800'><FaEnvelopeOpen /></button>
                                <p>riversidechapel@gmail.com</p>
                            </div>

                            <div className='w-11/12 m-auto h-[1px] bg-gray-200'></div>

                            <div className='flex items-center'>
                                <button className='p-4 text-red-800'><FaLocationDot /></button>
                                <p>Kaminda Drive, Riverside, Kitwe</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full m-auto py-4 border-t text-sm text-center bg-red-800 text-white">
                    <p>
                        Copyright &copy; Riverside Chapel. All rights reserved.
                    </p>
                    
                </div>
            </footer>
        </>
    );

}

export default Footer;