import React from "react";
import Shoe1 from "../images/Shoe1.jpg";
import Shoe2 from "../images/Shoe2.jpg";
import Shoe3 from "../images/Shoe3.jpg";
import Shoe4 from "../images/Shoe4.jpg";
import { Shoe } from "../types";
import styled from "styled-components";

interface NewDropsProps {
  onShowProduct: (shoe: Shoe) => void;
  onShowCategories: (gender: string, category: string) => void;
}

const PulsingButton = styled.button`
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:hover::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to right, #4a69e1, #1da1f2);
    opacity: 0.2;
    animation: pulse 1.5s infinite;
  }

  @keyframes pulse {
    0% {
      opacity: 0.2;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 0.2;
    }
  }
`;

const NewDrops: React.FC<NewDropsProps> = ({
  onShowProduct,
  onShowCategories,
}) => {
  const shoes: Shoe[] = [
    {
      id: 1,
      img: Shoe1,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "$125",
      tag: "New",
    },
    {
      id: 2,
      img: Shoe2,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "$125",
      tag: "10% off",
    },
    {
      id: 3,
      img: Shoe3,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "$125",
      tag: "New",
    },
    {
      id: 4,
      img: Shoe4,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "$125",
      tag: "New",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-start">
      <div className="w-[90vw] max-w-[2560px] flex flex-col items-center pt-8 pb-10">
        <div id="new-drops" className="w-full">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center mb-6 lg:mb-10">
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-stone-800 mb-4 lg:mb-0 text-center lg:text-left w-full lg:w-auto">
              DON'T MISS OUT
              <br />
              NEW DROPS
            </h2>
            <PulsingButton
              className="mt-4 lg:mt-0 py-3 lg:py-4 px-6 lg:px-10 rounded-xl relative overflow-hidden mb-4 lg:mb-0"
              style={{
                background: "linear-gradient(to right, #4a69e1, #1DA1F2)",
              }}
              onClick={() => onShowCategories("All", "New Drops")}
            >
              <span className="text-white text-base relative z-10">
                SHOP NEW DROPS
              </span>
            </PulsingButton>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {shoes.map((shoe) => (
              <div
                key={shoe.id}
                className="overflow-hidden"
                onClick={() => onShowProduct(shoe)}
              >
                <div className="relative overflow-hidden border-8 border-white rounded-3xl">
                  <img
                    src={shoe.img}
                    alt={shoe.name}
                    className="w-full h-40 sm:h-52 lg:h-64 xl:h-76 object-cover rounded-3xl transition-transform duration-300 ease-in-out transform hover:scale-105"
                  />
                  <span
                    className={`absolute top-0 left-0 ${
                      shoe.tag === "New" ? "bg-blue-600" : "bg-orange-400"
                    } text-white text-xs py-2 px-4 rounded-tl-2xl rounded-br-2xl`}
                  >
                    {shoe.tag}
                  </span>
                </div>
                <div className="mt-2">
                  <h3 className="text-sm sm:text-base lg:text-2xl font-medium mb-2 lg:mb-4 mt-2 lg:mt-4">
                    {shoe.name}
                  </h3>
                  <button className="w-full bg-stone-800 text-white py-3 lg:py-4 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:bg-stone-900">
                    <span>VIEW PRODUCT - </span>
                    <span className="text-yellow-500 ml-1">{shoe.price}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewDrops;
