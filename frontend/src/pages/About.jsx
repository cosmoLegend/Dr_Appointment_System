import React from 'react';
import { assets } from '../assets/assets'; // assuming you need this import for about_image

const About = () => {
  return (
    <div className="px-4 sm:px-10">

      {/* Title */}
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          <span className="text-gray-700 font-medium">About Us</span>
        </p>
      </div>

      {/* About Section */}
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px] rounded-lg"
          src={assets.about_image}
          alt="About Prescripto"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>Welcome to Prescripto, your trusted partner in digital healthcare solutions.</p>
          <p>Prescripto is committed to simplifying healthcare access through technology-driven tools, making it easier for patients and professionals alike.</p>
          <b className="text-gray-800 text-base">Our Vision</b>
          <p>
            Our vision at Prescripto is to revolutionize the way people approach healthcare—
            empowering patients with smart tools and enabling healthcare providers to deliver more effective and timely care.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="text-xl my-4 font-medium">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-20">
        <div className="border px-8 md:px-12 py-8 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg">
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className="border px-8 md:px-12 py-8 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg">
          <b>Convenience:</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className="border px-8 md:px-12 py-8 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg">
          <b>Personalization:</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>

    </div>
  );
};

export default About;
