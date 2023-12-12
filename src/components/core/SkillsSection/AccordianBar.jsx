import { useEffect, useRef, useState } from "react"
import { FaAngleDown } from "react-icons/fa";
import { FaLaptopCode, FaCode } from "react-icons/fa6";
import {LuServer } from "react-icons/lu";
import React from 'react'
import { SkillsBar } from "./SkillsBar"

export const AccordianBar = ({ skill, isActive, handleActive }) => {
  const contentEl = useRef(null)

  // Accordian state
  const [active, setActive] = useState(false)
  useEffect(() => {
    setActive(isActive?.includes(skill._id))
  }, [isActive])
  const [sectionHeight, setSectionHeight] = useState(0)
  useEffect(() => {
    setSectionHeight(active ? contentEl.current.scrollHeight : 0)
  }, [active])
  return (
    <div className="overflow-hidden border border-solid border-subColor last:mb-0">
        <div
          className={`flex cursor-pointer bg-opacity-20 px-7  py-6 transition-[0.3s]`}
          onClick={() => {
            handleActive(skill._id)
          }}
        >
          <div className="w-[100%] flex items-center justify-between gap-2 font-semibold">
            <div className="flex items-center gap-x-3">
              {
                skill._id === 1 && <FaCode className="text-3xl text-firstColor"/>
              }
              {
                skill._id === 2 && <FaLaptopCode className="text-3xl text-firstColor"/>
              }
              {
                skill._id === 3 && <LuServer className="text-3xl text-firstColor"/>
              }
              <p className="font-rubik text-lg md:text-xl xl:text-2xl text-firstColor">{skill.name}</p>
            </div>
            <i
              className={
                isActive.includes(skill._id) ? "rotate-180" : "rotate-0" 
              }
            >
              <FaAngleDown className="text-2xl text-firstColor" />
            </i>
          </div>
        </div>
      <div
        ref={contentEl}
        className={`relative h-0 overflow-hidden bg-richblack-900 transition-[height] duration-[0.35s] ease-[ease]`}
        style={{
          height: sectionHeight,
        }}
      >
        <div className="text-textHead flex flex-col gap-2 px-7 py-6 font-semibold">
          {skill?.subSection?.map((subSec, i) => {
            return <SkillsBar skillsName={subSec.skillsName} percentage={subSec.percentage} key={i} />
          })}
        </div>
      </div>
    </div>
  )
}
