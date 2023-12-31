import React from 'react'
import { VscSend } from "react-icons/vsc";
import { BsArrowDownShort } from "react-icons/bs";
import { MdOutlineMouse } from "react-icons/md";
import bggradient from "../assets/images/homegradient.svg"
import { TypingAnimation } from './common/TypingAnimation';
import { Link } from "react-scroll";

export const Home = ({id}) => {
    return (
        <div id={id} name='home' className="home w-[100%] bg-bgColor relative">
            <img className="absolute top-0 right-0" src={bggradient} alt=""/>
            <div className="wrapper w-[95%] max-w-[1300px] mx-auto flex flex-col-reverse justify-between items-center gap-y-11 pt-[100px] pb-11 md:flex-row">
                <div className="home-content flex flex-row justify-center items-center md:w-[50%]">
                    <div className="flex flex-col justify-between gap-y-3">
                        <h3 className="font-rubik text-xl md:text-2xl xl:text-4xl text-secondColor">Hi, I'am <span
                            className="text-secondColor">Tohidujjaman Hoque</span></h3>
                        <h1 className="font-rubik text-xl font-bold flex flex-row gap-x-2 md:text-3xl xl:text-4xl">
                            <span className="text-firstColor">I'am a </span><span className="text-thirdColor"><TypingAnimation/></span>
                        </h1>
                        <p className=" text-subText text-xs md:text-base">B.tech at Aliah University || Leetcode 400+ ||
                        <br/> MERN Stack Developer || Open Source Contribution || <br/> hacktoberfest 21 ||
                            Youtuber
                        </p>
                        <div className="home-button flex items-center gap-x-1 mt-5">
                            <Link  
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-84}
                                duration={800}
                                className="flex gap-x-2 text-[#fff] items-center bg-firstColor xl:text-lg text-sm xl:px-7 px-5 xl:py-4 py-2 border border-firstColor rounded-md  transition-all hover:bg-secondColor">
                                Contact Me<VscSend className='text-1xl'/>
                            </Link>
                            <div className="home__scroll">
                                <Link
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-84}
                                    duration={800}
                                    className="flex items-center gap-x-2 xl:text-lg text-sm xl:px-7 xl:py-4 py-2 transition-all hover:translate-y-1">
                                    <MdOutlineMouse className='text-2xl text-firstColor'/>
                                    <span className="home__scroll-name">Scroll down</span>
                                    <BsArrowDownShort className='text-2xl text-firstColor'/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-img relative flex justify-center items-center md:w-[50%]">
                    <div className="relative flex justify-center items-center">
                        <div
                            className="w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] bg-firstColor grid place-items-center rounded-full">
                            <div
                                className="w-[200px] h-[200px] xl:w-[280px] xl:h-[280px] bg-secondColor grid place-items-center rounded-full">

                            </div>
                        </div>
                    </div>
                    <img className="absolute -top-[72px] rounded-full w-[250px] xl:w-[350px] xl:-top-[123px] z-[99]"
                        src="https://res.cloudinary.com/dbvdqcii9/image/upload/v1692768366/My%20Portfolio/homeimage_tgqvpe.png" alt="" loading="lazy"/>
                </div>
            </div>
        </div>
    )
}
