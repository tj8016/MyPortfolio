import React, { useState } from 'react'
import { FiTwitter, FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { MobileNav } from './core/Navbar/MobileNav.jsx';
import { Link, animateScroll as scroll } from "react-scroll";

export const Navbar = () => {
    const [mobileNav, setMobileNav] = useState(false);
    return (
        <header id="nav-bar" className="fixed w-[100%] top-0 z-[1000] bg-bgColor  flex flex-col items-center justify-center"
            style={{ boxShadow: 'rgba(157, 157, 157, 0.2) 0px 4px 10px' }}
        >
            <nav
                className="w-[100%] max-w-[1300px] h-[100%] bg-bgColor z-40 py-4 px-4 mx-auto flex flex-row justify-between items-center">
                <div className="nav-logo flex justify-between items-center gap-x-3 cursor-pointer"
                    onClick={() => scroll.scrollToTop()}
                >
                    <img className='w-11' src='https://res.cloudinary.com/dbvdqcii9/image/upload/v1692768439/My%20Portfolio/logoimg_qpefh2.png' alt='logo' />
                    <h1 className="logo font-rubik text-3xl font-bold leading-5 text-firstColor">T<span
                        className="text-thirdColor">J</span>.</h1>
                </div>
                <div className="hidden nav-list text-lg md:block">
                    <ul className="nav flex flex-row justify-between items-center gap-x-6 py-3">
                        <li className='nav-item'>
                            <Link
                                activeClass="active"
                                className="home font-rubik py-6 text-lg leading-5 transition-all hover:text-thirdColor"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-84}
                                duration={800}
                            >
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                activeClass="active"
                                className="about font-rubik py-6 text-lg leading-5 transition-all hover:text-thirdColor"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-84}
                                duration={800}
                            >
                                About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                activeClass="active"
                                className="skills font-rubik py-6 text-lg leading-5 transition-all hover:text-thirdColor"
                                to="skills"
                                spy={true}
                                smooth={true}
                                offset={-84}
                                duration={800}
                            >
                                Skills
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                activeClass="active"
                                className="qualification font-rubik py-6 text-lg leading-5 transition-all hover:text-thirdColor"
                                to="qualification"
                                spy={true}
                                smooth={true}
                                offset={-84}
                                duration={800}
                            >
                                Qualification
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                activeClass="active"
                                className="projects font-rubik py-6 text-lg leading-5 transition-all hover:text-thirdColor"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-84}
                                duration={800}
                            >
                                Projects
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                activeClass="active"
                                className="contact font-rubik py-6 text-lg leading-5 transition-all hover:text-thirdColor"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-84}
                                duration={800}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="hidden nav-social md:block">
                    <div className="flex flex-row justify-between items-center gap-x-1">
                        <a href="https://www.linkedin.com/in/tohidujjaman-hoque/" target="_blank" rel="noreferrer"
                            className="font-rubik p-2 text-lg leading-5 rounded-full bg-firstColor text-white border border-firstColor transition-all hover:bg-secondColor">
                            <FiLinkedin />
                        </a>
                        <a href="https://github.com/tj8016" target="_blank" rel="noreferrer"
                            className="font-rubik p-2 text-lg leading-5 rounded-full bg-firstColor text-white border border-firstColor transition-all hover:bg-secondColor">
                            <FiGithub />
                        </a>
                        <a href="https://leetcode.com/tj8016/" target="_blank" rel="noreferrer"
                            className="font-rubik p-2 text-lg leading-5 rounded-full bg-firstColor text-white border border-firstColor transition-all hover:bg-secondColor">
                            <SiLeetcode />
                        </a>
                        <a href="https://twitter.com/coding_tj" target="_blank" rel="noreferrer"
                            className="font-rubik p-2 text-lg leading-5 rounded-full bg-firstColor text-white border border-firstColor transition-all hover:bg-secondColor">
                            <FiTwitter />
                        </a>
                        <a href="https://www.instagram.com/coding_tj/" target="_blank" rel="noreferrer"
                            className="font-rubik p-2 text-lg leading-5 rounded-full bg-firstColor text-white border border-firstColor transition-all hover:bg-secondColor">
                            <FiInstagram />
                        </a>
                    </div>
                </div>

                <div id="toggle"
                    className="toggle mobile-close relative flex h-[52px] w-[60px] cursor-pointer flex-col items-end justify-between p-[0.8rem] transition-all duration-300 ease-in-out md:hidden"
                    onClick={() => setMobileNav(!mobileNav)}
                >
                    <span className="first-toggle w-10 rounded-md py-[2px] false bg-black transition-all duration-300"></span>
                    <span className="second-toggle w-8 py-[2px] rounded-md bg-black transition-all duration-300"></span>
                    <span className="third-toggle w-6 false rounded-md bg-black py-[2px] transition-all duration-300"></span>
                </div>
            </nav>
            <MobileNav mobileNav={mobileNav} setMobileNav={setMobileNav} />
        </header>
    )
}
