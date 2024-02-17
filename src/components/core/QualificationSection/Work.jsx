import React from 'react'

export const Work = () => {
    return (
        <div>
            {/* <!-- ======================= WORK CONTENT 1 ===================--> */}
            <div className="" data-content id="education">
                {/* <!--==================== WORK 1====================--> */}
                <div className="relative grid grid-cols-3">
                    <div></div>

                    <div className="flex flex-col justify-center items-center ">
                        <span className="qualification__rounder inline-block h-3 w-3 rounded-full bg-firstColor"></span>
                        <span className="qualification__line w-[2px] h-full bg-firstColor"></span>
                        <span className="qualification__rounder inline-block h-3 w-3 rounded-full bg-firstColor"></span>
                    </div>
                    <div className="flex flex-col">
                        <h3
                            className="qualification__title font-rubik font-semibold text-lg text-firstColor">
                            Software Developer intern</h3>
                        <span className="font-rubik text-md text-secondColor">Ditinex</span>
                        <div className="font-rubik text-sm  text-subText">
                            <i className="uil uil-calendar-alt"></i>
                            2024 - 2025
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
