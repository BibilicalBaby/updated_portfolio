import React, { useState, useEffect } from 'react';
import { MdOutlineCall } from "react-icons/md";
import { FaCircleInfo, FaPersonDigging } from "react-icons/fa6";
import { IoCodeSlashOutline } from "react-icons/io5";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { GoSearch } from "react-icons/go";
import my_image from '../assets/image_2.jpeg';

const NavBar = ({ activeSection, handleScroll }) => {
    // Set initial state based on window width
    const [isOpen, setIsOpen] = useState(window.innerWidth >= 768);

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    };

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setIsOpen(window.innerWidth >= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className='relative'>
                {
                    !isOpen &&
                    <div className='flex items-center justify-between py-3 px-7 md:hidden z-50 fixed top-0 left-0 w-full h-auto bg-white'>
                        <IoIosMenu onClick={toggleMenu} className='z-50 text-2xl font-bold ' />
                        <a href='#' className='font-sniglet font-light'>&lt;Mac Boy/&gt;</a>
                    </div>
                }
                {isOpen && (
                    <div className={`flex md:flex-row md:items-center fixed md:h-auto top-0 left-0 flex-col md:w-full h-full w-2/3 md:bg-white text-black z-20 bg-[whitesmoke] md:py-4 md:justify-between  md:px-7`}>
                        <IoMdClose className='absolute top-2 right-3 text-white font-bold text-xl md:hidden' onClick={toggleMenu} />
                        <a href='#home' id='home' onClick={handleScroll} className={`font-sniglet font-light hidden md:inline ${activeSection === 'home' ? 'text-blue-600 font-roboto scale-105 duration-300 transition  ease-in' : ''}`}>&lt;Mac_Boy/&gt;</a>
                        <div className='md:flex md:flex-row md:justify-between md:gap-10 h-full'>
                            <div className='md:hidden bg-sky-500 mb-10 pt-10 pl-4 text-white pb-4'>
                               <img src={my_image} alt="image" className='rounded-full size-16 mb-3' />
                               <h2 className='my-1 font-sniglet'>Muthusi Developer</h2>
                               <a href="tel:+254790450348" className='ml-3 font-sniglet'>+254790450348</a>
                            </div>
                            <div id="aboutMe" className={`flex items-center gap-1 md:font-poppins font-sniglet pl-4 md:pl-0 my-10 md:my-0 relative md:after:hidden after:-bottom-3 after:absolute after:block after:h-px after:w-[90%] after:bg-black after:opacity-25 ${activeSection === 'aboutMe' ? 'text-blue-600 font-roboto scale-105 duration-300 transition  ease-in' : ''}`}>
                                <FaCircleInfo />
                                <a href="#aboutMe" onClick={handleScroll}>about me</a>
                            </div>
                            <div id="what_i_do" className={`flex items-center gap-1 md:font-poppins font-sniglet pl-4 md:pl-0 my-10 md:my-0 relative md:after:hidden after:-bottom-3 after:absolute after:block after:h-px after:w-[90%] after:bg-black after:opacity-25 ${activeSection === 'what_i_do' ? 'text-blue-600 font-roboto scale-105 duration-300 transition  ease-in' : ''}`}>
                                <FaPersonDigging />
                                <a href="#what_i_do" onClick={handleScroll}>what i do</a>
                            </div>
                            <div id='mySkills' className={`flex items-center gap-1 md:font-poppins font-sniglet pl-4 md:pl-0 my-10 md:my-0 relative md:after:hidden after:-bottom-3 after:absolute after:block after:h-px after:w-[90%] after:bg-black after:opacity-25 ${activeSection === 'mySkills' ? 'text-blue-600 font-roboto scale-105 duration-300 transition  ease-in' : ''}`}>
                                <IoCodeSlashOutline />
                                <a href="#mySkills" onClick={handleScroll}>my skills</a>
                            </div>
                            <div id='contactMe' className={`flex items-center gap-1 md:font-poppins font-sniglet pl-4 md:pl-0 md:my-0 my-10 ${activeSection === 'contactMe' ? 'text-blue-600 font-roboto scale-105 duration-300 transition  ease-in' : ''}`}>
                                <MdOutlineCall />
                                <a href="#contactMe" onClick={handleScroll}>contact me</a>
                            </div>
                        </div>
                        <div className="md:relative hidden md:inline">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full pl-4 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <button className="absolute inset-y-0 right-0 flex items-center px-2 text-white bg-blue-500 rounded-r-md hover:bg-blue-600">
                                <GoSearch />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default NavBar;
