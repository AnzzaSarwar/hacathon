"use client";

import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';
import DesProduct from "@/components/DesProduct";
import Image from 'next/image'; // Correctly import Image component
import BestSellerProduct from "@/components/BestSellerProduct";

export default function Page() {
  // Array of images for the carousel
  const images = [
    '/single-product.jpg',
    '/single-product-3.jpg',
    '/single-product-2.jpg',
  ];

  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle next image
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle previous image
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <>
      <div>
        <Navbar />
        <Header />

        {/* Product Details Section */}
        <div className="min-h-screen bg-gray-100 p-6">
          <nav className="text-sm text-gray-500 mb-6">
            <a href="/" className="hover:underline">Home</a> {'>'}
            <a href="/shop" className="hover:underline">Shop</a>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 shadow rounded">
            {/* Left Section: Product Image Carousel */}
            <div className="relative">
              <div className="relative w-full h-[450px] bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src={images[currentIndex]}
                  alt="Product"
                  layout="fill" // This makes the image take full width and height of its container
                  objectFit="cover" // Ensures the image covers the area without distortion
                />
              </div>

              {/* Navigation Buttons */}
              <button
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center"
                onClick={handlePrev}
              >
                ❮
              </button>
              <button
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center"
                onClick={handleNext}
              >
                ❯
              </button>

              {/* Thumbnails */}
              <div className="flex mt-4 space-x-2 justify-center">
                {images.map((img, index) => (
                  <Image
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    width={64}
                    height={64}
                    className={`rounded-lg border cursor-pointer ${
                      currentIndex === index ? 'border-blue-500' : 'border-gray-300'
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>
            </div>

            {/* Right Section: Product Details */}
            <div>
              <h1 className="text-2xl font-bold">Floating Phone</h1>
              <div className="flex items-center mt-2">
                <div className="flex text-yellow-500">★★★★☆</div>
                <p className="ml-2 text-gray-600">(10 Reviews)</p>
              </div>
              <p className="text-2xl text-gray-800 font-semibold mt-4">$1,139.33</p>

              <p className="text-sm font-bold text-blue-600 mt-1">
                <span className="text-sm mr-3 font-bold text-black">Availability :</span>In Stock
              </p>

              <p className="text-gray-600 mt-6">
                Met minim Mollie non desert Alamo est sit cliquey <br />
                dolor do met sent.RELIT official consequent door ENIM RELIT Mollei. <br />
                Excitation venial consequent sent nostrum met.
              </p>

              {/* Color Options */}
              <div className="mt-6">
                <div className="flex space-x-2 mt-5">
                  <div className="w-6 h-6 bg-blue-500 rounded-full cursor-pointer"></div>
                  <div className="w-6 h-6 bg-green-500 rounded-full cursor-pointer"></div>
                  <div className="w-6 h-6 bg-orange-500 rounded-full cursor-pointer"></div>
                  <div className="w-6 h-6 bg-black rounded-full cursor-pointer"></div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex items-center space-x-4">
                <button className="bg-blue-500 text-white px-6 py-2 rounded shadow hover:bg-blue-600">
                  Select Options
                </button>
                <Image src="/like.png" alt="Like" width={24} height={24} />
                <Image src="/basket.png" alt="Basket" width={24} height={24} />
                <Image src="/more.png" alt="More" width={24} height={24} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <DesProduct />
      <BestSellerProduct />
    </>
  );
}
