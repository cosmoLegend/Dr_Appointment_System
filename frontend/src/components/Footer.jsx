import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="md:mx-10">
      
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

        {/* Left */}
        <div >
          <img className="mb-5 w-40"src={assets.logo} alt="Logo"  />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
          Prescripto is your trusted partner in healthcare, offering seamless access to doctors, prescriptions, and medical advice. Our mission is to make healthcare accessible, efficient, and reliable for everyone.          </p>
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
            <li>prescripto@gmail.com</li>
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
