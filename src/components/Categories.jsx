import React, { useState } from "react";
import LifestyleShoes from "../images/lifestyle_shoes.jpg";
import BasketballShoes from "../images/basketball_shoes.jpg";
import RunningShoes from "../images/running_shoes.jpg";
import TrainingShoes from "../images/training_shoes.jpg";
import { UilArrowLeft, UilArrowRight, UilArrowUpRight } from "./IconWrappers";

const Categories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const categories = [
    { id: 1, img: LifestyleShoes, name: "LIFESTYLE SHOES" },
    { id: 2, img: BasketballShoes, name: "BASKETBALL SHOES" },
    { id: 3, img: RunningShoes, name: "RUNNING SHOES" },
    { id: 4, img: TrainingShoes, name: "TRAINING SHOES" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === categories.length - (window.innerWidth >= 768 ? 2 : 1)
        ? 0
        : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? categories.length - (window.innerWidth >= 768 ? 2 : 1)
        : prevIndex - 1
    );
  };

  return (
    <div id="categories" className="bg-stone-800 text-white px-4 md:pl-20">
      <div className="flex flex-row justify-between items-center mb-6 pt-8 md:pt-16">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold">
          CATEGORIES
        </h2>
        <div className="flex items-center space-x-4 md:pr-20">
          <button
            onClick={prevSlide}
            className="bg-[#e7e7e2] p-2 rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-110 hover:bg-[#d7d7d5]"
          >
            <UilArrowLeft className="text-stone-800" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-[#e7e7e2] p-2 rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-110 hover:bg-[#d7d7d5]"
          >
            <UilArrowRight className="text-stone-800" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 transition-all duration-1000 ease-in-out pb-8 md:pb-0">
        {categories
          .slice(
            currentIndex,
            currentIndex + (window.innerWidth >= 768 ? 2 : 1)
          )
          .map((category, index) => (
            <div
              key={category.id}
              className="relative overflow-hidden shadow-[-10px_-30px_50px_rgba(0,0,0,0.05)] rounded-3xl md:rounded-none"
              style={{
                borderTopLeftRadius:
                  index === 0 && window.innerWidth >= 768 ? "60px" : "0",
                backgroundColor: "#edeef0",
              }}
            >
              <img
                src={category.img}
                alt={category.name}
                className="w-full md:w-auto md:h-[500px] object-cover mx-auto transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 flex justify-between items-end md:pr-20">
                <h3 className="font-bold text-2xl md:text-3xl text-stone-800">
                  {category.name.split(" ").slice(0, 1)}
                  <br />
                  {category.name.split(" ").slice(1).join(" ")}
                </h3>
                <button className="bg-stone-800 p-2 rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-110">
                  <UilArrowUpRight className="ml-1 text-white" />
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Categories;
