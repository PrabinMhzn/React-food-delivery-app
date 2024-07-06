import React from "react";

const Sidebar = () => {
  return (
    <div className="hidden md:flex flex-col top-36 mt-12 h-full">
      <div className="text-black w-32 p-4">
        <h2 className="text-xl font-bold mb-4">All Menu</h2>
        <ul className="font-medium">
          <li className="mb-1 text-sm">
            <a href="#" className="hover:text-red-600">
              All Meals
            </a>
          </li>
          <li className="mb-2 text-sm">
            <a href="#" className="hover:text-red-600">
              Meal Bundles
            </a>
          </li>
          <li className="mb-2 text-sm">
            <a href="#" className="hover:text-red-600">
              High Protein
            </a>
          </li>
          <li className="mb-2 text-sm">
            <a href="#" className="hover:text-red-600">
              Breakfast
            </a>
          </li>
          <li className="mb-2 text-sm">
            <a href="#" className="hover:text-red-600">
              Addons
            </a>
          </li>
        </ul>
      </div>

      <div className="text-black w-32 p-4">
        <h2 className="text-xl font-bold mb-4">Filter & Sort</h2>
        <ul>
          <li className="mb-2 text-xs">
            <a href="#" className="hover:text-gray-400">
              Sort
            </a>
          </li>
          <li className="mb-2 text-xs">
            <a href="#" className="hover:text-gray-400">
              Preferences
            </a>
          </li>
          <li className="mb-2 text-xs">
            <a href="#" className="hover:text-gray-400">
              Dietary
            </a>
          </li>
          <li className="mb-2 text-xs">
            <a href="#" className="hover:text-gray-400">
              Calories
            </a>
          </li>
          <li className="mb-2 text-xs">
            <a href="#" className="hover:text-gray-400">
              Carbs
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
