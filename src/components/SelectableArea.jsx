import React, { useState } from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';

const SelectableArea = ({ children }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleToggle = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div
      className={`relative p-2 border-2 rounded-md cursor-pointer w-full sm:w-36 md:w-48 h-24 md:h-32 hover:scale-110 duration-300 ${
        isSelected ? 'border-green-600 bg-gray-50' : 'border-gray-300'
      }`}
      onClick={handleToggle}
    >
      <input
        type="checkbox"
        checked={isSelected}
        onChange={handleToggle}
        className="absolute opacity-0 w-full h-full cursor-pointer"
      />
      <div className="flex justify-center items-center text-lime-500 md:h-8 md:w-8 h-6 w-6 mb-2">
        {isSelected ? <FaRegCheckCircle className="h-8 w-8" /> : null}
      </div>
      {children}
    </div>
  );
};

export default SelectableArea;
