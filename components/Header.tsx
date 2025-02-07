"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { IoMenu } from "react-icons/io5";

function Header() {
  // State to manage mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="container mx-auto flex justify-between items-center py-4 px-4 relative">
      {/* Brand Logo */}
      <div className="font-bold ml-6 text-3xl">Bandage</div>

      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-2xl"
        >
          {/* Hamburger Icon for mobile menu */}
          <IoMenu />
        </button>
      </div>

      {/* Navigation Links */}
      <nav
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:flex md:space-x-10 font-semibold text-xl text-blue-950 absolute md:static left-0 top-full md:top-auto w-full md:w-auto bg-white md:bg-transparent md:flex-row flex-col items-center md:space-y-0 space-y-4 p-4 md:p-0 z-10`}
      >
        <Link href="/" className="hover:text-blue-700 mb-2 md:mb-0 md:ml-5 sm:ml-3">
          Home
        </Link>
        <Link href="/shop" className="hover:text-blue-700 mb-2 md:mb-0 md:ml-5 sm:ml-3">
          Shop
        </Link>
        <Link href="/about" className="hover:text-blue-700 mb-2 md:mb-0 md:ml-5 sm:ml-3">
          About
        </Link>
        <Link href="/blog" className="hover:text-blue-700 mb-2 md:mb-0 md:ml-5 sm:ml-3">
          Blog
        </Link>
        <Link href="/contact" className="hover:text-blue-700 mb-2 md:mb-0 md:ml-5 sm:ml-3">
          Contact
        </Link>
        <Link href="/pages" className="hover:text-blue-700 mb-2 md:mb-0 md:ml-5 sm:ml-3">
          Pages
        </Link>
      </nav>

      {/* Right side (Search, Cart, Auth Buttons) */}
      <div className="flex space-x-4 items-center md:space-x-6">
        <div className="auth-buttons">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <Link href="#" className="hover:text-gray-900 text-2xl text-blue-600">
          <CiSearch />
        </Link>
        <Link href="/cart" className="hover:text-gray-900 text-2xl text-blue-600">
          <FaShoppingCart />
        </Link>
      </div>
    </div>
  );
}

export default Header;
