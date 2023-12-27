import React from 'react'
import CardImage from '../images/blogNews.jpg'
import { motion } from "framer-motion";

const EventCard = () => {
  return (
    <motion.div
   //  initial={{ opacity: 0, y: 60 }}
   //  whileInView={{ opacity: 1, y: 0 }}
   //  transition={{ duration: 1, delay: 0.5 }}
   //  exit={{ opacity: 0, y: 60 }}
      className="w-[30%] px-4 "
    >
    <div className="relative bg-white mt-4 rounded-xl h-[30rem] overflow-hidden shadow-lg mb-10 border border-1 border-gray-300">
        <div className='absolute left-2 text-white rounded-b w-fit p-4 bg-[#e11d48]'>
            <h2 className='text-3xl'>15</h2>
            <p>Jan 2024</p>
        </div>
       <img
         className=''
          src={CardImage}
          alt="image"
          class="w-full"
      />
       <div class="flex flex-col items-start text-start px-5 py-5 ">
             <a
                href="javascript:void(0)"
                className="
                font-semibold
                text-gray-700 text-xl
                sm:text-[22px]
                md:text-xl
                lg:text-[22px]
                xl:text-xl
                2xl:text-[22px]
                mb-4
                block
                hover:text-primary
                "
                >
             WORKSAFE BC FIRST AID (OFA) TRAINING
             </a>
             <p>ProSafe reserves the right to cancel a course due to low enrollment or an unforeseen instructor emergency.</p>
       </div>
       <div className='absolute bottom-0 w-full'>
       <a
            href="javascript:void(0)"
            className="
            inline-block
            py-3
            px-7
            w-full
            bg-[#e11d48]
            border border-[#e11d48]
            text-base text-white
            font-medium
            hover:border-primary hover:bg-primary
            hover:bg-[#e11d48]/90
            transition
            transform hover:scale-110 transition-transform duration-300
            "
            >
            Learn More
            </a>
       </div>
    </div>
 </motion.div>
  )
}

export default EventCard
