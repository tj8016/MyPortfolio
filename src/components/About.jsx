import React from 'react'
import { BsArrowDownShort } from "react-icons/bs";
import { TiEye } from "react-icons/ti";
import CV from "../assets/other/TOHIDUJJAMAN HOQUE.pdf"
import image1 from '../assets/images/aboutsection1.svg'
import image2 from '../assets/images/aboutsection2.svg'

export const About = () => {
    return (
        <section name="about" className="about w-[100%] bg-bgColor" id='about'>
            <div className="about-container wrapper w-[95%] max-w-[1300px] mx-auto flex flex-col justify-between items-center gap-11 py-14">
                <div className="about-heading flex flex-col gap-2 justify-center items-center">
                    <h1 className="font-rubik text-2xl font-semibold flex flex-row gap-x-2 md:text-4xl xl:text-4xl">
                        About
                    </h1>
                    <p className="text-subText text-xs md:text-base">My Introduction</p>
                </div>
                <div className="w-[90%] relative bg-firstColor shadow-xl rounded-2xl md:w-[85%]">
                    <img className="absolute top-2 right-0" src={image1} alt=""/>
                    <img className="absolute bottom-0 right-0 translate-y-1 -rotate-90 w-[120px]"
                        src={image2} alt=""/>
                    <div className="about-content w-[100%] flex flex-col justify-between  gap-5 p-8 md:flex-row">
                        <div className="about-img flex justify-center items-center md:w-[30%]">
                            <img className="rounded-2xl w-[350px] md:w-[550px] xl:w-[600px]"
                                src="https://res.cloudinary.com/dbvdqcii9/image/upload/v1692768405/My%20Portfolio/aboutimg_je6vny.jpg" alt="" />
                        </div>
                        <div className="about-content flex md:w-[70%]">
                            <div className="text-white rounded-2xl flex flex-col items-center gap-8  lg:p-9">
                                <div className="about-text flex flex-col gap-5">
                                    <p className="text-sm lg:text-base">I'm <span
                                        className="text-thirdColor font-semibold">Tohidujjaman
                                        Hoque</span>, pursuing my degree
                                        at Aliah University. With a focus on Software Development, I thrive
                                        on problem-solving and enjoy delving into complex algorithms. From mastering
                                        programming languages like C, C++, JavaScript to understanding
                                        data structures and software development principles, I continuously expand
                                        my technical skills. Collaborative and adaptable, I value teamwork and
                                        effective communication. I actively seek opportunities to learn and stay
                                        updated with the latest advancements in computer science, particularly in
                                        Software Development. Eager to contribute to meaningful
                                        projects, I'm seeking internships or entry-level positions to make a
                                        positive impact in the field.</p>
                                </div>
                                <div className="about-btn md:flex gap-4">
                                    <a href={CV} download
                                        className="flex items-center justify-center gap-x-1 text-white bg-thirdColor xl:text-lg text-sm xl:px-2 px-3 xl:py-2 py-2 border border-firstColor rounded-md  transition-all hover:bg-secondColor"
                                        target="_blank" rel="noreferrer">
                                        Download Resume<BsArrowDownShort/>
                                    </a>
                                    <a href={CV} className='flex items-center justify-center gap-x-1 text-white bg-secondColor xl:text-lg text-sm xl:px-2 px-3 xl:py-2 py-2 border border-firstColor rounded-md  transition-all' target="_blank" rel="noreferrer">
                                        View Resume <TiEye/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
