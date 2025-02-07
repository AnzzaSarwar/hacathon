import React from 'react';
import Footer from "@/components/Footer";

export default function Hero2() {
  return (
    <>
      <section
        className="text-gray-600 body-font"
        style={{
          backgroundColor: 'rgba(42, 124, 199, 1)', // Background color of the section
        }}
      >
        <div
          className="container mx-auto flex flex-col md:flex-row items-center px-5 py-24"
          style={{
            backgroundColor: 'rgba(42, 124, 199, 1)', // Blue background for left half
            color: 'white',
            height: '636px', // Full section height
          }}
        >
          {/* Left side: Text content */}
          <div className="lg:flex-grow md:w-1/2 flex flex-col items-center text-center md:text-left mb-16 md:mb-0">
            <h2 className="mb-4 font-bold text-xl sm:text-2xl md:text-3xl">WORK WITH US</h2>
            <h1 className="title-font text-3xl sm:text-4xl md:text-5xl font-semibold mb-7">
              Now Let&apos;s Grow Yours
            </h1>
            <p className="mb-8 leading-relaxed text-sm sm:text-base md:text-lg">
              The gradual accumulation of information about atomic and
              <br />
              small scale behavior during the first quarter of the 20th
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="inline-flex border-2 border-white py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm sm:text-md mr-10">
                Button
              </button>
            </div>
          </div>

          {/* Right side: Image */}
          <div
            className="flex-grow bg-cover bg-center"
            style={{
              backgroundImage: `url('/unsplash_v.png')`, // Image path
              height: '500px', // Image height for mobile
              width: '500px', // Full width for mobile
            }}
          ></div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
