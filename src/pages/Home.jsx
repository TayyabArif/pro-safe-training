import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import homeBanner from '../images/homePoster.jpg'
import grill from '../images/grill.svg'
import Divider from '../components/Divider'
import openQuote from '../images/quote-open-yellowOL.svg'
import closeQuote from '../images/quote-close-pink.svg'
// import Poster from '../images/poster.jpg'
import { Card } from '../components/Card'
import EventCard from '../components/EventCard'
import ContactUs from '../components/ContactUs'
// import {motion} from "framer-motion"
import comb from '../images/comb.svg'
import ourMission from '../images/ourMission.jpg'
import testimonialImage from '../images/testimonialSectionGirl.jpg'
import NewBrands from '../components/TrainingPartners'
// import NewBrands from '../components/TrainingPartners'


const Home = () => {
  return (
    <div className='home-page font-[Avenir]'>
        <Header />
        <video class="elementor-video" src="https://dorsetcolleges.com/wp-content/uploads/2023/11/Dorset-V5.mp4" autoplay="" loop="" muted="muted" playsinline="" controlslist="nodownload"></video>
        {/* <div className='banner w-full h-[70vh] flex flex-col justify-center items-center ' style={{backgroundImage:`url(${homeBanner})`, backgroundPosition: 'center'}}>
            <div className=' backdrop-blur-[3px] p-2 flex flex-col justify-center' >
                <h1 className='text-6xl font-extrabold leading-normal text-white '>LEARN TO SAVE LIVES</h1>
                <p className='text-white text-lg leading-normal font-normal mb-[2rem]'>WELCOMES ON THE GO FIRST AID AND FIRST AID HERO!</p>
                <a className='p-[0.7em] bg-[#fff] rounded flex items-center gap-1 justify-center w-fit text-lg justify-self-center'>
                    Learn more
                    <svg className="double-arrow" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"  width="16px" height="16px" viewBox="0 0 24 24" enableBackground="new 0 0 24 24" xmlSpace="preserve">
                        <g>
                        <path d="M14.211,12.568L2.635,23.76C2.485,23.905,2.263,24,2.063,24c-0.2,0-0.422-0.095-0.572-0.24L0.25,22.559   C0.1,22.414,0,22.198,0,22.006s0.1-0.407,0.25-0.553l9.762-9.439L0.25,2.574C0.1,2.43,0,2.214,0,2.022   c0-0.193,0.1-0.408,0.25-0.553l1.241-1.2c0.15-0.146,0.373-0.242,0.572-0.242c0.199,0,0.422,0.096,0.571,0.242l11.576,11.192   c0.15,0.146,0.249,0.359,0.249,0.553S14.361,12.421,14.211,12.568z M23.748,12.568L12.175,23.76c-0.15,0.146-0.373,0.24-0.572,0.24   c-0.2,0-0.423-0.095-0.573-0.24l-1.24-1.201c-0.15-0.145-0.25-0.36-0.25-0.553s0.1-0.407,0.25-0.553l9.763-9.439L9.79,2.574   C9.64,2.43,9.54,2.214,9.54,2.022c0-0.193,0.1-0.408,0.25-0.553l1.24-1.2c0.15-0.146,0.373-0.242,0.573-0.242   c0.199,0,0.421,0.096,0.572,0.242l11.573,11.192C23.9,11.606,24,11.82,24,12.014S23.9,12.421,23.748,12.568z"></path>
                        </g>
                    </svg>
                </a>
            </div>
        </div>
        <div  className="aboutSection relative w-full py-16" style={{backgroundImage:`url(${grill})`, backgroundPosition: 'center'}}>
            <div className='absolute top-0 right-0 w-full h-full bg-[#0c2340] z-[-2]'></div>
            <div className='content w-[70%] mx-auto'>
            <h1 className='text-5xl font-bold leading-normal text-[#b02526] '>GET EMPLOYED, WORK SAFELY, SAVE LIVES.</h1>
            <p className='text-white leading-normal font-normal mb-[2rem]'>ProSafe First Aid Training School has been providing first aid training since 1999. We have 6 Campuses located in Surrey, Abbotsford, Burnaby, Vancouver, Port Coquitlam, and Richmond. While ProSafe is known for delivering First Aid training courses, we also offer classes in health and safety, mobile equipment operation, workplace safety and customer service.  In addition to training services, we also supply first aid supplies and equipment. Our professional and experienced instructors at ProSafe take pride in delivering the highest quality of training and offering flexible program scheduling in multiple languages</p>
            </div>
        </div> */}
        <div className='cardSection flex flex-col items-center justify-center bg-white'>
            {/* <div>
                <h1 className=' mb-[1.2rem] text-7xl text-[#3B73D0]'>Cources We Offer</h1>
                <Divider />
            </div> */}
            {/* <div className='flex gap-4 items-center justify-center flex-wrap'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div> */}
            <NewBrands />
        </div>
        <div className='relative quote-section bg-[#0c2340] w-full h-[140vh] flex items-center'>
            <div className='absolute top-[13%] left-[5%] w-[10vw] h-[10vh]'>
                <img src={openQuote}/>
            </div>
            <div className='absolute bottom-[21%] right-10 w-[10vw] h-[10vh]'>
            <img src={closeQuote}/>
            </div>
            <div className='container mx-auto h-[70vh] flex px-10'>
                <div className='flex-1 h-full rounded-2xl overflow-hidden mr-[-16px] -mt-5'>
                    <img className='w-full h-full object-cover rounded-2xl' src={testimonialImage}/>
                </div>
                <div className='flex-1 bg-[#fff] flex justify-center items-center p-10 rounded-2xl mt-7 ml-[-16px]'>
                    <h2 className='text-3xl font-medium text-justify font-[Avenir]'>I’ve taken many first aid/CPR classes over the years and this was one of the best! Ishan is a wonderful instructor! He has a nice way of explaining everything and making the class interesting and engaging. I learned a lot!</h2>
                </div>
            </div>
        </div>
        <div className='our-mission mb-10 mt-14 flex'>
            <div className='flex-1 p-8 justify-start '>
                <h1 className='mb-[1.2rem] text-5xl font-bold text-gray-800'>Explore our mission</h1>
                <Divider />
                <p className='mb-[1.2rem] text-base text-body-color leading-relaxed'>If you are a professional instructor looking for a full-time career, or a recent graduate of one of our advanced classes who wants to get a foot in the door, talk to us if you are interested in learning more about having a career at ProSafe. We continue to look for new instructors to join our team who are talented and passionate in teaching and sharing. Not only we offer a flexible schedule and competitive compensation, but also we help you build a fulfilling career that fits your life goals.  If you are interested in teaching for ProSafe please contact us at info@prosafefirstaid.ca</p>
                    <a
                    href="javascript:void(0)"
                    className="
                    inline-block
                    w-[15rem]
                    py-3
                    px-7
                    bg-[#e11d48]
                    border border-[#e11d48]
                    rounded-full
                    text-base text-white
                    font-medium
                    hover:border-primary hover:bg-primary
                    hover:bg-[#e11d48]/90
                    transition
                    transform hover:scale-110 transition-transform duration-300
                    "
                    >
                    Explore More
                    </a>
            </div>
            <div className='flex-1 w-full h-full p-4'>
                <img src={ourMission} className='w-full h-full rounded-md object-cover'/>
            </div>
        </div>
        <div className='cardSection my-6 flex flex-col items-center justify-center mb-[2rem] bg-white '>
            <div className='text-center mt-10 w-[50%]'>
                <h1 className='mb-[1.2rem] text-7xl text-gray-800 font-bold w-full'>Prosafe News</h1>
                <Divider />
            </div>
            <div className='container flex flex-col pb-6 rounded-md'>
                <div className=' flex container gap-4 items-center justify-center flex-wrap'>
                    <EventCard />
                    <EventCard />
                    <EventCard />
                </div>
                <div>
                <a
                    href="javascript:void(0)"
                    className="
                    inline-block
                    w-[15rem]
                    py-3
                    px-7
                    text-[#e11d48]
                    border border-[#e11d48]
                    rounded-full
                    text-base
                    font-medium
                    hover:border-primary hover:bg-primary
                    hover:bg-[#e11d48]/90
                    hover:text-white
                    transition
                    transform hover:scale-110 transition-transform duration-300
                    "
                    >
                    See All
                    </a>
                </div>
            </div>
        </div>
        <div>
            <ContactUs />
        </div>
        <div className="whatsNextSection  relative py-[2rem]  overflow-hidden" style={{ backgroundImage: `url(${comb})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='absolute w-full h-full inset-0 bg-[#3B73D0] z-[-20]'>
            </div>
            <div className='container mx-auto'>

            <h1 className='text-5xl font-bold text-white'>Ready for what's next</h1>
            <div className='flex justify-around  my-[2rem]'>
            <a
            href="javascript:void(0)"
            className="
            inline-block
            py-3
            px-7
            w-[15rem]
            bg-[#e11d48]
            border border-[#e11d48]
            rounded-full
            text-base text-white
            font-medium
            hover:border-primary hover:bg-primary
            hover:bg-[#e11d48]/90
            transition
            transform hover:scale-110 transition-transform duration-300
            "
            >
            Request More Info
            </a>
            <a
            href="javascript:void(0)"
            className="
            inline-block
            w-[15rem]
            py-3
            px-7
            bg-[#e11d48]
            border border-[#e11d48]
            rounded-full
            text-base text-white
            font-medium
            hover:border-primary hover:bg-primary
            hover:bg-[#e11d48]/90
            transition
            transform hover:scale-110 transition-transform duration-300
            "
            >
            Apply Now
            </a>
            <a
            href="javascript:void(0)"
            className="
            inline-block
            w-[15rem]
            py-3
            px-7
            bg-[#e11d48]
            border border-[#e11d48]
            rounded-full
            text-base text-white
            font-medium
            hover:border-primary hover:bg-primary
            hover:bg-[#e11d48]/90
            transition
            transform hover:scale-110 transition-transform duration-300
            "
            >
            Explore Programs
            </a>
            </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Home
