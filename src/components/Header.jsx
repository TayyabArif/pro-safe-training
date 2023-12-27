import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [selected, setSelected] = useState("Home")
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const toggleDropdown = (visible) => {
    setIsDropdownVisible(visible);
  };
  const navigate = useNavigate()
  return (
    <header>
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-5 ">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <a href="/" class="flex items-center">
          <img
            src="https://www.prosafetraining.ca/wp-content/uploads/2023/03/ProSafe-Logo-HD-200-%C3%97-200-px.png"
            class="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span class="self-center text-xl font-semibold whitespace-nowrap ">
            ProSafe
          </span>
        </a>
        <div class="flex items-center lg:order-2">
          <p
            class="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  focus:outline-none cursor-pointer"
            onClick={() => {
              navigate("/login")
            }}
          >
            Log in
          </p>
          <p
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none  cursor-pointer"
            onClick={() => {
              navigate("/register")
            }}
          >
            Get started
          </p>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              class="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <p
                class={`${selected === "Home" ? "text-blue-700" : "text-gray-700 "} block py-2 pr-4 pl-3  rounded lg:bg-transparent lg:p-0 cursor-pointer`}
                aria-current="page"
                onClick={() => {
                  navigate("/")
                  setSelected('Home')
                }}
              >
                Home
              </p>
            </li>
            <li>
              <p
                class={`${selected === "About" ? "text-blue-700" : "text-gray-700"} block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0  cursor-pointer`}
                onClick={() => {
                  navigate("/about")
                  setSelected('About')
                }}
              >
                About
              </p>
            </li>
            <li>
              <p
                href="/contact"
                class={`${selected === "Contact" ? "text-blue-700" : "text-gray-700 "} block py-2 pr-4 pl-3  rounded lg:bg-transparent lg:p-0  cursor-pointer hover:text-blue-700`}
                onClick={() => {
                  setSelected('Contact')
                  navigate("/contact")
                }}
              >
                Contact
              </p>
            </li>
            <li>
              <p
                class={`${selected === "Blog" ? "text-blue-700" : "text-gray-700 "} block py-2 pr-4 pl-3  rounded lg:bg-transparent lg:p-0 cursor-pointer hover:text-blue-700`}
                onClick={() => {
                  setSelected('Blog')
                  navigate("/blog")
                }}
              >
                Blog
              </p>
            </li>
            <div className='flex flex-col items-center'>
              <div class={`${selected === "Blog" ? "text-blue-700" : "text-gray-700 "} flex items-center py-2 pr-4 pl-3 rounded lg:bg-transparent lg:p-0  cursor-pointer hover:text-blue-700`}
                onMouseEnter={() => toggleDropdown(true)}
                onMouseLeave={() => toggleDropdown(false)}
              >
                Courses
                <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
              </svg>
              </div>
              {isDropdownVisible && (
              <div id="dropdown" class="z-10 bg-white absolute top-20 divide-y divide-gray-100 rounded-lg shadow  h-[90%] overflow-scroll"
                  onMouseEnter={() => toggleDropdown(true)}
                  onMouseLeave={() => toggleDropdown(false)}
              >
                <div className='flex gap-5 p-5'>
                  <div className='flex flex-col px-5 border border-l-0 border-t-0 border-b-0 border-r-2 border-r-gray-300'>
                    <h2 className='text-2xl text-[#e11d48] text-start font-semibold'>
                      WORKSAFE BC FIRST AID (OFA) TRAINING
                    </h2>
                    <div className='flex flex-col gap-2 items-start'>
                      <p>
                        <span className='font-bold text-3xl mr-1'>.</span> Occupational First Aid (OFA) Level 1
                      </p>
                      <p>
                        <span className='font-bold text-3xl mr-1'>.</span> Occupational First Aid (OFA) Level 1
                      </p>
                      <p>
                        <span className='font-bold text-3xl mr-1'>.</span> Occupational First Aid (OFA) Level 1
                      </p>
                      <p>
                        <span className='font-bold text-3xl mr-1'>.</span> Occupational First Aid (OFA) Level 1
                      </p>
                      <p>
                        <span className='font-bold text-3xl mr-1'>.</span> Occupational First Aid (OFA) Level 1
                      </p>
                    </div>
                    <h2 className='text-2xl text-[#e11d48] text-start font-semibold mt-4'>
                      TRAFFIC CONTROL AND MOBILE EQUIPMEN
                    </h2>
                    <div className='flex flex-col gap-2 items-start'>
                      <p>
                        <span className='font-bold text-3xl mr-1'>.</span> Traffic Control Person
                      </p>
                      <p>
                        <span className='font-bold text-3xl mr-1'>.</span> Traffic Control Person
                      </p>
                      <p>
                        <span className='font-bold text-3xl mr-1'>.</span> Traffic Control Person
                      </p>
                      <p>
                        <span className='font-bold text-3xl mr-1'>.</span> Traffic Control Person
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-col px-5 border border-l-0 border-t-0 border-b-0 border-r-2 border-r-gray-300'>
                    <h2 className='text-2xl text-[#e11d48] text-start font-semibold'>
                      CANADIAN RED CROSS FIRST AID TRAINING
                    </h2>
                    <div className='flex flex-col gap-2 items-start'>
                      <p>
                        <span className='font-bold text-3xl mr-1'>.</span> Standard First Aid with CPR/AED Level C
                      </p>
                      <p>
                        <span className='font-bold text-3xl mr-1'>.</span> Standard First Aid with CPR/AED Level C
                      </p>
                      <p>
                        <span className='font-bold text-3xl mr-1'>.</span> Standard First Aid with CPR/AED Level C
                      </p>
                      <p>
                        <span className='font-bold text-3xl mr-1'>.</span> Standard First Aid with CPR/AED Level C
                      </p>
                      <p>
                        <span className='font-bold text-3xl mr-1'>.</span> Standard First Aid with CPR/AED Level C
                      </p>
                    </div>
                    <h2 className='text-2xl text-[#e11d48] text-start font-semibold mt-4'>
                    CANADIAN RED CROSS ADVANCED FIRST AID TRAINING
                    </h2>
                    <div className='flex flex-col gap-2 items-start'>
                      <p>
                        <span className='font-bold text-3xl mr-1'>.</span> First Responder
                      </p>
                      <p>
                        <span className='font-bold text-3xl mr-1'>.</span> First Responder
                      </p>
                      <p>
                        <span className='font-bold text-3xl mr-1'>.</span> First Responder
                      </p>
                      <p>
                        <span className='font-bold text-3xl mr-1'>.</span> First Responder
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-col px-5 border border-l-0 border-t-0 border-b-0 border-r-2 border-r-gray-300'>
                    <h2 className='text-2xl text-[#e11d48] text-start font-semibold'>
                    WORKPLACE SAFETY TRAINING
                    </h2>
                    <div className='flex flex-col gap-2 text-start items-start'>
                      <p>
                        <span className='font-bold text-3xl mr-1'>.</span> Standard First Aid with CPR/AED Level C
                      </p>
                      <p>
                        <span className='font-bold text-3xl mr-1'>.</span> Standard First Aid with CPR/AED Level C
                      </p>
                      <p>
                        <span className='font-bold text-3xl mr-1'>.</span> Standard First Aid with CPR/AED Level C
                      </p>
                    </div>
                    <h2 className='text-2xl text-[#e11d48] text-start font-semibold mt-4'>
                      AQUATICS
                    </h2>
                    <div className='flex flex-col gap-2 items-start'>
                      <p>
                        <span className='font-bold text-3xl mr-1'>.</span> First Responder
                      </p>
                      <p>
                        <span className='font-bold text-3xl mr-1'>.</span> First Responder
                      </p>
                      <p>
                        <span className='font-bold text-3xl mr-1'>.</span> First Responder
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              )}
            </div>

            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 "
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 "
              >
                Elearning
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  );
};

export default Header;
