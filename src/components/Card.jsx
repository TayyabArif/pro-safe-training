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
  )
}
