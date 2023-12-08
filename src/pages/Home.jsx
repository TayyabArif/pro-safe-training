import React from 'react'
import Header from '../components/Header'
import Poster from '../images/poster.jpg'
import { Card } from '../components/Card'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'

const Home = () => {
  return (
    <div className='home-page'>
        <Header />
        <div className=" relative flex justify-between items-center w-[100vw] h-[90vh]">
            <img className='w-full object-cover h-[100%]' src={Poster}/>
            <div className='wrap-caption w-[60%] z-20 absolute top-[20%] right-[20%]'>
                <p className='text-white text-base font-normal'>ALL YOU NEED IS HERE</p>
                <h1 className='font-bold my-[1.2rem] text-7xl text-white'>Learn to save lives</h1>
                <p className='text-white mb-[1.2rem]'>First Aid for Opioid Poisoning Course. Free self-paced online course!</p>
                <button className='bg-[#B02526FF] py-[0.9rem] px-[2.5rem] rounded-[2rem] text-white'>Enroll now</button>
            </div>
            <div className='absolute top-0 left-0 w-full h-full bg-[#3B73D0] opacity-60 z-10'>
            </div>
            <div className="absolute bottom-0 left-0 w-full z-20">
            <svg
            className="absolute bottom-0 left-0"
            xmlns="http://www.w3.org/2000/svg"
            fill="#f6f6f6"
            viewBox="0 0 1440 250"
        >
            <path fillOpacity="1" d="M0,96L60,122.7C120,149,240,203,360,192C480,181,600,107,720,106.7C840,107,960,181,1080,213.3C1200,245,1320,235,1380,229.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
            </div>
        </div>
        <div className='cardSection flex flex-col items-center  justify-center bg-[#f6f6f6] mb-[2rem]'>
            <div>
                <h1 className=' mb-[1.2rem] text-7xl text-[#3B73D0]'>Our Services</h1>
            </div>
            <div className='flex gap-4 items-center justify-center flex-wrap'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
        <div className='contactSection'>
            <ContactUs />
        </div>
        <Footer />
    </div>
  )
}

export default Home