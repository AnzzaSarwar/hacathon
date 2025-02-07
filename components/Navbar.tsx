import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="bg-green-800 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-3 px-4 space-y-4 md:space-y-0">
        {/* Contact Information */}
        <div className="flex flex-col md:flex-row items-center md:space-x-6 text-center md:text-left">
          <span className="text-sm">(225) 555-0118</span>
          <span className="text-sm md:ml-4">michelle.rivera@example.com</span>
        </div>

        {/* Centered Message */}
        <span className="text-sm font-bold text-center md:text-left">
          Follow Us and get a chance to win 80% discount
        </span>

        {/* Social Media Links */}
        <div className="flex justify-center items-center space-x-4">
          <span className="text-sm hidden sm:inline">Follow Us :</span>
          <a href="#" className="hover:text-gray-300 text-2xl">
            <AiFillInstagram />
          </a>
          <a href="#" className="hover:text-gray-300 text-2xl">
            <FaYoutube />
          </a>
          <a href="#" className="hover:text-gray-300 text-2xl">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-gray-300 text-2xl">
            <FaTwitter />
          </a>
        </div>
      </div>
    </header>
  );
}
