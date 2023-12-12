import React from 'react'

export const Education = () => {
    return (
        <div>
            {/* <!-- ======================= QUALIFICATION CONTENT 1 ===================--> */}
            <div className="qualification-content" data-content id="education">
                {/* <!--==================== QUALIFICATION 1====================--> */}
                <div className="qualification__data relative grid grid-cols-3">
                    <div className="flex flex-col">
                        <h3
                            className="qualification__title font-rubik font-semibold text-lg text-firstColor">
                            B.Tech in Civil Engineering</h3>
                        <span className="qualification__subtitle font-rubik text-md text-secondColor">Aliah
                            University</span>
                        <div className="qualification__calender font-rubik text-sm  text-subText">
                            <i className="uil uil-calendar-alt"></i>
                            2020 - 2024
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center pt-2">
                        <span
                            className="qualification__rounder inline-block h-3 w-3 rounded-full bg-firstColor"></span>
                        <span className="qualification__line w-[2px] h-[100%] bg-firstColor"></span>
                    </div>
                </div>

                {/* <!--==================== QUALIFICATION 2====================--> */}
                <div className="qualification__data grid grid-cols-3">

                    <div></div>

                    <div className="flex flex-col justify-center items-center ">
                        <span
                            className="qualification__rounder inline-block h-3 w-3 rounded-full bg-firstColor"></span>
                        <span className="qualification__line w-[2px] h-full bg-firstColor"></span>
                    </div>

                    <div>
                        <h3
                            className="qualification__title font-rubik font-semibold text-lg text-firstColor">
                            Higer Secondary Education</h3>
                        <span
                            className="qualification__subtitle font-rubik text-md text-secondColor">Golapganj
                            High School</span>
                        <div className="qualification__calender font-rubik text-sm  text-subText">
                            <i className="uil uil-calendar-alt"></i>
                            2018 - 2020
                        </div>
                    </div>
                </div>

                {/* <!--==================== QUALIFICATION 3====================--> */}
                <div className="qualification__data grid grid-cols-3">
                    <div>
                        <h3
                            className="qualification__title font-rubik font-semibold text-lg text-firstColor">
                            Madhyamik</h3>
                        <span
                            className="qualification__subtitle font-rubik text-md text-secondColor">Pranabananda
                            Vidyapith</span>
                        <div className="qualification__calender font-rubik text-sm  text-subText">
                            <i className="uil uil-calendar-alt"></i>
                            2016 - 2018
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <span
                            className="qualification__rounder inline-block h-3 w-3 rounded-full bg-firstColor"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
