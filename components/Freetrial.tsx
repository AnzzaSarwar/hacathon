import React from 'react';
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import Footer from "@/components/Footer"




export default function SocialMediaSection() {
  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen ">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Start FreeTrial 14 days free trial 
      </h1>

      {/* Paragraph */}
      <p className="text-gray-600 text-lg text-center mb-6 max-w-md">
      Met minim Mollie non desert Alamo est sit cliquey  dolor <br /> do met sent.RELIT official consequent door ENIM RELIT 
      </p>

      {/* Button */}
      <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 mb-6">
        Try It Free Now 
      </button>

      {/* Social Media Icons */}
      <div className="flex space-x-6 ">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <AiFillTwitterCircle className='text-2xl text-blue-500' />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook  className='text-2xl text-blue-800' />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <RiInstagramFill  className='text-2xl text-black'/>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className='text-2xl text-blue-600' />
        </a>
      </div>
    </div>
    <Footer />
    </>
  );
}
