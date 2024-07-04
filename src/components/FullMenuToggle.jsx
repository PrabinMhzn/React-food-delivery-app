import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const FullMenuToogle = ({ setSelectedCategory }) => {
  return (
    <div>
      <SlideTabs setSelectedCategory={setSelectedCategory} />
    </div>
  );
};

const SlideTabs = ({ setSelectedCategory }) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const tabs = ["New", "Special", "Meals", "Snacks", "Indian", "Drinks"];

  const [selectedTab, setSelectedTab] = useState(tabs[0]); // Initial selected tab

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    setSelectedCategory(tab);
  };

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="flex justify-center md:gap-8 lg:gap-32 p-1"
    >
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          tab={tab}
          setPosition={setPosition}
          setSelectedTab={handleTabClick}
          isSelected={selectedTab === tab}
        />
      ))}
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ tab, setPosition, setSelectedTab, isSelected }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      onClick={() => setSelectedTab(tab)} // Set the selected tab on click
      className={`relative z-10 block cursor-pointer px-3 py-1.5 text-xs text-black md:px-5 md:py-3 md:text-base ${
        isSelected ? "font-bold text-white bg-red-600 rounded-full" : "" // Add selected styles
      }`}
    >
      {tab}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-4 rounded-full bg-gray-500 text-white md:h-12"
    />
  );
};
