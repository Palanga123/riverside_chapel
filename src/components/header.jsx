import { FaBars, FaFacebook, FaLinkedin, FaEnvelope, FaMobileAlt } from "react-icons/fa";
import { FaLocationDot, FaX } from "react-icons/fa6";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

    const [showContent, setShowContent] = useState(false);

    const toggleContent = () => {
        return setShowContent(!showContent);
    };


    const socials = [
        { id: 1, name: <FaFacebook />, href: "https://facebook.com/profile.php?id=100089700964105&mibextid=ZbWKwl" },
        { id: 2, name: <FaLinkedin />, href: "#" },
        { id: 3, name: <FaEnvelope />, href: "mailto:kolota.loan@gmail.com" },
    ]

    const links = [
        { id: 1, name: "Home", href: "/#hero" },
        { id: 2, name: "Ministries", href: "/ministries#hero" },
        { id: 3, name: "Sermons", href: "/sermons#hero" },
        { id: 4, name: "About", href: "/about#hero" },
    ]

    const socialItems = socials.map(social =>
        <NavLink key={social.id} to={social.href}>
            <li key={social.id} className="px-2 md:px-4 py-2">{social.name}</li>
        </NavLink>
    )


    const linkItems = links.map(link =>
        <NavLink key={link.id} to={link.href}>
            <button key={link.id} className="px-4 h-full hover:underline underline-offset-8 uppercase">{link.name}</button>
        </NavLink>
    )

    const mobileLinkItems = links.map(link =>
        <NavLink key={link.id} to={link.href}>
            <button key={link.id} className="text-left block font-semibold px-4 py-3 w-full h-full uppercase">{link.name}</button>
        </NavLink>
    )

    return (
        <>
            <header id="text" className="w-full shadow-sm bg-red-700 text-white">
                <div className="text-sm w-full bg-gray-700 text-gray-200">
                    <div className="w-11/12 md:w-4/5 m-auto bg-transparent py-1 flex flex-col md:flex-row items-center justify-between">
                        <div className="flex">
                            <p className="flex flex-col md:flex-row items-center text-left">
                                <span className="px-3 flex items-center "><FaMobileAlt className="mr-2 text-red-700" /> +260 974323234</span>
                                <span className="px-3 flex items-center "><FaLocationDot className="mr-2 text-red-700" /> Jambo Drive, Riverside, Kitwe</span>
                            </p>
                        </div>

                        <ul className="hidden md:block justify-between md:justify-end font-medium items-center">
                            <div className="flex items-center">
                                <p className='hidden md:block px-4 text-[14px]'>Socials</p>
                                |

                                {socialItems}
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="w-full py-2">
                    <div className="w-11/12 md:w-4/5 m-auto bg-transparent flex justify-between h-14 items-center">
                        <div>
                            {/* <NavLink to="/"> */}
                                <div className="text-justify">
                                    <p className="font-bold text-[20px] sm:text-lg lg:text-2xl text-gay-100">Riverside Chapel</p>
                                </div>
                            {/* </NavLink> */}
                        </div>
                        <div className="hidden md:block justify-evenly ml-3 font-semibold text-[13px]">
                            {linkItems}
                        </div>
                        <div className="block md:hidden">
                            <button className="p-3 border border-gray-100 rounded duration-500" onClick={() => toggleContent()}>
                                {!showContent ? <FaBars /> : <FaX />}
                            </button>
                        </div>
                    </div>
                </div>
                {showContent ?
                    <div className="block shadow w-full bg-red-700 rounded-b-md p-4 text-[13px] duration-1000">
                        {mobileLinkItems}
                    </div>
                    :
                    ""
                }

            </header>
            {/* <div>

            </div> */}
        </>
    )
}

export default Header;