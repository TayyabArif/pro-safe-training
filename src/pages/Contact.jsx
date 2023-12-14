import React from 'react'
import contactBanner from '../images/contactBanner.jpg'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {motion} from "framer-motion"
const Contact = () => {
  return (

    <div className='contact-page flex flex-col '>
        <Header />
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
        className='banner h-[70vh] w-full'>
        <img src={contactBanner} className='w-full h-full object-cover' />
        </motion.div>
        <div className='form-section'>

            <section class="bg-white py-20 lg:py-[120px] overflow-hidden relative z-10">
            <div class="container">
                <div class="flex flex-wrap lg:justify-between -mx-4">
                    <div class="w-full lg:w-1/2 xl:w-6/12 px-4">
                        <div class="max-w-[570px] mb-12 lg:mb-0">
                        <span class="block mb-4 text-base text-primary font-semibold">
                        Contact Us
                        </span>
                        <h2
                            class="
                            text-[#3056d3]
                            mb-6
                            uppercase
                            font-bold
                            text-[32px]
                            sm:text-[40px]
                            lg:text-[36px]
                            xl:text-[40px]
                            "
                            >
                            GET IN TOUCH WITH US
                        </h2>
                        <p class="text-base text-body-color leading-relaxed mb-9">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eius tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            adiqua minim veniam quis nostrud exercitation ullamco
                        </p>

                        </div>
                    </div>
                    <motion.div 
                                            initial={{ opacity: 0, x: 70 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            exit={{ opacity: 0, x: 70 }}
                    class="w-full lg:w-1/2 xl:w-5/12 px-4">
                        <div class="bg-white relative rounded-lg p-8 sm:p-12 shadow-lg">
                        <form>
                            <div class="mb-6">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    class="
                                    w-full
                                    rounded
                                    py-3
                                    px-[14px]
                                    text-body-color text-base
                                    border border-[f0f0f0]
                                    outline-none
                                    focus-visible:shadow-none
                                    focus:border-primary
                                    "
                                    />
                            </div>
                            <div class="mb-6">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    class="
                                    w-full
                                    rounded
                                    py-3
                                    px-[14px]
                                    text-body-color text-base
                                    border border-[f0f0f0]
                                    outline-none
                                    focus-visible:shadow-none
                                    focus:border-primary
                                    "
                                    />
                            </div>
                            <div class="mb-6">
                                <input
                                    type="text"
                                    placeholder="Your Phone"
                                    class="
                                    w-full
                                    rounded
                                    py-3
                                    px-[14px]
                                    text-body-color text-base
                                    border border-[f0f0f0]
                                    outline-none
                                    focus-visible:shadow-none
                                    focus:border-primary
                                    "
                                    />
                            </div>
                            <div class="mb-6">
                                <select
                                    class="
                                    w-full
                                    rounded
                                    py-3
                                    px-[14px]
                                    text-body-color text-base
                                    border border-[f0f0f0]
                                    outline-none
                                    focus-visible:shadow-none
                                    focus:border-primary
                                    "
                                    ><option value="" disabled selected>Training Topics</option></select>
                            </div>
                            <div class="mb-6">
                                <select
                                    class="
                                    w-full
                                    rounded
                                    py-3
                                    px-[14px]
                                    text-body-color text-base
                                    border border-[f0f0f0]
                                    outline-none
                                    focus-visible:shadow-none
                                    focus:border-primary
                                    "
                                    ><option value="" disabled selected>Location</option></select>
                            </div>
                            <div class="mb-6">
                                <textarea
                                    rows="6"
                                    placeholder="Your Message"
                                    class="
                                    w-full
                                    rounded
                                    py-3
                                    px-[14px]
                                    text-body-color text-base
                                    border border-[f0f0f0]
                                    resize-none
                                    outline-none
                                    focus-visible:shadow-none
                                    focus:border-primary
                                    "
                                    ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    class="
                                    w-full
                                    text-white
                                    bg-primary
                                    rounded
                                    border border-primary
                                    p-3
                                    transition
                                    hover:bg-opacity-90
                                    "
                                    >
                                Send Message
                                </button>
                            </div>
                        </form>
                        <div>
                            <span class="absolute -top-10 -right-9 z-[-1]">
                                <svg
                                    width="100"
                                    height="100"
                                    viewBox="0 0 100 100"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                                    fill="#3056D3"
                                    />
                                </svg>
                            </span>
                            <span class="absolute -right-10 top-[90px] z-[-1]">
                                <svg
                                    width="34"
                                    height="134"
                                    viewBox="0 0 34 134"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <circle
                                    cx="31.9993"
                                    cy="132"
                                    r="1.66667"
                                    transform="rotate(180 31.9993 132)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="31.9993"
                                    cy="117.333"
                                    r="1.66667"
                                    transform="rotate(180 31.9993 117.333)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="31.9993"
                                    cy="102.667"
                                    r="1.66667"
                                    transform="rotate(180 31.9993 102.667)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="31.9993"
                                    cy="88"
                                    r="1.66667"
                                    transform="rotate(180 31.9993 88)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="31.9993"
                                    cy="73.3333"
                                    r="1.66667"
                                    transform="rotate(180 31.9993 73.3333)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="31.9993"
                                    cy="45"
                                    r="1.66667"
                                    transform="rotate(180 31.9993 45)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="31.9993"
                                    cy="16"
                                    r="1.66667"
                                    transform="rotate(180 31.9993 16)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="31.9993"
                                    cy="59"
                                    r="1.66667"
                                    transform="rotate(180 31.9993 59)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="31.9993"
                                    cy="30.6666"
                                    r="1.66667"
                                    transform="rotate(180 31.9993 30.6666)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="31.9993"
                                    cy="1.66665"
                                    r="1.66667"
                                    transform="rotate(180 31.9993 1.66665)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="17.3333"
                                    cy="132"
                                    r="1.66667"
                                    transform="rotate(180 17.3333 132)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="17.3333"
                                    cy="117.333"
                                    r="1.66667"
                                    transform="rotate(180 17.3333 117.333)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="17.3333"
                                    cy="102.667"
                                    r="1.66667"
                                    transform="rotate(180 17.3333 102.667)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="17.3333"
                                    cy="88"
                                    r="1.66667"
                                    transform="rotate(180 17.3333 88)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="17.3333"
                                    cy="73.3333"
                                    r="1.66667"
                                    transform="rotate(180 17.3333 73.3333)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="17.3333"
                                    cy="45"
                                    r="1.66667"
                                    transform="rotate(180 17.3333 45)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="17.3333"
                                    cy="16"
                                    r="1.66667"
                                    transform="rotate(180 17.3333 16)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="17.3333"
                                    cy="59"
                                    r="1.66667"
                                    transform="rotate(180 17.3333 59)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="17.3333"
                                    cy="30.6666"
                                    r="1.66667"
                                    transform="rotate(180 17.3333 30.6666)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="17.3333"
                                    cy="1.66665"
                                    r="1.66667"
                                    transform="rotate(180 17.3333 1.66665)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="2.66536"
                                    cy="132"
                                    r="1.66667"
                                    transform="rotate(180 2.66536 132)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="2.66536"
                                    cy="117.333"
                                    r="1.66667"
                                    transform="rotate(180 2.66536 117.333)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="2.66536"
                                    cy="102.667"
                                    r="1.66667"
                                    transform="rotate(180 2.66536 102.667)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="2.66536"
                                    cy="88"
                                    r="1.66667"
                                    transform="rotate(180 2.66536 88)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="2.66536"
                                    cy="73.3333"
                                    r="1.66667"
                                    transform="rotate(180 2.66536 73.3333)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="2.66536"
                                    cy="45"
                                    r="1.66667"
                                    transform="rotate(180 2.66536 45)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="2.66536"
                                    cy="16"
                                    r="1.66667"
                                    transform="rotate(180 2.66536 16)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="2.66536"
                                    cy="59"
                                    r="1.66667"
                                    transform="rotate(180 2.66536 59)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="2.66536"
                                    cy="30.6666"
                                    r="1.66667"
                                    transform="rotate(180 2.66536 30.6666)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="2.66536"
                                    cy="1.66665"
                                    r="1.66667"
                                    transform="rotate(180 2.66536 1.66665)"
                                    fill="#13C296"
                                    />
                                </svg>
                            </span>
                            <span class="absolute -left-7 -bottom-7 z-[-1]">
                                <svg
                                    width="107"
                                    height="134"
                                    viewBox="0 0 107 134"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <circle
                                    cx="104.999"
                                    cy="132"
                                    r="1.66667"
                                    transform="rotate(180 104.999 132)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="104.999"
                                    cy="117.333"
                                    r="1.66667"
                                    transform="rotate(180 104.999 117.333)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="104.999"
                                    cy="102.667"
                                    r="1.66667"
                                    transform="rotate(180 104.999 102.667)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="104.999"
                                    cy="88"
                                    r="1.66667"
                                    transform="rotate(180 104.999 88)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="104.999"
                                    cy="73.3333"
                                    r="1.66667"
                                    transform="rotate(180 104.999 73.3333)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="104.999"
                                    cy="45"
                                    r="1.66667"
                                    transform="rotate(180 104.999 45)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="104.999"
                                    cy="16"
                                    r="1.66667"
                                    transform="rotate(180 104.999 16)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="104.999"
                                    cy="59"
                                    r="1.66667"
                                    transform="rotate(180 104.999 59)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="104.999"
                                    cy="30.6666"
                                    r="1.66667"
                                    transform="rotate(180 104.999 30.6666)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="104.999"
                                    cy="1.66665"
                                    r="1.66667"
                                    transform="rotate(180 104.999 1.66665)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="90.3333"
                                    cy="132"
                                    r="1.66667"
                                    transform="rotate(180 90.3333 132)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="90.3333"
                                    cy="117.333"
                                    r="1.66667"
                                    transform="rotate(180 90.3333 117.333)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="90.3333"
                                    cy="102.667"
                                    r="1.66667"
                                    transform="rotate(180 90.3333 102.667)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="90.3333"
                                    cy="88"
                                    r="1.66667"
                                    transform="rotate(180 90.3333 88)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="90.3333"
                                    cy="73.3333"
                                    r="1.66667"
                                    transform="rotate(180 90.3333 73.3333)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="90.3333"
                                    cy="45"
                                    r="1.66667"
                                    transform="rotate(180 90.3333 45)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="90.3333"
                                    cy="16"
                                    r="1.66667"
                                    transform="rotate(180 90.3333 16)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="90.3333"
                                    cy="59"
                                    r="1.66667"
                                    transform="rotate(180 90.3333 59)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="90.3333"
                                    cy="30.6666"
                                    r="1.66667"
                                    transform="rotate(180 90.3333 30.6666)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="90.3333"
                                    cy="1.66665"
                                    r="1.66667"
                                    transform="rotate(180 90.3333 1.66665)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="75.6654"
                                    cy="132"
                                    r="1.66667"
                                    transform="rotate(180 75.6654 132)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="31.9993"
                                    cy="132"
                                    r="1.66667"
                                    transform="rotate(180 31.9993 132)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="75.6654"
                                    cy="117.333"
                                    r="1.66667"
                                    transform="rotate(180 75.6654 117.333)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="31.9993"
                                    cy="117.333"
                                    r="1.66667"
                                    transform="rotate(180 31.9993 117.333)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="75.6654"
                                    cy="102.667"
                                    r="1.66667"
                                    transform="rotate(180 75.6654 102.667)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="31.9993"
                                    cy="102.667"
                                    r="1.66667"
                                    transform="rotate(180 31.9993 102.667)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="75.6654"
                                    cy="88"
                                    r="1.66667"
                                    transform="rotate(180 75.6654 88)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="31.9993"
                                    cy="88"
                                    r="1.66667"
                                    transform="rotate(180 31.9993 88)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="75.6654"
                                    cy="73.3333"
                                    r="1.66667"
                                    transform="rotate(180 75.6654 73.3333)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="31.9993"
                                    cy="73.3333"
                                    r="1.66667"
                                    transform="rotate(180 31.9993 73.3333)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="75.6654"
                                    cy="45"
                                    r="1.66667"
                                    transform="rotate(180 75.6654 45)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="31.9993"
                                    cy="45"
                                    r="1.66667"
                                    transform="rotate(180 31.9993 45)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="75.6654"
                                    cy="16"
                                    r="1.66667"
                                    transform="rotate(180 75.6654 16)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="31.9993"
                                    cy="16"
                                    r="1.66667"
                                    transform="rotate(180 31.9993 16)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="75.6654"
                                    cy="59"
                                    r="1.66667"
                                    transform="rotate(180 75.6654 59)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="31.9993"
                                    cy="59"
                                    r="1.66667"
                                    transform="rotate(180 31.9993 59)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="75.6654"
                                    cy="30.6666"
                                    r="1.66667"
                                    transform="rotate(180 75.6654 30.6666)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="31.9993"
                                    cy="30.6666"
                                    r="1.66667"
                                    transform="rotate(180 31.9993 30.6666)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="75.6654"
                                    cy="1.66665"
                                    r="1.66667"
                                    transform="rotate(180 75.6654 1.66665)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="31.9993"
                                    cy="1.66665"
                                    r="1.66667"
                                    transform="rotate(180 31.9993 1.66665)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="60.9993"
                                    cy="132"
                                    r="1.66667"
                                    transform="rotate(180 60.9993 132)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="17.3333"
                                    cy="132"
                                    r="1.66667"
                                    transform="rotate(180 17.3333 132)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="60.9993"
                                    cy="117.333"
                                    r="1.66667"
                                    transform="rotate(180 60.9993 117.333)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="17.3333"
                                    cy="117.333"
                                    r="1.66667"
                                    transform="rotate(180 17.3333 117.333)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="60.9993"
                                    cy="102.667"
                                    r="1.66667"
                                    transform="rotate(180 60.9993 102.667)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="17.3333"
                                    cy="102.667"
                                    r="1.66667"
                                    transform="rotate(180 17.3333 102.667)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="60.9993"
                                    cy="88"
                                    r="1.66667"
                                    transform="rotate(180 60.9993 88)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="17.3333"
                                    cy="88"
                                    r="1.66667"
                                    transform="rotate(180 17.3333 88)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="60.9993"
                                    cy="73.3333"
                                    r="1.66667"
                                    transform="rotate(180 60.9993 73.3333)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="17.3333"
                                    cy="73.3333"
                                    r="1.66667"
                                    transform="rotate(180 17.3333 73.3333)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="60.9993"
                                    cy="45"
                                    r="1.66667"
                                    transform="rotate(180 60.9993 45)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="17.3333"
                                    cy="45"
                                    r="1.66667"
                                    transform="rotate(180 17.3333 45)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="60.9993"
                                    cy="16"
                                    r="1.66667"
                                    transform="rotate(180 60.9993 16)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="17.3333"
                                    cy="16"
                                    r="1.66667"
                                    transform="rotate(180 17.3333 16)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="60.9993"
                                    cy="59"
                                    r="1.66667"
                                    transform="rotate(180 60.9993 59)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="17.3333"
                                    cy="59"
                                    r="1.66667"
                                    transform="rotate(180 17.3333 59)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="60.9993"
                                    cy="30.6666"
                                    r="1.66667"
                                    transform="rotate(180 60.9993 30.6666)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="17.3333"
                                    cy="30.6666"
                                    r="1.66667"
                                    transform="rotate(180 17.3333 30.6666)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="60.9993"
                                    cy="1.66665"
                                    r="1.66667"
                                    transform="rotate(180 60.9993 1.66665)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="17.3333"
                                    cy="1.66665"
                                    r="1.66667"
                                    transform="rotate(180 17.3333 1.66665)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="46.3333"
                                    cy="132"
                                    r="1.66667"
                                    transform="rotate(180 46.3333 132)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="2.66536"
                                    cy="132"
                                    r="1.66667"
                                    transform="rotate(180 2.66536 132)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="46.3333"
                                    cy="117.333"
                                    r="1.66667"
                                    transform="rotate(180 46.3333 117.333)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="2.66536"
                                    cy="117.333"
                                    r="1.66667"
                                    transform="rotate(180 2.66536 117.333)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="46.3333"
                                    cy="102.667"
                                    r="1.66667"
                                    transform="rotate(180 46.3333 102.667)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="2.66536"
                                    cy="102.667"
                                    r="1.66667"
                                    transform="rotate(180 2.66536 102.667)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="46.3333"
                                    cy="88"
                                    r="1.66667"
                                    transform="rotate(180 46.3333 88)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="2.66536"
                                    cy="88"
                                    r="1.66667"
                                    transform="rotate(180 2.66536 88)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="46.3333"
                                    cy="73.3333"
                                    r="1.66667"
                                    transform="rotate(180 46.3333 73.3333)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="2.66536"
                                    cy="73.3333"
                                    r="1.66667"
                                    transform="rotate(180 2.66536 73.3333)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="46.3333"
                                    cy="45"
                                    r="1.66667"
                                    transform="rotate(180 46.3333 45)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="2.66536"
                                    cy="45"
                                    r="1.66667"
                                    transform="rotate(180 2.66536 45)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="46.3333"
                                    cy="16"
                                    r="1.66667"
                                    transform="rotate(180 46.3333 16)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="2.66536"
                                    cy="16"
                                    r="1.66667"
                                    transform="rotate(180 2.66536 16)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="46.3333"
                                    cy="59"
                                    r="1.66667"
                                    transform="rotate(180 46.3333 59)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="2.66536"
                                    cy="59"
                                    r="1.66667"
                                    transform="rotate(180 2.66536 59)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="46.3333"
                                    cy="30.6666"
                                    r="1.66667"
                                    transform="rotate(180 46.3333 30.6666)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="2.66536"
                                    cy="30.6666"
                                    r="1.66667"
                                    transform="rotate(180 2.66536 30.6666)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="46.3333"
                                    cy="1.66665"
                                    r="1.66667"
                                    transform="rotate(180 46.3333 1.66665)"
                                    fill="#13C296"
                                    />
                                    <circle
                                    cx="2.66536"
                                    cy="1.66665"
                                    r="1.66667"
                                    transform="rotate(180 2.66536 1.66665)"
                                    fill="#13C296"
                                    />
                                </svg>
                            </span>
                        </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            </section>
             {/* <div class="relative flex items-top justify-center min-h-[70vh] bg-white dark:bg-gray-900 sm:items-center sm:pt-0">
                    <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
                        <div class="mt-8 overflow-hidden">
                            <div class="grid grid-cols-1 md:grid-cols-2">
                                <div class="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                                    <h1 class="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                                        Get in touch
                                    </h1>
                                    <p class="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                                        Fill in the form to start a conversation
                                    </p>

                                    <div class="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                        </svg>
                                        <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                            Acme Inc, Street, State,
                                            Postal Code
                                        </div>
                                    </div>

                                    <div class="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                        </svg>
                                        <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                            +44 1234567890
                                        </div>
                                    </div>

                                    <div class="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                        </svg>
                                        <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                            info@acme.org
                                        </div>
                                    </div>
                                </div>

                                <form class="p-6 flex flex-col justify-center">
                                    <div class="flex flex-col">
                                        <label for="name" class="hidden">Full Name</label>
                                        <input type="name" name="name" id="name" placeholder="Full Name" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"></input>
                                    </div>

                                    <div class="flex flex-col mt-2">
                                        <label for="email" class="hidden">Email</label>
                                        <input type="email" name="email" id="email" placeholder="Email" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"></input>
                                    </div>

                                    <div class="flex flex-col mt-2">
                                        <label for="tel" class="hidden">Number</label>
                                        <input type="tel" name="tel" id="tel" placeholder="Telephone Number" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"></input>
                                    </div>

                                    <div class="flex flex-col mt-2">
                                        <label for="tel" class="hidden">Number</label>
                                        <textarea type="tel" name="tel" id="tel" placeholder="Message" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"></textarea>
                                    </div>

                                    <button type="submit" class="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
            </div>  */}
        </div>
        <div>
        <div class="relative w-full h-96">
            <iframe class="absolute top-0 left-0 w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
                frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0">
            </iframe>
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default Contact