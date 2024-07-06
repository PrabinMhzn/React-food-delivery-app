import React, { useEffect, useState } from 'react';
import Card from '../Card'; // Adjust the path based on your project structure

const AddOns = () => {
  const [drinks, setDrinks] = useState([]);
  const [snacks, setSnacks] = useState([]);
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const drinksResponse = await fetch('/data/drinks.json');
        const snacksResponse = await fetch('/data/snacks.json');
        const dessertsResponse = await fetch('/data/desserts.json');

        if (!drinksResponse.ok) throw new Error(`Failed to fetch drinks data: ${drinksResponse.status}`);
        if (!snacksResponse.ok) throw new Error(`Failed to fetch snacks data: ${snacksResponse.status}`);
        if (!dessertsResponse.ok) throw new Error(`Failed to fetch desserts data: ${dessertsResponse.status}`);

        const drinksData = await drinksResponse.json();
        const snacksData = await snacksResponse.json();
        const dessertsData = await dessertsResponse.json();

        setDrinks(drinksData);
        setSnacks(snacksData);
        setDesserts(dessertsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='flex p-8'>
      <div className="flex-col w-2/3 mx-auto py-8 mt-24 bg-gray-50 rounded-3xl">
        {/* Drinks Section */}
        <section className="p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 mx-8 border-2 border-red-700 rounded-3xl p-4">Drinks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            {drinks.map((drink) => (
              <Card
                key={drink.id}
                title={drink.title}
                description={drink.description}
                price={drink.price}
                link={drink.link}
              />
            ))}
          </div>
        </section>

        {/* Snacks Section */}
        <section className="p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 mx-8 border-2 border-red-700 rounded-3xl p-4">Snacks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            {snacks.map((snack) => (
              <Card
                key={snack.id}
                title={snack.title}
                description={snack.description}
                price={snack.price}
                link={snack.link}
              />
            ))}
          </div>
        </section>

        {/* Desserts Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 mx-8 border-2 border-red-700 rounded-3xl p-4">Desserts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            {desserts.map((dessert) => (
              <Card
                key={dessert.id}
                title={dessert.title}
                description={dessert.description}
                price={dessert.price}
                link={dessert.link}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddOns;
