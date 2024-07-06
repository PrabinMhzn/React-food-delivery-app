import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import nameLogo from "../assets/logo.png";
import { MdOutlineAccountCircle, MdOutlineShoppingCart } from "react-icons/md";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, title: "Full Menu", link: "fullmenu" },
    { id: 2, title: "Meal Plans", link: "mealplans" },
    { id: 3, title: "Add Ons", link: "addons" },
    { id: 4, title: "About", link: "about" },
    { id: 5, title: "Contact", link: "contact" },
  ];

  const handleLogoClick = () => {
    setNav(false); // Close mobile menu on logo click
  };

  return (
    <div className="flex items-center justify-between w-full h-24 px-2 text-black bg-white top-0 fixed border-b border-gray-400 z-50">
      {/* Logo and Menu Toggle on Top for Mobile */}
      <div className="flex items-center justify-between w-full md:hidden gap-8">
        <Link to={"/"} className="ml-4 md:ml-10" onClick={handleLogoClick}>
          <img src={nameLogo} alt="" className="w-16 md:w-20 " />
        </Link>
        <div
          className="cursor-pointer pr-4 text-gray-500"
          onClick={() => setNav(!nav)}
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {/* Logo and Desktop Navigation */}
      <div className="hidden md:flex items-center justify-center ml-8">
        <Link to={"/"} className="ml-auto">
          <img src={nameLogo} alt="" className="w-20" />
        </Link>
        <ul className="flex ml-10 space-x-4">
          {links.map(({ id, link, title }) => (
            <li
              key={id}
              className="relative px-4 py-2 cursor-pointer capitalize font-medium text-base text-black hover:scale-110 hover:text-red-600 duration-200"
            >
              <Link to={link}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Icons */}
      <ul className="hidden md:flex items-center space-x-4 ml-auto mr-4">
        <li className="mx-2 md:mx-3">
          <button className="text-2xl text-red-600">
            <IoChatboxEllipsesOutline />
          </button>
        </li>
        <li className="mx-2 md:mx-3">
          <button className="text-2xl ">
            <MdOutlineAccountCircle />
          </button>
        </li>
        <li className="mx-2 md:mx-3">
          <button className="text-2xl text-red-600">
            <MdOutlineShoppingCart />
          </button>
        </li>
      </ul>

      {/* Mobile Menu */}
      {nav && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white text-black z-50 flex flex-col items-center justify-center">
          {/* Logo in Mobile Menu */}
          <Link to={"/"} className="mt-4 mb-8" onClick={handleLogoClick}>
            <img src={nameLogo} alt="" className="w-16 md:w-20" />
          </Link>
          {/* Links in Mobile Menu */}
          <ul className="flex flex-col items-center space-y-4">
            {links.map(({ id, link, title }) => (
              <li key={id}>
                <Link
                  to={link}
                  onClick={() => setNav(false)}
                  className="text-2xl text-black hover:text-red-600"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
