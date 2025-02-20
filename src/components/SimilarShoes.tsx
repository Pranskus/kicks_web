import React from "react";
import Shoe1 from "../images/Shoe1.jpg";
import Shoe2 from "../images/Shoe2.jpg";
import Shoe3 from "../images/Shoe3.jpg";
import Shoe4 from "../images/Shoe4.jpg";
import { Shoe } from "../types";

interface SimilarShoesProps {
  onShowProduct: (shoe: Shoe) => void;
}

const SimilarShoes: React.FC<SimilarShoesProps> = ({ onShowProduct }) => {
  const similarShoes: Shoe[] = [
    {
      id: 1,
      img: Shoe1,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "$140",
    },
    {
      id: 2,
      img: Shoe2,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "$125",
    },
    {
      id: 3,
      img: Shoe3,
      name: "ADIDAS 4DFWD X STREET WHERE SHOES",
      price: "$180",
    },
    {
      id: 4,
      img: Shoe4,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "$125",
    },
  ];

  return (
    <div className="px-4 sm:mx-20 pt-8 sm:pt-16 pb-12 sm:pb-20">
      <h2 className="text-3xl sm:text-5xl font-bold text-stone-800 mb-6 sm:mb-12">
        YOU MAY ALSO LIKE
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {similarShoes.map((shoe) => (
          <div
            key={shoe.id}
            className="overflow-hidden"
            onClick={() => onShowProduct(shoe)}
          >
            <div className="relative overflow-hidden border-4 md:border-8 border-white rounded-2xl md:rounded-3xl">
              <img
                src={shoe.img}
                alt={shoe.name}
                className="w-full h-auto object-cover rounded-xl md:rounded-3xl transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
              <span className="absolute top-0 left-0 bg-blue-600 text-white text-xs py-1 px-2 md:py-2 md:px-4 rounded-tl-xl rounded-br-xl md:rounded-tl-2xl md:rounded-br-2xl">
                New
              </span>
            </div>
            <div className="mt-2">
              <h3 className="text-sm md:text-2xl font-medium mb-2 md:mb-4 md:mt-4">
                {shoe.name}
              </h3>
              <button className="w-full bg-stone-800 text-white py-2 md:py-4 px-2 md:px-4 rounded-xl text-xs md:text-sm flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:bg-stone-900">
                <span>VIEW PRODUCT - </span>
                <span className="text-yellow-500 ml-1">{shoe.price}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarShoes;
