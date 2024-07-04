import React from "react";
import Feedbacks from "../Feedbacks";
import ProductCard from "../ProductCard";

const Home = () => {
  return (
    <div className=" flex flex-col justify-center items-center w-full h-full mt-24">
      {/* hero section  */}
      <div className=" flex items-center h-full bg-yellow-500 pb-10 gap-8 w-full ">
        <div className="w-1/3 overflow-hidden ">
          <img
            src="src/assets/hero.png"
            alt=""
            className=" top-36 left-0 object-cover "
          />
        </div>
        <div className="my-20  flex flex-col items-center">
          <div className="text-red-600">
            <h1 className="text-9xl font-black ">20% 0FF</h1>
            <h2 className="text-6xl font-semibold">on your first order</h2>
          </div>

          <p className="font-medium text-red-900 m-8 text-xl">
            Get Healthy ready-made meals delivered with upto $200 off your first
            5 boxes
          </p>

          <button className="cursor-pointer flex items-center text-white bg-red-950 hover:bg-red-500 active:border rounded-2xl duration-100 p-1 px-4">
            Get Offer
          </button>

          <Feedbacks />
        </div>
      </div>

      <ProductCard  />
      <div className=" flex-col w-2/3 h-full  mt-20 mb-10">
        <div
          className="flex flex-col items-center h-auto w-auto pb-10  justify-center"
          style={{
            backgroundImage: `url("https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="p-8 pt-8 w-2/3 min-h-80 pb-8 m-8">
            <h1 className="text-4xl font-bold text-red-600 w-60 box-border border-white border-2 rounded-br-3xl bg-white bg-opacity-25">
              <h2 className="font-medium text-gray-800 text-xl w-60 ">
                Choose from
              </h2>
              100+ Meals, Snacks, Soups & Drinks
            </h1>
          </div>
          <span className="flex w-2/3 gap-4 items-start ">
            <button className="bg-white rounded-full px-2 py-1 border-2 border-red-800 shadow-md shadow-amber-700 font-medium hover:bg-opacity-30">
              Meals
            </button>
            <button className="bg-white rounded-full px-2 py-1 border-2 border-red-800 shadow-md shadow-amber-700 font-medium hover:bg-opacity-30">
              Snacks
            </button>
            <button className="bg-white rounded-full px-2 py-1 border-2 border-red-800 shadow-md shadow-amber-700 font-medium hover:bg-opacity-30">
              Drinks
            </button>
            <button className="bg-white rounded-full px-2 py-1 border-2 border-red-800 shadow-md shadow-amber-700 font-medium hover:bg-opacity-30">
              Bundle
            </button>
            <button className="bg-white rounded-full px-2 py-1 border-2 border-red-800 shadow-md shadow-amber-700 font-medium hover:bg-opacity-30">
              Full Menu
            </button>
          </span>
        </div>
      </div>
      {/* delivery info container */}
      <div className="w-2/3 flex m-8 rounded-3xl gap-8 ">
        <div className="w-1/2 flex flex-col justify-center items-center  bg-rose-50  rounded-3xl">
          <div className="w-full m-4 ">
            <div className="flex items-center justify-center gap-8 m-2">
              <img
                src="src/components/pages/images/trucklogo.png"
                alt=""
                className="w-auto h-10"
              />
              <button className="bg-rose-700 text-white  rounded-full px-2 py-1">
                Check if we deliver
              </button>
            </div>
          </div>
          <div className="bg-white m-4 rounded-xl p-4 justify-center">
            <h1 className="font-medium text-emerald-500">
              #1 Fresh Cooked Food Provider{" "}
              <h1 className="text-black">5 Years of Quality food Service</h1>
            </h1>
          </div>
        </div>
        <div className="w-1/2 h-64 flex justify-center items-center rounded-3xl overflow-hidden ">
          <img
            src="https://images.pexels.com/photos/4392876/pexels-photo-4392876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-full "
          />
        </div>
      </div>
      {/* customers Review Section */}

      <div className="w-2/3 flex-col m-8  gap-8 ">
        <h1 className="text-4xl font-bold text-black capitalize border-2 my-4">
          Customer Stories
        </h1>
        <div className="flex gap-8">
          <button className="box-border border-2 border-amber-700 rounded-full px-2 py-1">
            Discover Stories
          </button>
          <button className="box-border border-2 border-amber-700 rounded-full px-2 py-1">
            Read reviews
          </button>
        </div>
        <div>cards</div>
      </div>
    </div>
  );
};

export default Home;
