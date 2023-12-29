import React from 'react'
import Header from '../components/Header'
import allCourcesBanner from '../images/all-cources.jpg'
import CourseCard from '../components/CourseCard'
import Footer from '../components/Footer'
import FirstAid from '../images/first-aid.jpg'
import { motion } from 'framer-motion'
const AllCources = () => {
  return (
    <div>
        <Header />
        <div className='banner relative w-full h-[70vh] flex flex-col justify-center items-center mb-8' style={{backgroundImage:`url(${allCourcesBanner})`, backgroundPosition: 'center'}}>
            <motion.div 
                    initial={{ x: -100, opacity: 0 }}  // Start position (off-screen to the left)
                    animate={{ x: 0, opacity: 1 }}     // End position (original position)
                    transition={{ duration: 1 }}       // Animation duration
                  
            className='w-[40%] h-[70%] rounded-lg p-5 absolute left-8 bg-[#0c2340]'>
            <h1 className='text-6xl font-bold leading-normal text-[#e11d48]'>Cources We Offer</h1>
            <p className='text-white leading-normal text-justify font-normal mb-[2rem]'>ProSafe First Aid Training School has been providing first aid training since 1999. We have 6 Campuses located in Surrey, Abbotsford, Burnaby, Vancouver, Port Coquitlam, and Richmond. While ProSafe is known for delivering First Aid training courses, we also offer classes in health and safety, mobile equipment operation, workplace safety and customer service.  In addition to training services, we also supply first aid supplies and equipment. Our professional and experienced instructors at ProSafe take pride in delivering the highest quality of training and offering flexible program scheduling in multiple languages</p>
            </motion.div>
        </div>
        <div class='grid gap-8 md:grid-cols-2 lg:grid-cols-3 p-2 xl:p-5'>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        </div>
        <div className='content-section flex flex-col py-2 container mx-auto'>
            <div class="flex flex-wrap items-center mt-10 text-left text-center">
                <motion.div
                            initial={{ x: -200, opacity: 0 }}  // Start position (off-screen to the left)
                            whileInView={{ x: 0, opacity: 1 }}     // End position (original position)
                            transition={{ duration: 1 }}       // Animation duration
                class="w-full md:w-3/5 lg:w-1/2 px-4">
                    <img src={FirstAid} alt="gem" class="inline-block rounded shadow-lg border h-[19rem] border-merino-400" />
                </motion.div>
                <div class="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
                    <h3 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl text-[#e11d48]">
                        WorkSafe BC First Aid Training
                    </h3>
                    <p class="sm:text-lg mt-6">
                        We have 6 Campuses located in Surrey, Abbotsford, Burnaby, Vancouver, Port Coquitlam, and Richmond. While ProSafe is known for delivering First Aid training courses, we also offer classes in health and safety, mobile equipment operation, workplace safety and customer service.  In addition to training services, we also supply first aid supplies and equipment. Our professional and experienced instructors at ProSafe take pride in delivering the highest quality of training and offering flexible program scheduling in multiple languages!
                    </p>
                </div>
            </div>

            <div class="flex flex-wrap items-center mt-20 text-left text-center">
            <motion.div
                            initial={{ x: 200, opacity: 0 }}  // Start position (off-screen to the left)
                            whileInView={{ x: 0, opacity: 1 }}     // End position (original position)
                            transition={{ duration: 1 }}       // Animation duration
                class="w-full md:w-3/5 lg:w-1/2 px-4">
                    <img src={FirstAid} alt="gem" class="inline-block rounded shadow-lg border h-[19rem] border-merino-400" />
                </motion.div>
                <div class="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
                    <h3 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl text-[#e11d48]">
                        Canadian Red Cross Training
                    </h3>
                    <p class="sm:text-lg mt-6">
                    If you are a professional instructor looking for a full-time career, or a recent graduate of one of our advanced classes who wants to get a foot in the door, talk to us if you are interested in learning more about having a career at ProSafe. We continue to look for new instructors to join our team who are talented and passionate in teaching and sharing. Not only we offer a flexible schedule and competitive compensation, but also we help you build a fulfilling career that fits your life goals.  If you are interested in teaching for ProSafe please contact us at info@prosafefirstaid.ca
                    </p>
                </div>
            </div>

            <div class="flex flex-wrap items-center mt-10 text-left text-center">
            <motion.div
                            initial={{ x: -200, opacity: 0 }}  // Start position (off-screen to the left)
                            whileInView={{ x: 0, opacity: 1 }}     // End position (original position)
                            transition={{ duration: 1 }}       // Animation duration
                class="w-full md:w-3/5 lg:w-1/2 px-4">
                    <img src={FirstAid} alt="gem" class="inline-block rounded shadow-lg border h-[19rem] border-merino-400" />
                </motion.div>
                <div class="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
                    <h3 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl text-[#e11d48]">
                        Workplace Safety Training
                    </h3>
                    <p class="sm:text-lg mt-6">
                        We have 6 Campuses located in Surrey, Abbotsford, Burnaby, Vancouver, Port Coquitlam, and Richmond. While ProSafe is known for delivering First Aid training courses, we also offer classes in health and safety, mobile equipment operation, workplace safety and customer service.  In addition to training services, we also supply first aid supplies and equipment. Our professional and experienced instructors at ProSafe take pride in delivering the highest quality of training and offering flexible program scheduling in multiple languages!
                    </p>
                </div>
            </div>

            <div class="flex flex-wrap items-center mt-20 text-left text-center">
            <motion.div
                            initial={{ x: 200, opacity: 0 }}  // Start position (off-screen to the left)
                            whileInView={{ x: 0, opacity: 1 }}     // End position (original position)
                            transition={{ duration: 1 }}       // Animation duration
                class="w-full md:w-3/5 lg:w-1/2 px-4">
                    <img src={FirstAid} alt="gem" class="inline-block rounded shadow-lg border h-[19rem] border-merino-400" />
                </motion.div>
                <div class="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
                    <h3 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl text-[#e11d48]">
                        Traffic Control / Mobile Equipment Training
                    </h3>
                    <p class="sm:text-lg mt-6">
                    If you are a professional instructor looking for a full-time career, or a recent graduate of one of our advanced classes who wants to get a foot in the door, talk to us if you are interested in learning more about having a career at ProSafe. We continue to look for new instructors to join our team who are talented and passionate in teaching and sharing. Not only we offer a flexible schedule and competitive compensation, but also we help you build a fulfilling career that fits your life goals.  If you are interested in teaching for ProSafe please contact us at info@prosafefirstaid.ca
                    </p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default AllCources