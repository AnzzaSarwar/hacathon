import React from 'react';
import About1 from "@/components/About1"

export default function Hero2() {
  return (
    <>
      {/* Header */}
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-2xl font-bold">Bendage</span>
          </a>
          
          {/* Navigation */}
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a href="/" className="mr-5 hover:text-gray-900">Home</a>
            <a href='/Team' className="mr-5 hover:text-gray-900">Team</a>
            <a href='/pricing' className="mr-5 hover:text-gray-900">Pricing</a>
            <a href='/contact' className="mr-5 hover:text-gray-900">Contact</a>
          </nav>
          
          {/* Log In and Sign Up */}
          <a href="" className='mr-10 text-blue-600 text-md hidden md:inline-block'>Log In</a>
          <button className="inline-flex text-white bg-blue-600 border-0 py-2 px-3 w-[230px] h-[48px] text-center hover:bg-blue-900 rounded text-base mt-4 md:mt-0">
            <span className='text-center font-semibold ml-3'>Become a Member</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="text-gray-600 body-font"
        style={{
          backgroundImage: `url('/hero-2.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          color: 'white',
        }}
      >
        <div className="container mx-auto flex flex-col md:flex-row  py-24 px-5 md:px-16">
          <div className="lg:flex-grow md:w-1/2 flex flex-col  text-center md:text-left mb-16 md:mb-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
              ABOUT COMPANY
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-black font-bold mb-7">
              ABOUT US
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-black mb-8 leading-relaxed">
              We know how large objects will act,
              <br />
              but things on a small scale.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="inline-flex bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm sm:text-base md:text-lg">
                Get Quote Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About1 />
    </>
  );
}
