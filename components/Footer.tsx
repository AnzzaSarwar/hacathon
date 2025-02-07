import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4 sm:mb-0">Bandage</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-500">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="text-gray-600 hover:text-pink-500">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-400">
              <FaTwitter size={18} />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Company Info</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">We Are Hiring</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Refund Policy</a></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Features</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#">User Analytics</a></li>
              <li><a href="#">Live Chat</a></li>
              <li><a href="#">Unlimited Support</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#">iOS & Android</a></li>
              <li><a href="#">Watch a Demo</a></li>
              <li><a href="#">Customers</a></li>
              <li><a href="#">API</a></li>
            </ul>
          </div>
        </div>

        {/* Get In Touch */}
        <div className="lg:flex justify-between mt-8">
          <div className="lg:w-1/2">
            <h3 className="font-semibold text-gray-800 mb-4">Get In Touch</h3>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your Email"
                className="w-[50] mr-5 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-[30] bg-blue-600 text-white py-2 px-3 rounded-md hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-gray-500 text-sm mt-8">
          Made with Love by Finland. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
