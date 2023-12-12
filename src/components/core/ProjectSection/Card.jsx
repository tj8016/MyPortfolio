import React from 'react'
import { FaGithub, FaLink } from "react-icons/fa";

export const Card = ({project}) => {
    return (
        <div class="w-[350px] h-[400px] rounded-md bg-white flex flex-col justify-evenly items-center"
            style={{boxShadow : 'rgba(157, 157, 157, 0.2) 0px 4px 10px'}}>
            <div class="project-img w-[320px]">
                <img class="w-[100%] rounded-lg shadow-inner" src={project.imageLink} alt=""/>
            </div>
            <div class="project-content flex flex-col text-center">
                <h3
                    class="font-rubik text-lg md:text-xl xl:text-2xl font-semibold cursor-pointer text-firstColor transition-all">
                    {project.projectName}</h3>
                <p class="text-sm lg:text-base text-subText">{project.description.slice(0,100)}...<span className='text-firstColor cursor-pointer underline'>see more</span></p>
            </div>
            <div class="project-btn flex gap-x-2">
                <a href={project.link} target="_blank" rel="noreferrer"
                    class="flex gap-x-2 items-center text-[#fff] bg-firstColor xl:text-lg text-sm md:px-5 px-3 md:py-2 py-2 border border-firstColor rounded-md  transition-all hover:bg-secondColor">
                    <FaLink/> Link <i class="uil uil-message button__icon"></i>
                </a>
                <a href={project.githubLink} target="_blank" rel="noreferrer"
                    class="flex gap-x-2 items-center text-[#fff] bg-firstColor xl:text-lg text-sm md:px-5 px-3 md:py-2 py-2 border border-firstColor rounded-md  transition-all hover:bg-secondColor">
                    <FaGithub/> Github <i class="uil uil-message button__icon"></i>
                </a>
            </div>
        </div>
    )
}
