import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero2() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="text-gray-600 body-font"
        style={{
          backgroundColor: "rgb(35,133,109)", // Green background
          height: "107vh", // Full-screen height
          color: 'white',
        }}
      >
        <div className="container mx-auto flex px-5 py-24 flex-col md:flex-row items-center justify-between">
          {/* Left side: Text content */}
          <div className="lg:flex-grow md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left">
            <h2 className="mb-4 font-bold text-xl">
              Summer 2020
            </h2>
            <h1 className="title-font text-4xl sm:text-5xl mb-7 font-semibold">
              Vita Classic
              <br className="hidden lg:inline-block" />
              Product
            </h1>
            <p className="mb-8 leading-relaxed text-lg sm:text-2xl">
              We know how large objects will act,
              <br />
              how are objects will act, we know
            </p>
            <div className="flex justify-center md:justify-start text-4xl">
              <h2 className="mr-5 text-2xl mt-4 font-bold">$16.48</h2>
              <Link href="/cart">

              <button className="inline-flex bg-green-600 border-0 py-2 px-6 text-2xl focus:outline-none hover:bg-indigo-600 rounded">
                Add to cart
              </button></Link>
            </div>
          </div>

          {/* Right side: Image */}
          <div className="md:w-1/2 flex justify-center items-center mt-12 md:mt-0">
            <Image
              src="/shop-hero-2-png-picture-1.png" // Image path from the public folder
              alt="Hero Image"
              width={500} // Adjust the width and height as needed
              height={500}
              className="object-contain w-full h-full md:w-[500px] md:h-[500px]"
            />
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full">
              <Image
                alt="ecommerce"
                className="lg:w-full w-full h-64 lg:h-auto object-cover object-center rounded"
                src="/clothes 1.png"
                width={500} // Adjust the width and height as needed
                height={500}
              />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest mt-10 font-bold">Summer 2020</h2>
              <h1 className="text-gray-900 text-3xl sm:text-4xl title-font font-bold mb-1 mt-3">
                Part of the Neural <br /> Universe
              </h1>
              <p className="mb-8 leading-relaxed text-lg sm:text-xl">
                We know how large objects will act,
                <br />
                but things on a small scale.
              </p>
              <div className="flex mt-6 items-center flex-wrap">
                <button className="flex text-white bg-green-700 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded h-[52px] w-[200px] text-xl font-mono mb-4 sm:mb-0">
                  Buy Now
                </button>
                <button className="flex text-green-900 font-sans text-center ml-5 bg-white border-2 border-green-700 py-2 px-8 focus:outline-none rounded h-[52px] w-[200px] text-xl">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
