import React from 'react'
import Brand from "@/components/Brand";
import Footer from '@/components/Footer';
import Image from 'next/image';

const products = [
  {
    image: '/product1.png',
    title: 'Graphic Design',
    description: 'English Development',
    originalPrice: '$16.48',
    discountPrice: '$6.48',
  },
  {
    image: '/product2.png',
    title: 'Graphic Design',
    description: 'English Development',
    originalPrice: '$16.48',
    discountPrice: '$6.48',
  },
  {
    image: '/product3.png',
    title: 'Graphic Design',
    description: 'English Development',
    originalPrice: '$16.48',
    discountPrice: '$6.48',
  },
  {
    image: '/product4.png',
    title: 'Graphic Design',
    description: 'English Development',
    originalPrice: '$16.48',
    discountPrice: '$6.48',
  },
  {
    image: '/product5.png',
    title: 'Graphic Design',
    description: 'English Development',
    originalPrice: '$16.48',
    discountPrice: '$6.48',
  },
  {
    image: '/product6.png',
    title: 'Graphic Design',
    description: 'English Development',
    originalPrice: '$16.48',
    discountPrice: '$6.48',
  },
  {
    image: '/product7.png',
    title: 'Graphic Design',
    description: 'English Development',
    originalPrice: '$16.48',
    discountPrice: '$6.48',
  },
  {
    image: '/product8.png',
    title: 'Graphic Design',
    description: 'English Development',
    originalPrice: '$16.48',
    discountPrice: '$6.48',
  },
];

export default function BestSellerProduct() {
  return (
    <>
      <div>
        {/* Heading */}
        <div className="mt-5 ml-5 shadow-sm">
          <h1 className="text-4xl font-bold mt-5 border-b-2 border-gray-300">BestSeller Products</h1>
        </div>
  
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {products.map((product, index) => (
                <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative rounded overflow-hidden h-[280px] w-[239px] ml-5">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={239}
                      height={280}
                      className="object-cover object-center w-full h-full block"
                    />
                  </a>
                  <div className="mt-4 text-center">
                    <h2 className="text-gray-900 title-font text-lg font-medium">{product.title}</h2>
                    <p className="mt-1">{product.description}</p>
                    <p className="mt-1 text-gray-400 text-lg font-semibold">
                      {product.originalPrice} <span className="text-green-700 ml-2 font-bold text-lg">{product.discountPrice}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Brand />
      <Footer />
    </>
  );
}
