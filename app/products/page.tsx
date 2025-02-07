"use client"; // Client-side rendering enabled

import React, { useEffect, useState } from "react";
import { createClient } from "next-sanity";
import Image from "next/image";
import Link from "next/link"; // Next.js Link component for routing

// Sanity client initialization
const client = createClient({
  projectId: "9enabbee",
  dataset: "production",
  apiVersion: "2025-01-13",
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
});

interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  tags: string[];
}

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetching products from Sanity
  const fetchProducts = async () => {
    try {
      const query = `
        *[_type == "product"] {
          _id,
          title,
          price,
          description,
          discountPercentage,
          "imageUrl": productImage.asset->url,
          tags
        }
      `;
      const data = await client.fetch(query);
      setProducts(data);
      console.log("Fetched products:", data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  // Adding products to cart
  const addToCart = (product: Product) => {
    const newCart = [...cart, product];
    setCart(newCart);

    // Save cart to localStorage (check for browser before using localStorage)
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(newCart));
    }

    // Show alert to user
    alert(`${product.title} has been added to your cart!`);
  };

  // Truncate long descriptions for better display
  const truncateDescription = (description: string) => {
    return description.length > 100 ? description.substring(0, 100) + "..." : description;
  };

  // Fetch products once the component mounts
  useEffect(() => {
    fetchProducts();

    // Load cart data from localStorage if exists
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    }
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-center font-bold text-3xl text-black mt-4 mb-4">Products</h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product._id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-md"
                priority
                unoptimized={true}
              />
              <div className="mt-4">
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-gray-800 mt-2 text-sm">{truncateDescription(product.description)}</p>

                <div className="flex justify-between items-center mt-4">
                  <div>
                    <p className="text-gray-800 font-semibold">
                      ${product.price ? product.price.toFixed(2) : "N/A"}
                    </p>
                    {product.discountPercentage > 0 && <p className="text-sm text-sky-900">{product.discountPercentage}% OFF</p>}
                  </div>
                </div>

                <div className="mt-2 flex flex-wrap gap-2">
                  {product.tags?.map((tag, index) => (
                    <span key={index} className="text-xs bg-gray-400 text-black rounded-full px-2 py-1">{tag}</span>
                  ))}
                </div>

                <button
                  className="mt-4 w-full bg-blue-950 text-white hover:bg-blue-500 hover:text-white p-2 rounded-md"
                  onClick={() => addToCart(product)} // Add to cart on click
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 bg-slate-100 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-bold text-black">Cart Summary</h2>
        {cart.length > 0 ? (
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md">
                <div>
                  <p className="font-medium text-black">{item.title}</p>

                  <p className="text-gray-800 text-sm font-semibold">${item.price ? item.price.toFixed(2) : "N/A"}</p>
                </div>
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="rounded-md"
                  unoptimized={true}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-800 text-sm font-semibold">Your cart is empty</p>
        )}

        {/* Go to Checkout Button */}
        {cart.length > 0 && (
          <Link href="/cart">
            <button className="mt-6 w-full bg-green-500 text-white hover:bg-green-600 p-2 rounded-md">
              Go to Checkout
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProductCards;
