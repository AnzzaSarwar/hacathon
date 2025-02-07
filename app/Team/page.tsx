import React from 'react';
import Editorpick2 from "@/components/Editorpick2"
import Ourteam2 from "@/components/Ourteam2";
import Freetrial from "@/components/Freetrial";


export default function Page() {
  return (
    <>
      {/* Navigation and Intro */}
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-2xl font-bold">Bendage</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a href="/" className="mr-5 hover:text-gray-900">
            Home
          </a>
          <a href="/Team" className="mr-5 hover:text-gray-900">
            Team
          </a>
          <a href="/pricing" className="mr-5 hover:text-gray-900">
            Pricing
          </a>
          <a href="/product" className="mr-5 hover:text-gray-900">
            Contact
          </a>
        </nav>
        <a href="" className="mr-10 text-blue-600 text-md">
          Log In
        </a>
        <button className="inline-flex text-white bg-blue-600 border-0 py-2 px-3 w-[230px] h-[48px] text-center hover:bg-blue-900 rounded text-base mt-4 md:mt-0">
          <span className="text-center font-semibold ml-3">Become a Member</span>
        </button>
      </div>

      {/* Heading Section */}
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h3 className="text-md mb-4 text-gray-600 font-semibold">WHAT WE DO</h3>
          <h1 className="text-4xl font-bold title-font mb-4 text-gray-900">
            Innovation Tailored for You
          </h1>
          <div className="flex justify-center mt-4 items-center space-x-2">
            <a href="/" className="text-black hover:underline text-xl font-semibold">
              Home
            </a>
            <span className="text-gray-600 text-2xl">{'>'}</span>
            <a className="text-gray-700 font-semibold text-xl hover:underline">Team</a>
          </div>
        </div>
      </div>
      <Editorpick2 />
      <Ourteam2 />
      <Freetrial />

     
    </>
  );
}
