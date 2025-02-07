import React from 'react'
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";  // Fixed import
import Footer from '@/components/Footer';  // Ensure correct path

export default function Page() {
  return (
    <>
      {/* Navigation and Intro */}
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-2xl font-bold">Bendage</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a href="/" className="mr-5 hover:text-gray-900">Home</a>
          <a href="/product" className="mr-5 hover:text-gray-900">Product</a>
          <a href="/pricing" className="mr-5 hover:text-gray-900">Pricing</a>
          <a href="/contact" className="mr-5 hover:text-gray-900">Contact</a>
        </nav>
        <a href="" className="mr-10 text-blue-600 text-md">Log In</a>
        <button className="inline-flex text-white bg-blue-600 border-0 py-2 px-3 w-[230px] h-[48px] text-center hover:bg-blue-900 rounded text-base mt-4 md:mt-0">
          <span className="text-center font-semibold ml-3">Become a Member</span>
        </button>
      </div>
      
      <section
        className="text-gray-600 body-font"
        style={{
          backgroundImage: `url('/hero-2-bg-.png')`, // Path to your image in the public folder
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100vh', // Full-screen height
          color: 'white',
        }}
      >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h2 className="mb-4 ml-10 font-bold text-black">CONTACT US</h2>
            <h1 className="title-font text-6xl text-black ml-10 mb-7 font-bold">Get in touch <br /> today</h1>
            <p className="mb-8 leading-relaxed ml-10 text-xl text-black">We know how large objects will act, but things on a small scale.</p>
            <h2 className="mb-4 ml-10 font-bold text-gray-800 text-lg">Phone: +451 215 215</h2>
            <h2 className="mb-4 ml-10 font-bold text-gray-800 text-lg">Fax: +451 215 215</h2>

            <div className="flex justify-center font-semibold ml-10">
              {/* Social Media Icons */}
              <div className="flex space-x-6">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <AiFillTwitterCircle className="text-2xl text-black" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-2xl text-black" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <RiInstagramFill className="text-2xl text-black" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-2xl text-black" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <div className="container mx-auto mt-16 flex justify-center">
        {/* Free Plan */}
        <div className="w-[300px] h-[340px] rounded-2xl p-6">
          <h2 className="text-xl font-bold text-center ml-14">
            <svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_232_735)">
                <path d="M56.929 38.9947C56.5775 38.6426 56.16 38.3632 55.7004 38.1726..." fill="#23A6F0" />
              </g>
              <defs>
                <clipPath id="clip0_232_735">
                  <rect width="72" height="72" fill="white" transform="translate(0.5)" />
                </clipPath>
              </defs>
            </svg>
          </h2>
          <p className="text-center font-bold mt-4">georgia.young@example.com</p>
          <button className="inline-flex border-2 border-blue-600 mt-5 ml-10 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-2xl text-blue-500 font-bold hover:text-white">
            Submit Request
          </button>
        </div>

        {/* Standard Plan */}
        <div className="bg-blue-950 text-white w-[320px] h-[300px] rounded-lg p-6 shadow-lg transform scale-105">
          <h2 className="text-2xl font-bold mb-4 text-center ml-20">
            <svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M36.5 3C22.4168 3 11 14.3074 11 28.2559C11 32.9206 11.9219 37.7384..." fill="#23A6F0" />
            </svg>
          </h2>
          <p className="text-center font-bold mt-4">georgia.young@example.com</p>
          <button className="inline-flex border-2 border-blue-600 mt-5 ml-10 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-2xl text-blue-500 font-bold hover:text-white">
            Submit Request
          </button>
        </div>

        {/* Premium Plan */}
        <div className="w-[300px] h-[340px] rounded-2xl p-6">
          <h2 className="text-xl font-bold text-center ml-20">
            <svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_232_755)">
                <path d="M1.225 16.1271C1.67868 14.1024..." fill="#23A6F0" />
              </g>
              <defs>
                <clipPath id="clip0_232_755">
                  <rect width="72" height="72" fill="white" transform="translate(0.5)" />
                </clipPath>
              </defs>
            </svg>
          </h2>
          <p className="text-center font-bold mt-4">georgia.young@example.com</p>
          <button className="inline-flex border-2 border-blue-600 mt-5 ml-10 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-2xl text-blue-500 font-bold hover:text-white">
            Submit Request
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-screen">
        <span className="mb-5">
          <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M43.9052 61.2058..." fill="#23A6F0" />
          </svg>
        </span>
        <h2 className="text-md mb-5 font-semibold">WE CAN'T WAIT TO MEET YOU</h2>
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Let's Talk</h1>
        <button className="inline-flex text-white bg-blue-600 border-0 py-2 px-3 w-[230px] h-[48px] text-center hover:bg-blue-900 rounded text-base mt-4 md:mt-0">
          <span className="text-center font-semibold ml-3">Join Now</span>
        </button>
      </div>

      <Footer />
    </>
  );
}
