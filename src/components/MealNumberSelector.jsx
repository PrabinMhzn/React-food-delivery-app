import React, { useState } from 'react';

const MealNumberSelector = () => {
  const [selectedCount, setSelectedCount] = useState(null);

  const mealCounts = [1, 2, 6, 8, 12, 14]; // List of meal counts

  const handleSelect = (count) => {
    setSelectedCount(count);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {mealCounts.map((count) => (
        <div
          key={count}
          className={`relative p-4 border-2 rounded-lg cursor-pointer flex items-center justify-center text-center hover:scale-110 duration-300 ${
            selectedCount === count ? 'border-lime-600 bg-gray-50 shadow-lg shadow-lime-50 text-lime-600' : 'border-gray-300'
          }`}
          style={{ minWidth: '8rem', minHeight: '4rem' }} 
          onClick={() => handleSelect(count)}
        >
          <h2 className="font-bold text-lg">{count} Meals</h2>
        </div>
      ))}
    </div>
  );
};

export default MealNumberSelector;
