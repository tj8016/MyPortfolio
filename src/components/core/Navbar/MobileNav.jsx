import React from 'react'
import { FiTwitter, FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { Link } from "react-scroll";

export const MobileNav = ({ mobileNav, setMobileNav }) => {
    return (
        <div id='mobile-nav'
            className={`mobile-nav absolute top-full left-0 right-0 pointer-events-auto backdrop-blur-lg transition-all ease-in-out duration-300 md:hidden ${mobileNav ? "mobile-open" : "mobile-close"}`}>
            <div className="flex flex-col py-6 gap-y-4">
                <div className="navlist">
                    <ul className="mobile-navlist flex flex-col justify-between items-center gap-y-5 px-3 ">
                        <li className='mobile-nav-item'>
                            <Link
                                activeClass="active"
                                className="home font-rubik py-6 text-lg leading-5 transition-all hover:text-thirdColor"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-84}
                                duration={800}
                                onClick={() => setMobileNav(!mobileNav)}
                            >
                                Home
                            </Link>
                        </li>
                        <li className='mobile-nav-item'>
                            <Link
                                activeClass="active"
                                className="about font-rubik py-6 text-lg leading-5 transition-all hover:text-thirdColor"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-84}
                                duration={800}
                                onClick={() => setMobileNav(!mobileNav)}
                            >
                                About
                            </Link>
                        </li>
                        <li className='mobile-nav-item'>
                            <Link
                                activeClass="active"
                                className="skills font-rubik py-6 text-lg leading-5 transition-all hover:text-thirdColor"
                                to="skills"
                                spy={true}
                                smooth={true}
                                offset={-84}
                                duration={800}
                                onClick={() => setMobileNav(!mobileNav)}
                            >
                                Skills
                            </Link>
                        </li>
                        <li className='mobile-nav-item'>
                            <Link
                                activeClass="active"
                                className="qualification font-rubik py-6 text-lg leading-5 transition-all hover:text-thirdColor"
                                to="qualification"
                                spy={true}
                                smooth={true}
                                offset={-84}
                                duration={800}
                                onClick={() => setMobileNav(!mobileNav)}
                            >
                                Qualification
                            </Link>
                        </li>
                        <li className='mobile-nav-item'>
                            <Link
                                activeClass="active"
                                className="projects font-rubik py-6 text-lg leading-5 transition-all hover:text-thirdColor"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-84}
                                duration={800}
                                onClick={() => setMobileNav(!mobileNav)}
                            >
                                Projects
                            </Link>
                        </li>
                        <li className='mobile-nav-item'>
                            <Link
                                activeClass="active"
                                className="contact font-rubik py-6 text-lg leading-5 transition-all hover:text-thirdColor"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-84}
                                duration={800}
                                onClick={() => setMobileNav(!mobileNav)}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="social-link">
                    <div className="flex flex-row justify-center items-center gap-x-1">
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
            </div>
        </div>
    )
}
