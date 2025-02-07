import React from 'react';
import Image from 'next/image';

export default function Shop() {
  const items = [
    { title: "CLOTHS", count: 5, image: "/card-cover-5.jpg" },
    { title: "CLOTHS", count: 5, image: "/card-cover-6.jpg" },
    { title: "CLOTHS", count: 5, image: "/card-cover-7.jpg" },
    { title: "CLOTHS", count: 5, image: "/card-cover-8.jpg" },
    { title: "CLOTHS", count: 5, image: "/card-cover-9.jpg" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-10 pb-2">
      {/* Breadcrumb */}
      <div className="mb-6 text-gray-600">
        <a href="/" className="hover:underline">Home</a> &gt; <span>Shop</span>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">Shop</h1>

      {/* Grid of items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg"
          >
            {/* Background Image */}
            <Image
              src={item.image}
              alt={item.title}
              layout="responsive"
              width={300} // Image width (will scale down as needed)
              height={400} // Image height
              className="rounded-lg"
            />
            {/* Overlay - Always Visible */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center transform">
              <h2 className="text-white text-lg font-bold">{item.title}</h2>
              <p className="text-white">{item.count} Items</p>
            </div>
          </div>
        ))}
      </div>

      {/* Sorting and Filter */}
      <div className="flex flex-wrap justify-between items-center mt-10 space-y-4 sm:space-y-0 sm:flex-row">
        <p className="text-gray-600">Showing all {items.length} results</p>
        <div className="flex items-center space-x-4">
          <button className="p-2 border border-gray-300 rounded">
            <i className="fas fa-th-large"></i>
          </button>
          <button className="p-2 border border-gray-300 rounded">
            <i className="fas fa-list"></i>
          </button>
          <select className="border border-gray-300 p-2 rounded">
            <option>Popularity</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Filter
          </button>
        </div>
      </div>
    </div>
  );
}
