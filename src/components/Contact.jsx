import React, { useRef } from 'react'
import toast from 'react-hot-toast';
import emailjs from "@emailjs/browser";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMailOutline,MdOutlineLocationOn } from "react-icons/md";
import bgImage from '../assets/images/bg-Contact.svg'

export const Contact = () => {
    const form = useRef();
    const sendEmail = async(e) => {
        e.preventDefault();
        const toastId = toast.loading("Loading...");
        await emailjs.sendForm('service_9nz42jg', 'template_ebg34tn', form.current, 'P4MJsrMqzgHQzWTrU')
        .then((result) => {
            toast.dismiss(toastId);
            toast.success("Email sent successfully")
        }, (error) => {
            console.log(error.text);
            toast.error("Something went wrong, Check your internet")
        });
        form.current.reset();
    };
    return (
        <section id="contact" className="w-100%">
            <div className="relative overflow-y-hidden">
                <img className="-z-[100] bg-bgColor2 absolute top-0 left-0 h-[900px] w-[100vw] object-cover -translate-y-52 md:-translate-y-72"
                    src={bgImage} alt="" />
                <div
                    className="z-[100] contact-wrapper wrapper w-[95%] max-w-[1300px] mx-auto flex flex-col justify-between items-center gap-y-16 py-20">
                    <div className="contact-heading flex flex-col justify-center items-center">
                        <h1
                            className="font-rubik text-2xl text-firstColor font-semibold flex flex-row gap-x-2 md:text-4xl xl:text-4xl">
                            Contact Me
                        </h1>
                        <p className="text-subText text-xs md:text-base">Get In Touch</p>
                    </div>

                    <div
                        className="contact-container flex flex-col justify-center md:flex-row gap-x-8 gap-y-11 w-[95%] md:[80%]">
                        <div className="contact-info flex flex-col gap-y-7 select-text">
                            <div className="contact__information flex items-center gap-2">
                                <i
                                    className="text-3xl text-firstColor bg-subColor2 rounded-full w-12 h-12 flex items-center justify-center"><LuPhoneCall /></i>

                                <div className="flex flex-col items-start">
                                    <h3 className="contact__title text-xl font-rubik">Call Me</h3>
                                    <span className="contact__subtitle text-sm text-subText">+91 8016223319</span>
                                </div>
                            </div>

                            <div className="contact__information flex items-center gap-2">
                                <i
                                    className="text-3xl text-firstColor bg-subColor2 rounded-full w-12 h-12 flex items-center justify-center"><MdOutlineMailOutline/></i>

                                <div className="flex flex-col items-start">
                                    <h3 className="contact__title  text-xl font-rubik">Email</h3>
                                    <span
                                        className="contact__subtitle text-sm text-subText">tohidujjamanhoque@gmail.com</span>
                                </div>
                            </div>

                            <div className="contact__information flex items-center gap-2">
                                <i
                                    className="contact__icon text-3xl text-firstColor bg-subColor2 rounded-full w-12 h-12 flex items-center justify-center"><MdOutlineLocationOn/></i>

                                <div className="flex flex-col items-start">
                                    <h3 className="contact__title  text-xl font-rubik">Location</h3>
                                    <span className="contact__subtitle text-sm text-subText">West Bengal, India</span>
                                </div>
                            </div>
                        </div>
                        <form ref={form} onSubmit={sendEmail} action=""
                            className="contact-form flex flex-col gap-y-3">
                            <div className="contact__inputs flex flex-col  gap-x-2 gap-y-3 md:flex-row">
                                <div
                                    className="contact__content flex flex-col bg-subColor font-rubik py-3 px-4 rounded-md">
                                    <label htmlFor="" className="contact__label">Name</label>
                                    <input type="text" id="name" name='from_name'
                                        className="contact__input bg-subColor outline-none text-subText border-none" required />
                                </div>

                                <div
                                    className="contact__content flex flex-col bg-subColor font-rubik py-3 px-4 rounded-md">
                                    <label htmlFor="" className="contact__label ">Email</label>
                                    <input type="email" id="email" name="email_id"
                                        className="contact__input bg-subColor outline-none text-subText border-none" required />
                                </div>
                            </div>
                            <div className="contact__content flex flex-col bg-subColor font-rubik py-3 px-4 rounded-md">
                                <label htmlFor="" className="contact__label">Message</label>
                                <textarea name="message" id="message" cols="0" rows="7"
                                    className="contact__input bg-subColor outline-none text-subText border-none" required></textarea>
                            </div>

                            <div>
                                <button type="submit"
                                    className="flex gap-x-2 w-max text-[#fff] bg-firstColor xl:text-lg text-sm xl:px-5 px-3 xl:py-3 py-2 border border-firstColor rounded-md  transition-all hover:bg-secondColor">
                                    Send Message <i className="uil uil-message button__icon"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
