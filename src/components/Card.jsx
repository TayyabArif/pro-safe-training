import React from 'react'
import CardImage from '../images/card_kit.jpg'
import { motion } from "framer-motion";

export const Card = () => {
  return (
    <motion.div
   //  initial={{ opacity: 0, y: 60 }}
   //  whileInView={{ opacity: 1, y: 0 }}
   //  transition={{ duration: 1, delay: 0.5 }}
   //  exit={{ opacity: 0, y: 60 }}
      className="w-full px-4"
    >
    <div className="bg-white rounded-[30px] overflow-hidden shadow-lg border border-1 border-gray-300 mb-10">
       <img
         className=''
          src={CardImage}
          alt="image"
          class="w-full"
      />
       <div class="flex flex-col items-start text-start px-5 py-5 bg-black bg-opacity-5">
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
             <div className='flex w-full items-center gap-2 mb-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="#3B73D0" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <p className="text-base text-body-color leading-relaxed">
                     Occupational First Aid (OFA) Level 1
                  </p>
             </div>
             <div className='flex w-full items-center gap-2 mb-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="#3B73D0" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <p className="text-base text-body-color leading-relaxed">
                     Occupational First Aid (OFA) Level 1
                  </p>
             </div>
             <div className='flex w-full items-center gap-2 mb-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="#3B73D0" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <p className="text-base text-body-color leading-relaxed">
                     Occupational First Aid (OFA) Level 1
                  </p>
             </div>
              <div className='flex w-full items-center gap-2 mb-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="#3B73D0" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <p className="text-base text-body-color leading-relaxed">
                     Occupational First Aid (OFA) Level 1
                  </p>
             </div>
             <div className='flex w-full justify-center mt-3 transform hover:scale-110 transition-transform duration-300'>
             <a
                  href="javascript:void(0)"
                  className="
                  inline-block
                  py-2
                  px-7
                  border border-[#3B73D0]
                  bg-[#3B73D0]
                  rounded-xl
                  text-base text-white
                  font-medium
                  hover:border-primary hover:bg-[#3B73D0]/90
                  transition
                  "
                  >
                     See All Courses
               </a>
             </div>
       </div>
    </div>
 </motion.div>
    // <div class="max-w-sm p-6 bg-white flex flex-col justify-center items-center border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    //     <svg class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#3B73D0" viewBox="0 0 20 20">
    //         <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
    //     </svg>
    //     <a href="#">
    //         <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
    //     </a>
    //     <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
    // </div>
  )
}
