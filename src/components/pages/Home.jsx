import React from "react";
import Feedbacks from "../Feedbacks";
import ProductCard from "../ProductCard";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-24">
      {/* Hero section */}
      <div
        className="flex flex-col md:flex-row items-center justify-center bg-cover bg-center bg-no-repeat bg-yellow-500 pb-10 w-full"
        style={{
          backgroundImage: `url("src/assets/hero.jpg")`,
        }}
      >
        <div className="w-1/2 h-full"></div>
        <div className="my-20 flex flex-col items-center md:items-start md:ml-10">
          <div className="text-red-600">
            <h1 className="text-6xl md:text-9xl font-black">20% OFF</h1>
            <h2 className="text-4xl md:text-6xl font-semibold">
              on your first order
            </h2>
          </div>
          <p className="font-medium text-red-900 mt-8 text-center md:text-left md:max-w-md">
            Get healthy ready-made meals delivered with up to $200 off your
            first 5 boxes
          </p>
          <button className="cursor-pointer flex items-center justify-center text-white bg-red-950 hover:bg-red-500 active:border rounded-2xl duration-100 mt-8 px-6 py-3">
            Get Offer
          </button>
          <Feedbacks />
        </div>
      </div>

      {/* How it works */}
      <div className="w-full md:w-2/3 flex flex-col justify-center items-center m-8">
        <h1 className="text-4xl font-bold text-black border-2 mb-8 text-center uppercase">
          How it works
        </h1>
        <div className="flex justify-center gap-8">
          <div className="w-full h-auto">
            <img
              src="src/components/pages/images/pickplanfb.jpg"
              alt=""
              className="rounded-2xl w-40 h-40"
            />
            <h1 className="font-bold text-lg text-center">Pick A Plan</h1>
            <p className="w-40 text-center text-sm">
              Select from a range of plans that cater to different health,
              fitness and nutrition goals.
            </p>
          </div>
          <div className="w-full h-auto">
            <img
              src="src/components/pages/images/choosemeal.jpg"
              alt=""
              className="rounded-2xl w-40 h-40"
            />
            <h1 className="font-bold text-lg text-center">Choose Your Meals</h1>
            <p className="w-40 text-center text-sm">
              Every week, choose from 60 meals, including exciting new meals and
              all-time favourites.
            </p>
          </div>
          <div className="w-full h-auto">
            <img
              src="src/components/pages/images/deliver.jpg"
              alt=""
              className="rounded-2xl w-40 h-40"
            />
            <h1 className="font-bold text-lg text-center">Delivered to You</h1>
            <p className="w-40 text-center text-sm">
              We deliver your order to your door fresh, at a time that suits
              you.
            </p>
          </div>
          <div className="w-full h-auto">
            <img
              src="src/components/pages/images/heateat.jpg"
              alt=""
              className="rounded-2xl w-40 h-40"
            />
            <h1 className="font-bold text-lg text-center">Heat and Eat</h1>
            <p className="w-40 text-center text-sm">
              A healthy and tasty meal in minutes. No prep or cleaning required
              simply heat, eat & enjoy.
            </p>
          </div>
        </div>
      </div>

      {/* Product card section */}
      <ProductCard />

      {/* Categories section */}
      <div className="w-full md:w-2/3 mt-20 mb-10">
        <div
          className="flex flex-col items-center justify-center h-auto w-full pb-10"
          style={{
            backgroundImage: `url("https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="p-8 pt-8 w-full md:w-2/3 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-red-600 text-center md:text-left mb-4">
              <span className="block md:inline-block w-60 bg-white bg-opacity-25 p-4 rounded-br-3xl">
                <span className="font-medium text-gray-800 text-xl block">
                  Choose from
                </span>
                100+ Meals, Snacks, Soups & Drinks
              </span>
            </h1>
          </div>
          <div className="flex w-full md:w-2/3 gap-4 items-start justify-center">
            <button className="bg-white rounded-full px-4 py-2 border-2 border-red-800 shadow-md shadow-amber-700 font-medium hover:bg-opacity-30">
              Meals
            </button>
            <button className="bg-white rounded-full px-4 py-2 border-2 border-red-800 shadow-md shadow-amber-700 font-medium hover:bg-opacity-30">
              Snacks
            </button>
            <button className="bg-white rounded-full px-4 py-2 border-2 border-red-800 shadow-md shadow-amber-700 font-medium hover:bg-opacity-30">
              Drinks
            </button>
            <button className="bg-white rounded-full px-4 py-2 border-2 border-red-800 shadow-md shadow-amber-700 font-medium hover:bg-opacity-30">
              Bundle
            </button>
            <button className="bg-white rounded-full px-4 py-2 border-2 border-red-800 shadow-md shadow-amber-700 font-medium hover:bg-opacity-30">
              Full Menu
            </button>
          </div>
        </div>
      </div>

      {/* Delivery info container */}
      <div className="w-full md:w-2/3 flex flex-col md:flex-row m-8 rounded-3xl gap-8">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-rose-50 rounded-3xl">
          <div className="w-full m-4">
            <div className="flex items-center justify-center gap-8 m-2">
              <img
                src="src/components/pages/images/trucklogo.png"
                alt=""
                className="w-auto h-10"
              />
              <button className="bg-rose-700 text-white rounded-full px-4 py-2">
                Check if we deliver
              </button>
            </div>
          </div>
          <div className="bg-white m-4 rounded-xl p-4 text-center md:text-left">
            <h1 className="font-medium text-emerald-500">
              #1 Fresh Cooked Food Provider
            </h1>
            <p className="text-black">5 Years of Quality Food Service</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-64 flex justify-center items-center rounded-3xl overflow-hidden">
          <img
            src="https://images.pexels.com/photos/4392876/pexels-photo-4392876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Customers Review Section */}
      <div className="w-full md:w-2/3 flex flex-col m-8 gap-8">
        <h1 className="text-4xl font-bold text-black capitalize border-2 my-4 text-center">
          Customer Stories
        </h1>
        <div className="flex justify-center md:justify-start gap-8">
          <button className="border-2 border-amber-700 rounded-full px-4 py-2">
            Discover Stories
          </button>
          <button className="border-2 border-amber-700 rounded-full px-4 py-2">
            Read Reviews
          </button>
        </div>
        {/* Cards will go here */}
      </div>
    </div>
  );
};

export default Home;
