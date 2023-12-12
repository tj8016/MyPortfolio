import React from 'react'
import { FiTwitter, FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="flex justify-center bg-firstColor">
                <div className="w-[95%] max-w-[1300px]">
                    <div className=" grid grid-cols-1 md:grid-cols-3 py-8 px-11 gap-y-8 items-center">
                        <div className="flex flex-col justify-start items-center gap-y-2">
                            <div className="footer-logo flex items-center gap-x-3">
                                <img className="w-14" src="https://res.cloudinary.com/dbvdqcii9/image/upload/v1692768439/My%20Portfolio/logoimg_qpefh2.png" alt="" />
                                <h1 className="logo font-rubik text-5xl font-bold leading-5 text-white">T<span
                                    className="text-thirdColor">J</span>.</h1>
                            </div>
                            <p className="text-xl text-subColor2 font-semibold">Developer</p>
                        </div>
                        <div
                            className="footer-list text-lg flex flex-row text-center justify-evenly gap-y-4 text-subColor md:text-start">
                            <ul className="nav flex flex-col gap-y-4">
                                <li><a href="#home" id="home-btn"
                                    className="font-rubiktext-lg leading-5 transition-all hover:text-thirdColor">Home</a>
                                </li>
                                <li><a href="#about" id="about-btn"
                                    className="font-rubiktext-lg leading-5 transition-all hover:text-thirdColor">About</a>
                                </li>
                                <li><a href="#skills" id="skills-btn"
                                    className="font-rubik text-lg leading-5 transition-all hover:text-thirdColor">Skills</a>
                                </li>
                            </ul>
                            <ul className="flex flex-col gap-y-4">
                                <li><a href="#qualification" id="skills-btn"
                                    className="font-rubik text-lg leading-5 transition-all hover:text-thirdColor">Qualification</a>
                                </li>
                                <li><a href="#projects" id="project-btn"
                                    className="font-rubik text-lg leading-5 transition-all hover:text-thirdColor">Projects</a>
                                </li>
                                <li><a href="#contact" id="contact-btn"
                                    className="font-rubik text-lg leading-5 transition-all hover:text-thirdColor">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="nav-social flex flex-col items-center gap-y-2">
                        <p className="font-rubik text-subColor">Follow Me On Social Media</p>
                            <div className="flex flex-row justify-between items-center gap-x-1">
                                <a href="https://www.linkedin.com/in/tohidujjaman-hoque/" target="_blank" rel="noreferrer"
                                    className="font-rubik p-2 text-lg leading-5 rounded-full bg-thirdColor text-white border border-firstColor transition-all hover:bg-secondColor">
                                    <FiLinkedin />
                                </a>
                                <a href="https://github.com/tj8016" target="_blank" rel="noreferrer"
                                    className="font-rubik p-2 text-lg leading-5 rounded-full bg-thirdColor text-white border border-firstColor transition-all hover:bg-secondColor">
                                    <FiGithub />
                                </a>
                                <a href="https://leetcode.com/tj8016/" target="_blank" rel="noreferrer"
                                    className="font-rubik p-2 text-lg leading-5 rounded-full bg-thirdColor text-white border border-firstColor transition-all hover:bg-secondColor">
                                    <SiLeetcode />
                                </a>
                                <a href="https://twitter.com/coding_tj" target="_blank" rel="noreferrer"
                                    className="font-rubik p-2 text-lg leading-5 rounded-full bg-thirdColor text-white border border-firstColor transition-all hover:bg-secondColor">
                                    <FiTwitter />
                                </a>
                                <a href="https://www.instagram.com/coding_tj/" target="_blank" rel="noreferrer"
                                    className="font-rubik p-2 text-lg leading-5 rounded-full bg-thirdColor text-white border border-firstColor transition-all hover:bg-secondColor">
                                    <FiInstagram />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="h-[1px] bg-secondColor"></div>

                    <div className="flex justify-center py-6">
                        <p className="footer__copy text-subColor">&#169; Tohidujjaman Hoque. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
