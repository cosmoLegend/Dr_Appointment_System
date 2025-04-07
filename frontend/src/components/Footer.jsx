import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="md:mx-10">
      
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

        {/* Left */}
        <div >
          <img className="mb-5 w-40"src={assets.logo} alt="Logo" className="w-28 mb-4" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur amet accusamus eveniet, inventore labore quae qui cum, repellat rerum necessitatibus impedit odit nam quibusdam praesentium odio voluptate modi voluptates velit?
          </p>
        </div>

        {/* Center */}
        <div >
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600 ">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Right */}
        <div >
          <p className="text-xl font-medium mb-5">Get in Touch</p>
          <ul  className="flex flex-col gap-2 text-gray-600 ">
            <li>+91 144 544654</li>
            <li>presicripto@gmail.com</li>
          </ul>
        </div>
      </div>

      <div >
      <hr  />

        <p className="py-5 text-sm text-center">© 2025 Prescripto. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
