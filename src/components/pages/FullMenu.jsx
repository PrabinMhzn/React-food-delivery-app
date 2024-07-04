import React, { useState, useEffect } from "react";
import { FullMenuToogle } from "../FullMenuToggle";
import Sidebar from '/src/components/Sidebar'


const FullMenu = () => {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("New");

  useEffect(() => {
    // Fetching data from public/data.json
    fetch("/data.json")
      .then((response) => {
        console.log("Response:", response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data fetched:", data);
        // Extracting unique categories from the data
        const allCategories = Array.from(
          new Set(data.flatMap((item) => item.categories))
        );
        console.log("All categories:", allCategories);
        setCategories(allCategories);
        setItems(data); // Storing all items
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Filter items based on the selected category
  const filteredItems = items.filter((item) =>
    item.categories.includes(selectedCategory)
  );

  return (
    <div className="mt-40 mx-8 flex pb-8">
      <Sidebar/>
      <div className="flex mx-8 ">
        <div className="ml-32  flex-col justify-center items-center bg-gradient-to-b from-gray-300 via-gray-100 to-white  p-8 rounded-t-3xl">
          <FullMenuToogle setSelectedCategory={setSelectedCategory} />

          {/* Display items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <div
                  key={index}
                  className="border p-4 rounded-lg shadow flex flex-col"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <div className="flex flex-col flex-grow mb-4">
                    <h2 className="mt-2 font-bold text-lg">{item.name}</h2>
                    <div className="flex gap-8 mt-2"> <h3 className="text-gray-600 ">{item.price}</h3>
                    <h3 className="text-gray-600">{item.weight}</h3></div>
                     
                    <p className="text-gray-600 mt-2">
                       {item.categories.join(", ")}
                    </p>
                    
                  </div>
                  <button className="bg-red-500 rounded-xl text-white">Add to cart</button>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600">No items found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


const CategoryTab = ({ children }) => {
  // Each category tab
  return (
    <div className="cursor-pointer px-3 py-1.5 text-xs text-gray-500 mix-blend-difference md:px-5 md:py-3 md:text-base">
      {children}
    </div>
  );
};

export default FullMenu;
