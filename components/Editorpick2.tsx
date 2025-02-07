import React from "react";
import Image from "next/image";

const EditorsPick = () => {
  return (
    <div className="container mx-auto my-8 px-4">
      <h2 className="text-2xl font-bold text-center">EDITOR&apos;S PICK</h2>
      <p className="text-center text-gray-600 mb-6">Problems trying to resolve the conflict between</p>

      <div className="flex gap-4">
        {/* Large Box */}
        <div
          className="relative border border-gray-200 rounded-lg overflow-hidden shadow-md"
          style={{ width: '600px', height: '500px' }}
        >
          <Image
            src="/Editor.png" // Replace with your image path
            alt="Large Image"
            width={600}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Small Boxes */}
        <div className="grid grid-cols-2 gap-4">
          {/* Box 1 */}
          <div
            className="relative border border-gray-200 rounded-lg overflow-hidden shadow-md"
            style={{ width: '250px', height: '200px' }}
          >
            <Image
              src="/Editor2.png" // Replace with your image path
              alt="Small Image 1"
              width={250}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Box 2 */}
          <div
            className="relative border border-gray-200 rounded-lg overflow-hidden shadow-md"
            style={{ width: '250px', height: '200px' }}
          >
            <Image
              src="/Editor3.png" // Replace with your image path
              alt="Small Image 2"
              width={250}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Box 3 */}
          <div
            className="relative border border-gray-200 rounded-lg overflow-hidden shadow-md"
            style={{ width: '250px', height: '200px' }}
          >
            <Image
              src="/Editor4.png" // Replace with your image path
              alt="Small Image 3"
              width={250}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Box 4 */}
          <div
            className="relative border border-gray-200 rounded-lg overflow-hidden shadow-md"
            style={{ width: '250px', height: '200px' }}
          >
            <Image
              src="/Editor5.png" // Replace with your image path
              alt="Small pic"
              width={250}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorsPick;
