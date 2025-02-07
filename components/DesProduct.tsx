import React from 'react';
import Image from 'next/image';

export default function ThreeDivsLayout() {
  return (
    <div className="flex justify-between items-start min-h-screen bg-gray-100 p-8">
      {/* First Div with Image */}
      <div className="h-[420px] w-[332px] bg-gray-200 rounded shadow-lg overflow-hidden shadow-black">
        <Image
          src="/unsplash_ (1).png" // Replace with your image path
          alt="Sample"
          width={332} // Set width and height
          height={420}
          className="object-cover"
        />
      </div>

      {/* Second Div with Heading and Paragraphs */}
      <div className="h-[450px] w-[450px] rounded p-4">
        <h1 className="text-3xl font-bold">The Quick Fox Jumps Over</h1>
        <p className="text-lg text-gray-700 mt-5 font-semibold">
          Met minim Mollie non desert Alamo est sit cliquey <br /> dolor do met sent.RELIT official consequent door ENIM RELIT Mollei. <br /> Excitation venial consequent sent nostrum met.
        </p>
        <p className="text-lg text-gray-700 font-semibold mt-5">
          Met minim Mollie non desert Alamo est sit cliquey <br /> dolor do met sent.RELIT official consequent door ENIM RELIT Mollei. <br /> Excitation venial consequent sent nostrum met.
        </p>
        <p className="text-lg text-gray-700 font-semibold mt-5">
          Met minim Mollie non desert Alamo est sit cliquey <br /> dolor do met sent.RELIT official consequent door ENIM RELIT Mollei. <br /> Excitation venial consequent sent nostrum met.
        </p>
      </div>

      {/* Third Div with Heading and Paragraphs */}
      <div className="h-[430px] w-[450px] rounded p-4 font-bold">
        <h1 className="text-2xl font-bold mb-2">The Quick Fox Jumps Over</h1>

        {/* First Paragraph with ">" sign */}
        <p className="text-sm text-gray-600 mb-2">
          <span className="mr-3 text-3xl">{">"}</span> The Quick Fox Jumps Over the lazy dog
        </p>

        {/* Other Paragraphs with ">" sign */}
        <p className="text-sm text-gray-600 mb-2">
          <span className="mr-3 text-3xl">{">"}</span> The Quick Fox Jumps Over the lazy dog
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <span className="mr-3 text-3xl">{">"}</span> The Quick Fox Jumps Over the lazy dog
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <span className="mr-3 text-3xl">{">"}</span> The Quick Fox Jumps Over the lazy dog
        </p>

        <h1 className="text-2xl font-bold mb-2">Final Heading</h1>

        {/* Paragraphs with ">" sign */}
        <p className="text-sm text-gray-600 mb-2">
          <span className="mr-3 text-3xl">{">"}</span> The Quick Fox Jumps Over the lazy dog
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <span className="mr-3 text-3xl">{">"}</span> The Quick Fox Jumps Over the lazy dog
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <span className="mr-3 text-3xl">{">"}</span> The Quick Fox Jumps Over the lazy dog
        </p>
      </div>
    </div>
  );
}
