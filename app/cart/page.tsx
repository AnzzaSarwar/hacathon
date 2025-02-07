"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

interface Product {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
}

const CartPage = () => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    }
  }, []);

  const removeFromCart = (id: string) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <>
      <Navbar />
      <Header />
      <div className="p-4">
        <h2 className="text-2xl font-bold text-center">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-center text-gray-500 mt-4">Your cart is empty.</p>
        ) : (
          <div className="mt-4">
            {cart.map((item) => (
              <div key={item._id} className="flex justify-between items-center bg-white p-4 my-2 shadow-md rounded-md">
                <div className="flex items-center">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={50}
                    height={50}
                    className="rounded-md"
                    priority
                    unoptimized={true}
                  />
                  <div>
                    <p className="text-lg font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-500">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-500 hover:text-red-700"
                  aria-label={`Remove ${item.title} from cart`}
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="flex justify-between mt-4">
              <button
                onClick={clearCart}
                className="bg-red-500 text-white py-2 px-4 rounded-md"
              >
                Clear Cart
              </button>
              <Link href="/checkout">
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded-md"
                  disabled={cart.length === 0} // Disable if cart is empty
                >
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
