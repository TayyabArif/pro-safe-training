import React from 'react'
import aboutBanner from '../images/aboutBanner.jpg'
import Header from '../components/Header'
import Footer from '../components/Footer'
const About = () => {
  return (
    <div className='about-page flex flex-col '>
    <Header />
    <div className='relative banner h-[70vh] w-full'>
    <img src={aboutBanner} className='w-full h-full object-cover' />
    <div className='absolute left-[20%] text-center top-[25%] p-6 bg-[#1663e285] flex flex-col  sm:rounded-lg'>
        <h1 className='text-4xl sm:text-5xl text-white font-extrabold tracking-tight'>What we do!</h1>
        <p className='class="text-normal text-lg sm:text-2xl font-medium text-white mt-2'>ProSafe First Aid Training School has been providing first aid training since 1999</p>
        <div class="mt-8 flex flex-wrap justify-center gap-4 text-center">
        <a
          href="#"
          class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Enroll Now
        </a>

        <a
          href="#"
          class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
    </div>
    <div className='content-section flex flex-col py-2 container mx-auto'>
        <h1 className='text-lg font-medium sm:text-5xl font-extrabold text-[#3B73D0] tracking-tight'>Our Story</h1>
        <div class="flex flex-wrap items-center mt-10 text-left text-center">
        <div class="w-full md:w-3/5 lg:w-1/2 px-4">
            <img src="https://picsum.photos/400/240" alt="gem" class="inline-block rounded shadow-lg border border-merino-400" />
        </div>
        <div class="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
            <h3 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl text-[#e11d48]">
                Abilities
            </h3>
            <p class="sm:text-lg mt-6">
                We have 6 Campuses located in Surrey, Abbotsford, Burnaby, Vancouver, Port Coquitlam, and Richmond. While ProSafe is known for delivering First Aid training courses, we also offer classes in health and safety, mobile equipment operation, workplace safety and customer service.  In addition to training services, we also supply first aid supplies and equipment. Our professional and experienced instructors at ProSafe take pride in delivering the highest quality of training and offering flexible program scheduling in multiple languages!
            </p>
        </div>
    </div>

    <div class="flex flex-wrap items-center mt-20 text-left text-center">
        <div class="w-full md:w-3/5 lg:w-1/2 px-4">
            <img src="https://picsum.photos/400/240" alt="project members" class="inline-block rounded shadow-lg border border-merino-400" />
        </div>
        <div class="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
            <h3 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl text-[#e11d48]">
                Why Us
            </h3>
            <p class="sm:text-lg mt-6">
            If you are a professional instructor looking for a full-time career, or a recent graduate of one of our advanced classes who wants to get a foot in the door, talk to us if you are interested in learning more about having a career at ProSafe. We continue to look for new instructors to join our team who are talented and passionate in teaching and sharing. Not only we offer a flexible schedule and competitive compensation, but also we help you build a fulfilling career that fits your life goals.  If you are interested in teaching for ProSafe please contact us at info@prosafefirstaid.ca
            </p>
        </div>
    </div>
    </div>
    <div className='mx-auto container feature-section my-10'>
    <h1 className='text-lg font-medium sm:text-5xl font-extrabold text-[#3B73D0] tracking-tight'>Features</h1>
        <div class=" mx-auto max-w-5xl gap-12 grid grid-cols-1 md:grid-cols-3  items-start justify-center md:justify-between mt-10">
    <div class="grid gap-4 justify-items-center text-center md:flex-1">
        <div class=" rounded-full border-8 border-[#e11d48] p-4 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-14 h-14">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z">
                </path>
            </svg>
        </div>
        <h3 class="text-3xl font-bold">6</h3>
        <p>Campuses</p>
    </div>
    <div class="grid gap-4 justify-items-center text-center md:flex-1">
        <div class=" rounded-full border-8 border-[#e11d48] p-4 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-14 h-14">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path>
            </svg>
        </div>
        <h3 class="text-3xl font-bold">20 +</h3>
        <p>Years of Experience</p>
    </div>
    <div class="grid gap-4 justify-items-center text-center md:flex-1">
        <div class=" rounded-full border-8 border-[#e11d48] p-4 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-14 h-14">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path>
            </svg>
        </div>
        <h3 class="text-3xl font-bold">40 +</h3>
        <p>Instructors</p>
    </div>
    <div class="grid gap-4 justify-items-center text-center md:flex-1">
        <div class=" rounded-full border-8 border-[#e11d48] p-4 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-14 h-14">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path>
            </svg>
        </div>
        <h3 class="text-3xl font-bold">50+</h3>
        <p>Cources</p>
    </div>
    <div class="grid gap-4 justify-items-center text-center md:flex-1">
        <div class=" rounded-full border-8 border-[#e11d48] p-4 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-14 h-14">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path>
            </svg>
        </div>
        <h3 class="text-3xl font-bold">100,000</h3>
        <p>Free Coffee Consumed</p>
    </div>
    <div class="grid gap-4 justify-items-center text-center md:flex-1">
        <div class=" rounded-full border-8 border-[#e11d48] p-4 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-14 h-14">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z">
                </path>
            </svg>

        </div>
        <h3 class="text-3xl font-bold">6 +</h3>
        <p>Training partners</p>
    </div>
        </div>
    </div>
    <Footer />
    </div>
  )
}

export default About