import React from "react";
import Image from "next/image";

export default function Shop() {
  const items = [
    {
      title: "Graphic Design",
      price: "$10.00",
      oldPrice: "$12.00",
      image: "/product-cover-5.png",
      colors: ["#ff0000", "#00ff00", "#0000ff", "#ffff00"],
    },
    {
      title: "Graphic Design",
      price: "$10.00",
      oldPrice: "$12.00",
      image: "/product-cover-5 (1).png",
      colors: ["#ff0000", "#00ff00", "#0000ff"],
    },
    {
      title: "Graphic Design",
      price: "$10.00",
      oldPrice: "$12.00",
      image: "/product-cover-5 (2).png",
      colors: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"],
    },
    {
      title: "Graphic Design",
      price: "$10.00",
      oldPrice: "$12.00",
      image: "/product-cover-5 (3).png",
      colors: ["#ff0000", "#00ff00"],
    },
    {
      title: "Graphic Design",
      price: "$10.00",
      oldPrice: "$12.00",
      image: "/product-cover-5 (4).png",
      colors: ["#00ff00", "#0000ff"],
    },
    {
      title: "Graphic Design",
      price: "$10.00",
      oldPrice: "$12.00",
      image: "/product-cover-5 (5).png",
      colors: ["#ff0000", "#00ff00"],
    },
    {
      title: "Graphic Design",
      price: "$10.00",
      oldPrice: "$12.00",
      image: "/product-cover-5 (6).png",
      colors: ["#ff0000", "#0000ff", "#ffff00"],
    },
    {
      title: "Graphic Design",
      price: "$10.00",
      oldPrice: "$12.00",
      image: "/product-cover-5 (7).png",
      colors: ["#ff0000", "#00ff00", "#ff00ff"],
    },
  ];

  return (
    <>
      {/* Headings */}
      <div className="text-center mb-8">
        <h3 className="text-lg font-medium">Featured Products</h3>
        <h1 className="text-2xl font-bold mt-2">BestSeller Products</h1>
        <p className="text-gray-600 mt-2">
          Problem trying to resolve the conflict between
        </p>
      </div>

      {/* Products Grid (All 8 Products Together) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-16">
        {items.map((item, index) => (
          <div
            key={index}
            className="rounded-lg text-center w-[238px] h-[615px]"
          >
            {/* Product Image */}
            <Image
              src={item.image}
              alt={item.title}
              className="w-[242px] h-[400px] mb-4"
              width={242}
              height={400}
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
            {/* Add to Cart Button */}
            <button className="mt-4 w-full bg-blue-950 text-white hover:bg-blue-300 hover:text-blue-900 p-2 rounded-md">
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
