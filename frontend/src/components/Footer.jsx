import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-gray-100 border border-t-2 text-gray-300 py-20">
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
      
     
      {/* Social Links */}
      <div className="flex space-x-6 text-xl">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white transition">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white transition">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white transition">
          <FaInstagram />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-sm text-gray-400 text-center md:text-right">
        &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </div>
  </footer>
  )
}

export default Footer
