"use client";
import { useState } from "react";
import Image from "next/image"; // Import Image from next/image

export default function Shop() {
  const items = [
    {
      title: "Graphic Design",
      price: "$10.00",
      oldPrice: "$12.00",
      image: "/product-cover-5 (17).png",
      colors: ["#ff0000", "#00ff00", "#0000ff", "#ffff00"],
    },
    {
      title: "Graphic Design",
      price: "$10.00",
      oldPrice: "$12.00",
      image: "/product-cover-5 (16).png",
      colors: ["#ff0000", "#00ff00", "#0000ff"],
    },
    {
      title: "Graphic Design",
      price: "$10.00",
      oldPrice: "$12.00",
      image: "/fashion.jpg",
      colors: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"],
    },
    {
      title: "Graphic Design",
      price: "$10.00",
      oldPrice: "$12.00",
      image: "/product-cover-5 (18).png",
      colors: ["#ff0000", "#00ff00"],
    },
    {
      title: "Graphic Design",
      price: "$10.00",
      oldPrice: "$12.00",
      image: "/product-cover-5 (8).png",
      colors: ["#00ff00", "#0000ff"],
    },
    {
      title: "Graphic Design",
      price: "$10.00",
      oldPrice: "$12.00",
      image: "/product-cover-5 (9).png",
      colors: ["#ff0000", "#00ff00"],
    },
    {
      title: "Graphic Design",
      price: "$10.00",
      oldPrice: "$12.00",
      image: "/product-cover-5 (10).png",
      colors: ["#ff0000", "#0000ff", "#ffff00"],
    },
    {
      title: "Graphic Design",
      price: "$10.00",
      oldPrice: "$12.00",
      image: "/product-cover-5 (11).png",
      colors: ["#ff0000", "#00ff00", "#ff00ff"],
    },
    {
      title: "Graphic Design",
      price: "$10.00",
      oldPrice: "$12.00",
      image: "/product-cover-5 (12).png",
      colors: ["#ff0000", "#00ff00"],
    },
    {
      title: "Graphic Design",
      price: "$10.00",
      oldPrice: "$12.00",
      image: "/product-cover-5 (13).png",
      colors: ["#ff0000", "#00ff00"],
    },
    {
      title: "Graphic Design",
      price: "$10.00",
      oldPrice: "$12.00",
      image: "/product-cover-5 (14).png",
      colors: ["#ff0000", "#00ff00"],
    },
    {
      title: "Graphic Design",
      price: "$10.00",
      oldPrice: "$12.00",
      image: "/product-cover-5 (15).png",
      colors: ["#ff0000", "#00ff00"],
    },
  ];

  // Pagination Logic
  const itemsPerPage = 12; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const paginatedItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      {/* Products Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-4 p-4">
        {paginatedItems.map((item, index) => (
          <div
            key={index}
            className="rounded-lg text-center w-[240px] h-[488px] transition-transform duration-300 hover:scale-105"
          >
            {/* Product Image */}
            <Image
              src={item.image}
              alt={item.title}
              width={240}  // Width of the image
              height={300} // Height of the image
              className="w-full h-[300px] mb-4 object-contain"
            />
            {/* Product Info */}
            <h2 className="text-lg font-bold mb-2">{item.title}</h2>
            <h3 className="text-xl font-semibold mb-5">English Development</h3>

            <p className="text-gray-500 text-sm mb-2">
              <span className="line-through">{item.oldPrice}</span>{" "}
              <span className="text-black font-bold">{item.price}</span>
            </p>
            {/* Color Options */}
            <div className="flex justify-center space-x-2 mb-4">
              {item.colors.map((color, idx) => (
                <span
                  key={idx}
                  style={{ backgroundColor: color }}
                  className="w-4 h-4 rounded-full"
                ></span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center items-center mb-10">
        <button
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 mx-1 border ${
            currentPage === 1 ? "text-blue-700 " : "text-blue-500"
          }`}
        >
          First
        </button>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 mx-1 border ${
            currentPage === 1 ? "text-blue-700" : "text-blue-500"
          }`}
        >
          1
        </button>
        {[...Array(totalPages)].map((_, pageIndex) => (
          <button
            key={pageIndex}
            onClick={() => handlePageChange(pageIndex + 1)}
            className={`px-4 py-2 mx-1 border ${
              currentPage === pageIndex + 1
                ? "bg-blue-500 text-white"
                : "text-blue-500"
            }`}
          >
            {pageIndex + 2}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 mx-1 border ${
            currentPage === totalPages ? "text-blue-700" : "text-blue-500"
          }`}
        >
          3
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 border rounded ${
            currentPage === totalPages
              ? "text-blue-600 hover:bg-blue-500 hover:text-white "
              : "text-blue-500 hover:bg-gray-100"
          }`}
        >
          <a href="/sellProduct">Next</a>
        </button>
      </div>
    </>
  );
}
