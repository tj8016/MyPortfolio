import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

export const SkillsBar = ({skillsName, percentage}) => {
    return (
        <div className="skills__data flex flex-col gap-y-1">
            <div className="skills__titles flex justify-between items-center">
                <h3 className="skills__name">{skillsName}</h3>
                <span className="skills__number">{percentage}%</span>
            </div>
            <ProgressBar className='progress' completed={percentage} bgColor='#2b2353' baseBgColor='#eaeafc' height='10px' isLabelVisible={false}/>
        </div>
    )
}
