import React from 'react'
import { assets } from '../assets/assets' // Make sure this file exports `contact_image`

const Contact = () => {
  return (
    <div className='px-4 md:px-20'>
      {/* Heading */}
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>
           <span className='text-gray-700 font-semibold'> CONTACT US</span>
        </p>
      </div>

      {/* Content Section */}
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        {/* Contact Image */}
        <img
          className='w-full md:max-w-[360px]'
          src={assets.contact_image}
          alt='Contact'
        />

        {/* Contact Info */}
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className='text-gray-500'>
            54709 Willms Station <br />
            Suite 350, Washington, USA
          </p>
          <p className='text-gray-500'>Tel: 62621755</p>

          <p className='font-semibold text-lg text-gray-600'>Careers at PRESCRIPTO</p>
          <p className='text-gray-500'>
            Learn more about our teams and job openings.
          </p>

          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
