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
        <div className='testimonialSection'>
            <div class="container my-24 mx-auto md:px-6">
                <section class="mb-32 text-center">
                    <h2 class="mb-12 pb-4 text-center text-3xl font-bold text-[#3B73D0]">Testimonials</h2>

                    <div class="grid gap-6 md:grid-cols-3 xl:gap-x-12">
                    <div class="mb-6 lg:mb-0">
                        <div
                        class="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <div class="flex">
                            <div
                            class="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                            data-te-ripple-init data-te-ripple-color="light">
                            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.jpg" class="w-full" />
                            <a href="#!">
                                <div
                                class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                                </div>
                            </a>
                            </div>
                        </div>
                        <div class="p-6">
                            <h5 class="mb-2 text-lg font-bold">John Doe</h5>
                            <ul class="mb-6 flex justify-center">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                <path fill="r#eda310r"
                                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                </svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                <path fill="#eda310"
                                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                </svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                <path fill="#eda310"
                                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                </svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                <path fill="#eda310"
                                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                </svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                <path fill="#eda310"
                                    d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                </svg>
                            </li>
                            </ul>
                            <p>
                            Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                            placerat vulputate. Ut vulputate est non quam dignissim
                            elementum. Donec a ullamcorper diam.
                            </p>
                        </div>
                        </div>
                    </div>

                    <div class="mb-6 lg:mb-0">
                        <div
                        class="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <div class="flex">
                            <div
                            class="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                            data-te-ripple-init data-te-ripple-color="light">
                            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/6.jpg" class="w-full" />
                            <a href="#!">
                                <div
                                class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                                </div>
                            </a>
                            </div>
                        </div>
                        <div class="p-6">
                            <h5 class="mb-2 text-lg font-bold">Halley Frank</h5>

                            <ul class="mb-6 flex justify-center">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                <path fill="#eda310"
                                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                </svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                <path fill="#eda310"
                                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                </svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                <path fill="#eda310"
                                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                </svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                <path fill="#eda310"
                                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                </svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                <path fill="#eda310"
                                    d="m323 851 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z" />
                                </svg>
                            </li>
                            </ul>
                            <p>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui
                            blanditiis praesentium accusamus contestatur voluptatum
                            deleniti atque corrupti.
                            </p>
                        </div>
                        </div>
                    </div>

                    <div class="mb-0">
                        <div
                        class="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <div class="flex">
                            <div
                            class="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                            data-te-ripple-init data-te-ripple-color="light">
                            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/18.jpg" class="w-full" />
                            <a href="#!">
                                <div
                                class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                                </div>
                            </a>
                            </div>
                        </div>
                        <div class="p-6">
                            <h5 class="mb-2 text-lg font-bold">Lisa Trey</h5>

                            <ul class="mb-6 flex justify-center">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                <path fill="#eda310"
                                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                </svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                <path fill="#eda310"
                                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                </svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                <path fill="#eda310"
                                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                </svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                <path fill="#eda310r"
                                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                </svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                                <path fill="#eda310r"
                                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                </svg>
                            </li>
                            </ul>
                            <p>
                            Enim ad minima veniam, quis nostrum exercitationem ullam
                            corporis suscipit laboriosam, nisi ut aliquid commodi quis
                            nostrum minima.
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Home