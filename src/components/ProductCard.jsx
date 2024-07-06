import React from "react";

const ProductCard = () => {
  const items = [
    {
      id: 1,
      title: "Try our fresh Samosa",
      link:
        "https://images.pexels.com/photos/14477873/pexels-photo-14477873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "MO:MO Maniacs",
      link:
        "https://images.pexels.com/photos/5409015/pexels-photo-5409015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "Beat the Heat with our special Lassi",
      link:
        "https://images.pexels.com/photos/4475024/pexels-photo-4475024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="m-8 w-full md:w-2/3">
      <h1 className="font-bold text-4xl uppercase text-center pb-8">Our Specials</h1>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map(({ id, title, link }) => (
            <li key={id} className="flex flex-col rounded-lg overflow-hidden">
              <img
                src={link}
                alt={title}
                className="h-64 w-full object-cover rounded-t-lg"
              />
              <div className="p-4 bg-white flex flex-col justify-between flex-grow">
                <div>
                  <p className="text-xl font-bold mb-2">{title}</p>
                </div>
                <button className="bg-red-800 hover:bg-amber-500 hover:text-black text-white font-medium py-2 px-4 rounded-2xl mt-4 ">
                  Shop Now
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductCard;
