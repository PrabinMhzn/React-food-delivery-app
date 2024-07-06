import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Logo and Address */}
        <div className="text-center md:text-left mb-4">
          <h1 className="font-bold mb-2">
            Fresh <span className="text-red-500">Bite</span>
          </h1>
          <p className="text-xs">
            ABN <br />
            512 Chalkstreet, Lutwyche, Brisbane, QLD 4030
          </p>
        </div>

        {/* Our Ranges */}
        <div className="text-center md:text-left mb-4">
          <h1 className="font-medium text-sm mb-2">Our Ranges</h1>
          <ul className="text-xs">
            <li className="hover:text-red-600 hover:underline">
              <a href="#">Breakfast</a>
            </li>
            <li className="hover:text-red-600 hover:underline">
              <a href="#">Snacks and Treats</a>
            </li>
            <li className="hover:text-red-600 hover:underline">
              <a href="#">Drinks</a>
            </li>
            <li className="hover:text-red-600 hover:underline">
              <a href="#">Indian Foods</a>
            </li>
            <li className="hover:text-red-600 hover:underline">
              <a href="#">Protein Bites</a>
            </li>
            <li className="hover:text-red-600 hover:underline">
              <a href="#">Special Drinks</a>
            </li>
            <li className="hover:text-red-600 hover:underline">
              <a href="#">Low Carbs</a>
            </li>
            <li className="hover:text-red-600 hover:underline">
              <a href="#">Low Calories</a>
            </li>
          </ul>
        </div>

        {/* About Us */}
        <div className="text-center md:text-left mb-4">
          <h1 className="font-medium text-sm mb-2">About Us</h1>
          <ul className="text-xs">
            <li className="hover:text-red-600 hover:underline">
              <a href="/">Home</a>
            </li>
            <li className="hover:text-red-600 hover:underline">
              <a href="/about">About</a>
            </li>
            <li className="hover:text-red-600 hover:underline">
              <a href="#">Meal Plan</a>
            </li>
            <li className="hover:text-red-600 hover:underline">
              <a href="#">Subscribe and Save</a>
            </li>
            <li className="hover:text-red-600 hover:underline">
              <a href="#">FreshBite App</a>
            </li>
            <li className="hover:text-red-600 hover:underline">
              <a href="#">Blog</a>
            </li>
            <li className="hover:text-red-600 hover:underline">
              <a href="#">Career</a>
            </li>
            <li className="hover:text-red-600 hover:underline">
              <a href="#">Student Discount</a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="text-center md:text-left mb-4">
          <h1 className="font-medium text-sm mb-2">Support</h1>
          <ul className="text-xs">
            <li className="hover:text-red-600 hover:underline">
              
              <a href="#">Contact Us</a>
            </li>
            <li className="hover:text-red-600 hover:underline">
             
              <a href="#">FAQs</a>
            </li>
            <li className="hover:text-red-600 hover:underline">
             
              <a href="#">delivery</a>
            </li>
            <li className="hover:text-red-600 hover:underline"> 
             
              <a href="#">Stocklist</a>
            </li>
            <li className="hover:text-red-600 hover:underline">
             
              <a href="#">Disclaimer</a>
            </li>
            <li className="hover:text-red-600 hover:underline">
             
              <a href="#">Privacy</a>
            </li>
            <li className="hover:text-red-600 hover:underline">
             
              <a href="#">Terms</a>
            </li>
            <li className="hover:text-red-600 hover:underline">
              
              <a href="#">Corporate Program Enquiry</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-4 max-w-7xl mx-auto px-4 text-xs text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
          {/* Logos of payment methods */}
          <div className="flex gap-4 mb-4 md:mb-0">
            <img
              src="https://seeklogo.com/images/P/paypal-logo-484B6FE744-seeklogo.com.png"
              alt="PayPal"
              className="h-4"
            />
            <img
              src="https://seeklogo.com/images/V/VISA-logo-A32D589D31-seeklogo.com.png"
              alt="Visa"
              className="h-4"
            />
            <img
              src="https://seeklogo.com/images/M/Master_Card-logo-027CB51F96-seeklogo.com.png"
              alt="MasterCard"
              className="h-4"
            />
            <img
              src="https://seeklogo.com/images/Z/zip-co-limited-logo-1C84A10335-seeklogo.com.png"
              alt="Zip Co Limited"
              className="h-4"
            />
          </div>

          {/* Copyright text */}
          <div className="text-gray-500 text-center md:text-left">
            &copy; 2019-2024 Freshbite Pty. Ltd. All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
