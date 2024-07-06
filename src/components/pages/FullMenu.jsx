import React, { useState, useEffect } from "react";
import FullMenuToggle from "../FullMenuToggle"; // Adjust the path based on your project structure
import Sidebar from "../Sidebar"; // Adjust the path based on your project structure

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
        // Extracting unique categories from the data and filtering out duplicates
        const uniqueCategories = [...new Set(data.flatMap((item) => item.categories))];
        console.log("Unique categories:", uniqueCategories);
        setCategories(uniqueCategories);
        setItems(data); // Storing all items
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Filter items based on the selected category
  const filteredItems = items.filter((item) =>
    item.categories ? item.categories.includes(selectedCategory) : false
  );

  return (
    <div className="mt-20 mx-4 sm:mx-8 flex flex-col md:flex-row">
      <Sidebar />

      <div className="flex flex-col flex-1 mx-4 sm:mx-8">
        <div className="mx-auto sm:ml-32 flex-col justify-center items-center p-8 rounded-t-3xl">
          <FullMenuToggle
            setSelectedCategory={setSelectedCategory}
            tabs={categories}
          />

          <div className="flex flex-col bg-gradient-to-b from-gray-300 via-gray-100 to-white rounded-xl p-8 my-4 sm:my-8">
            <span className="flex items-center py-2 px-4">
              <h1 className="text-4xl font-bold">{selectedCategory}</h1>
              <p className="ml-2 font-medium">({filteredItems.length})</p>
            </span>
            <p className="text-center sm:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              consequuntur sit, cum ducimus autem facere.
            </p>
          </div>

          {/* Display items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto ">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <div
                  key={index}
                  className="border p-4 rounded-lg shadow flex flex-col hover:shadow-xl hover:scale-105 transition duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <div className="flex flex-col flex-grow mb-4">
                    <h2 className="mt-2 font-bold text-lg">{item.name}</h2>
                    <div className="flex gap-4 mt-2">
                      <h3 className="text-gray-600 mr-8">{item.price}</h3>
                      <h3 className="text-gray-600">{item.weight}</h3>
                    </div>
                    
                  </div>
                  <button className="bg-red-500 rounded-xl text-white text-sm px-4 py-2">
                    Add to cart
                  </button>
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

export default FullMenu;
