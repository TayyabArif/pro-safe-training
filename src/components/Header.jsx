import React from 'react';

const Header = () => {
  return (
    <div className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center ">
        <h1 className="text-2xl font-bold">Logo</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-[#3B73D0]">Home</a></li>
            <li><a href="#" className="hover:text-[#3B73D0]">About</a></li>
            <li><a href="#" className="hover:text-[#3B73D0]">Services</a></li>
            <li><a href="#" className="hover:text-[#3B73D0]">Contact</a></li>
            <li><a href="#" className="hover:text-[#3B73D0]">ELearning</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
