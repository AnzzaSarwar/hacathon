import React from 'react';
import Ourteam from "@/components/Ourteam";
import Brand from "@/components/Brand";
import Testimonials from "@/components/Testimonials";
import Image from 'next/image';

export default function About1() {
  return (
    <>
      {/* Problem Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          {/* Left Side (Heading and First Paragraph) */}
          <div className="md:w-2/5 flex flex-col justify-center mb-12 md:mb-0">
            <h2 className="text-red-600 font-medium title-font text-sm sm:text-lg">Problem Trying</h2>
            <p className="leading-relaxed mt-4 font-bold text-black text-2xl sm:text-3xl">
              Met minim Mollie non desert. <br />
              Alamo est sit cliquey dolor do. <br />
              Met sent.
            </p>
          </div>

          {/* Right Side (Second Paragraph and Content Section) */}
          <div className="md:w-3/5 md:pl-6 mt-6 md:mt-0">
            <p className="leading-relaxed text-base sm:text-lg mt-14">
              Problem trying to resolve the conflict between
              the two major realms of <br /> classic physics:
              Newtonian mechanics.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="text-gray-600 body-font mb-10">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font sm:text-4xl text-4xl text-gray-900 font-bold">15K</h2>
              <p className="leading-relaxed text-gray-500">Happy customers</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font sm:text-4xl text-4xl text-gray-900 font-bold">150K</h2>
              <p className="leading-relaxed text-gray-500">Monthly Visitors</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font sm:text-4xl text-4xl font-bold text-gray-900">15</h2>
              <p className="leading-relaxed">Countries Worldwide</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font sm:text-4xl text-gray-900 font-bold text-4xl">100+</h2>
              <p className="leading-relaxed">Top Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Centered Image Section */}
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center w-full" style={{ maxWidth: '989px', height: 'auto' }}>
          <Image 
            src="/video card.png" 
            alt="Centered Image" 
            className="object-contain w-full h-full" 
            width={989} 
            height={540}
          />
        </div>
      </div>  

      {/* Our Team Section */}
      <Ourteam />  

      {/* Big Companies Section */}
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="text-3xl font-bold title-font mb-4 text-gray-900 sm:text-4xl">Big Companies Are Here</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base sm:text-lg">
          Problem trying to resolve the conflict between <br />
          the two major realms of classic physics: 
          Newtonian mechanics.
        </p>
        <span className='mt-10'>
          <Brand />
        </span>
      </div>

      {/* Testimonials Section */}
      <Testimonials />
    </>
  );
}
