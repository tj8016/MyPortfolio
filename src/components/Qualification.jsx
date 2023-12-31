import React, { useState } from 'react'
import { Education } from './core/QualificationSection/Education';
import { Work } from './core/QualificationSection/Work';
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa6";

export const Qualification = ({id}) => {
    const [active , setActive] = useState('education');

    const handleTabClick = (e) => {
        const value = e.currentTarget.getAttribute('value');
        setActive(value);
    }
    return (
        <section id={id} className="bg-bgColor2">
            <div
                className="qualification-wrapper w-[95%] max-w-[1300px] mx-auto flex flex-col justify-between items-center gap-y-6 py-14">
                <div className="qualification-heading flex flex-col justify-center items-center">
                    <h1
                        className="font-rubik text-2xl text-firstColor font-semibold flex flex-row gap-x-2 md:text-4xl xl:text-4xl">
                        Qualification
                    </h1>
                    <p className="text-subText text-xs md:text-base">My Personal Journey</p>
                </div>

                <div className="qualification-content flex flex-col gap-y-7 w-[90%] md:w-[50%] lg:w-[40%]">
                    <div className="qualification__tabs flex justify-evenly items-center gap-x-6">
                        <div className={`qualification-button flex items-center gap-x-2 font-rubik text-lg md:text-xl xl:text-2xl font-semibold cursor-pointer transition-all hover:text-thirdColor active ${active === 'education' ? 'text-thirdColor' : 'text-firstColor'}`}
                           value="education" onClick={handleTabClick}>
                            <FaGraduationCap className='text-3xl'/>
                            Education
                        </div>
                        <div className={`qualification-button flex items-center gap-x-2 font-rubik text-lg md:text-xl xl:text-2xl font-semibold cursor-pointer transition-all hover:text-thirdColor active ${active === 'work' ? 'text-thirdColor' : 'text-firstColor'}`}
                            value="work" onClick={handleTabClick} >
                            <FaLaptopCode className='text-3xl'/>
                            Work
                        </div>
                    </div>

                    <div className="min-h-[330px]">
                        
                        {active === 'education' && <Education/>}
                        {active === 'work' && <Work/>}
                    </div>
                </div>
            </div>
        </section>
    )
}
