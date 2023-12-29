import React from 'react'
import Header from '../components/Header'
import OnlineCourse from '../components/OnlineCourse'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import CourseDetailsImage from '../images/course-details.jpg'

const CourseDetail = () => {
  return (
    <div>
        <Header />
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
        className='banner h-[70vh] w-full'>
        <img src={CourseDetailsImage} className='w-full h-full object-cover' />
        </motion.div>
        <OnlineCourse />
        <Footer />
    </div>
  )
}

export default CourseDetail