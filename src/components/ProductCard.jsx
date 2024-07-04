import React from "react";


const ProductCard = () => {
  const items = [
    {
      id: 1,
      title: "Try our fresh Samosa",
      link: "https://images.pexels.com/photos/14477873/pexels-photo-14477873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "MO:MO Maniacs",
      link: "https://images.pexels.com/photos/5409015/pexels-photo-5409015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "Beat the Heat with our special Lassi",
      link: "src/assets/Lassi.jpg",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center">
        <div className="m-8 cursor-pointer w-2/3  ">
      <ul className=" flex gap-8">
        {items.map(({ id, title, link }) => (
          <li key={id} className="">
            <div className="p-8 ">
            <img src={link} alt="" className="rounded-t-3xl shadow-lg shadow-gray-400" />
            <p className="text-3xl font-bold my-8 ">{title}</p>
            <button className="hover:bg-red-700 text-gray-50 bg-red-800 p-2  rounded-xl">
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
