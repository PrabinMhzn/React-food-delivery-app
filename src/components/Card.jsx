import React from 'react';

const Card = ({ title, link, description, price }) => {
  return (
    <div className="flex flex-col rounded-lg overflow-hidden border shadow hover:shadow-xl transition duration-300">
      <div className="relative">
        <img
          src={link}
          alt={title}
          className="h-64 w-full object-cover rounded-t-lg"
        />
      </div>
      <div className="p-4 bg-white flex flex-col justify-between flex-grow">
        <div>
          <p className="text-xl font-bold mb-2">{title}</p>
          <p className="text-gray-600">{description}</p>
          <p className="text-gray-600 font-bold">Price: ${price.toFixed(2)}</p>
        </div>
        <button className="bg-red-600 hover:bg-amber-500 hover:text-black text-white font-medium py-2 px-4 rounded-2xl mt-4">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
