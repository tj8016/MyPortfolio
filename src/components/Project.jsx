import React from 'react'
import {projectData} from '../data/ProjectData'
import { Card } from './core/ProjectSection/Card'

export const Project = () => {
  return (
    <section id="projects">
        <div class="w-[100%] bg-bgColor relative ">
            <img class="absolute -z-[100] top-8 left-0 " src="assets/images/projects.png" alt=""/>
            <img class="absolute -z-[100] bottom-8 right-0 rotate-180" src="assets/images/projects.png" alt=""/>
            <div
                class="z-[999] project-wrapper wrapper w-[95%] max-w-[1300px] mx-auto flex flex-col justify-between items-center gap-y-6 py-14">
                <div class="project-heading flex flex-col justify-center items-center">
                    <h1
                        class="font-rubik text-2xl text-firstColor font-semibold flex flex-row gap-x-2 md:text-4xl xl:text-4xl">
                        Projects
                    </h1>
                    <p class="text-subText text-xs md:text-base">My Projects</p>
                </div>
                <div class="project-container grid gap-x-5 gap-y-6 lg:grid-cols-2 xl:grid-cols-3">
                    {
                        projectData?.map((project, index) => (
                            <Card project = {project} key={index} />
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}
