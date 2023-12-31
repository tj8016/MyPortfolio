import React, {useState} from 'react'
import {AccordianBar} from './core/SkillsSection/AccordianBar.jsx';
import {skills} from '../data/SkillsData.js'

export const Skills = ({id}) => {
    const [isActive, setIsActive] = useState(Array(0))
    const handleActive = (id) => {
        setIsActive(
            !isActive.includes(id)
            ? isActive.concat([id])
            : isActive.filter((e) => e !== id)
        )
    }
    return (
        <section id={id} className="w-[100%] bg-bgColor2">
            <div
                className="z-[100] skills-wrapper wrapper w-[95%] max-w-[1300px] mx-auto flex flex-col justify-between items-center gap-11 py-14">
                <div className="skills-heading flex flex-col justify-center items-center">
                    <h1 className="font-rubik text-2xl font-semibold flex flex-row gap-x-2 md:text-4xl xl:text-4xl">
                        Skills</h1>
                    <p className="text-subText text-xs md:text-base">My Technical Level</p>
                </div>

                <div className="skills-container w-[100%] flex flex-col justify-center items-center">
                    <div className="w-[90%] md:w-[60%]">
                        {skills?.map((skill, index) => (
                            <AccordianBar skill={skill} isActive={isActive} handleActive={handleActive} key={index}/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
