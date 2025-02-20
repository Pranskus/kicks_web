import React, { useState } from "react";
import { UilArrowDown, UilArrowUp, UilArrowLeft } from "./IconWrappers"; // Import arrow icons
import Sn from "../images/sn.jpg";
import Sn1 from "../images/sn-1.jpg";
import Sn2 from "../images/sn-2.jpg";
import Sn3 from "../images/sn-3.jpg";
import Sn4 from "../images/sn-4.jpg";
import Sn5 from "../images/sn-5.jpg";
import Sn6 from "../images/sn-6.jpg";
import Sn7 from "../images/sn-7.jpg";
import Sn8 from "../images/sn-8.jpg";

interface Shoe {
  id: number;
  img: string;
  name: string;
  price: string;
}

interface CategoriesPageProps {
  onShowProduct: (shoe: Shoe) => void;
  selectedCategory: string;
}

const CategoriesPage: React.FC<CategoriesPageProps> = ({
  onShowProduct,
  selectedCategory,
}) => {
  // Use selectedCategory to filter or display products
  console.log("Selected category:", selectedCategory);

  const [isSizeOpen, setIsSizeOpen] = useState<boolean>(false);
  const [isColorOpen, setIsColorOpen] = useState<boolean>(false);
  const [isTypeOpen, setIsTypeOpen] = useState<boolean>(false);
  const [isPriceOpen, setIsPriceOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8; // Number of items per page
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [isTrendingOpen, setIsTrendingOpen] = useState<boolean>(false);

  // Sneakers array to hold shoe data
  const shoes: Shoe[] = [
    {
      id: 1,
      img: Sn,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "$140",
    },
    {
      id: 2,
      img: Sn1,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "$125",
    },
    {
      id: 3,
      img: Sn2,
      name: "ADIDAS 4DFWD X STREET WHERE SHOES",
      price: "$180",
    },
    {
      id: 4,
      img: Sn3,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "$125",
    },
    {
      id: 5,
      img: Sn4,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "$125",
    },
    {
      id: 6,
      img: Sn5,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "$125",
    },
    {
      id: 7,
      img: Sn6,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "$125",
    },
    {
      id: 8,
      img: Sn7,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "$125",
    },
    {
      id: 9,
      img: Sn8,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "$125",
    },
    {
      id: 10,
      img: Sn2,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "$125",
    },
    {
      id: 11,
      img: Sn6,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: "$100",
    },
  ];

  const totalPages = Math.ceil(shoes.length / itemsPerPage); // Calculate total pages

  // Function to handle page change
  const handlePageChange = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
  };

  // Get the current items to display based on the current page
  const currentItems = shoes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const MobileFilterDropdown: React.FC = () => (
    <div className="fixed inset-0 bg-[#E7E7E3] z-50 overflow-y-auto">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <button onClick={() => setIsFilterOpen(false)}>
            <UilArrowLeft size={24} />
          </button>
          <h2 className="text-2xl font-bold">Filters</h2>
          <div className="w-6"></div>
        </div>

        {/* Refine By Section */}
        <div className="flex items-center mb-4">
          <button className="bg-blue-500 text-white px-4 py-1 rounded-md mr-2">
            Men
          </button>
          <button className="bg-gray-300 text-gray-800 px-4 py-1 rounded-md">
            Women
          </button>
        </div>

        {/* Size Selection */}
        <div className="mb-4">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setIsSizeOpen(!isSizeOpen)}
          >
            <div className="font-bold">SIZE</div>
            {isSizeOpen ? <UilArrowUp size={20} /> : <UilArrowDown size={20} />}
          </div>
          {isSizeOpen && (
            <div className="grid grid-cols-5 gap-2 mt-2">
              {["38", "39", "40", "41", "42", "43", "44", "45", "46", "47"].map(
                (size) => (
                  <button
                    key={size}
                    className="border rounded-lg py-2 bg-stone-300 hover:bg-blue-500 hover:text-white"
                  >
                    {size}
                  </button>
                )
              )}
            </div>
          )}
        </div>

        {/* Color Selection */}
        <div className="mb-4">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setIsColorOpen(!isColorOpen)}
          >
            <div className="font-bold">COLOR</div>
            {isColorOpen ? (
              <UilArrowUp size={20} />
            ) : (
              <UilArrowDown size={20} />
            )}
          </div>
          {isColorOpen && (
            <div className="grid grid-cols-5 gap-2 mt-2">
              {[
                "#4a69e2",
                "#ffa52f",
                "black",
                "#234d40",
                "#a5a5a5",
                "#ef8154",
                "#677282",
                "#925513",
                "#bb8056",
                "white",
              ].map((color) => (
                <div
                  key={color}
                  className="h-10 rounded-lg cursor-pointer"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          )}
        </div>

        {/* Category Selection */}
        <div className="mb-4">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setIsTypeOpen(!isTypeOpen)}
          >
            <div className="font-bold">TYPE</div>
            {isTypeOpen ? <UilArrowUp size={20} /> : <UilArrowDown size={20} />}
          </div>
          {isTypeOpen && (
            <div className="flex flex-col mt-2">
              {[
                "Casual shoes",
                "Runners",
                "Hiking",
                "Sneaker",
                "Basketball",
                "Golf",
                "Outdoor",
              ].map((type) => (
                <label key={type} className="flex items-center mt-1">
                  <input type="checkbox" className="mr-2" />
                  {type}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Price Slider */}
        <div>
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setIsPriceOpen(!isPriceOpen)}
          >
            <div className="font-bold">PRICE</div>
            {isPriceOpen ? (
              <UilArrowUp size={20} />
            ) : (
              <UilArrowDown size={20} />
            )}
          </div>
          {isPriceOpen && (
            <div>
              <input type="range" min="0" max="1000" className="w-full mt-2" />
              <div className="flex justify-between">
                <span>$0</span>
                <span>$1000</span>
              </div>
            </div>
          )}
        </div>

        <button
          className="w-full bg-blue-500 text-white py-2 rounded-md mt-4"
          onClick={() => setIsFilterOpen(false)}
        >
          Apply Filters
        </button>
      </div>
    </div>
  );

  return (
    <div className="mx-4 lg:mx-20 pt-8 lg:pt-16 pb-20">
      <div className="lg:flex">
        {/* Left Column for Filters (visible only on large screens) */}
        <div className="hidden lg:block lg:w-1/4 lg:pr-4">
          <h2 className="text-4xl font-bold text-stone-800 mb-4">Filters</h2>

          {/* Refine By Section */}
          <div className="flex items-center mt-4">
            <button className="bg-blue-500 text-white px-4 py-1 rounded-md mr-2">
              Men
            </button>
            <button className="bg-gray-300 text-gray-800 px-4 py-1 rounded-md">
              Women
            </button>
          </div>

          {/* Size Selection */}
          <div className="p-4 rounded-lg mt-4">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setIsSizeOpen(!isSizeOpen)}
            >
              <div className="font-bold">SIZE</div>
              {isSizeOpen ? (
                <UilArrowUp size={20} />
              ) : (
                <UilArrowDown size={20} />
              )}
            </div>
            {isSizeOpen && (
              <div className="grid grid-cols-5 gap-1 mt-2">
                {[
                  "38",
                  "39",
                  "40",
                  "41",
                  "42",
                  "43",
                  "44",
                  "45",
                  "46",
                  "47",
                ].map((size) => (
                  <button
                    key={size}
                    className="border rounded-lg p-2 bg-stone-300 hover:bg-blue-500 hover:text-white"
                  >
                    {size}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Color Selection */}
          <div className="p-4 rounded-lg mt-4">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setIsColorOpen(!isColorOpen)}
            >
              <div className="font-bold">COLOR</div>
              {isColorOpen ? (
                <UilArrowUp size={20} />
              ) : (
                <UilArrowDown size={20} />
              )}
            </div>
            {isColorOpen && (
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-1 mt-2">
                {[
                  "#4a69e2",
                  "#ffa52f",
                  "black",
                  "#234d40",
                  "#a5a5a5",
                  "#ef8154",
                  "#677282",
                  "#925513",
                  "#bb8056",
                  "white",
                ].map((color) => (
                  <div
                    key={color}
                    className="w-12 h-10 rounded-lg cursor-pointer mt-1"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Category Selection */}
          <div className="p-4 rounded-lg mt-4">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setIsTypeOpen(!isTypeOpen)}
            >
              <div className="font-bold">TYPE</div>
              {isTypeOpen ? (
                <UilArrowUp size={20} />
              ) : (
                <UilArrowDown size={20} />
              )}
            </div>
            {isTypeOpen && (
              <div className="flex flex-col mt-2">
                {[
                  "Casual shoes",
                  "Runners",
                  "Hiking",
                  "Sneaker",
                  "Basketball",
                  "Golf",
                  "Outdoor",
                ].map((type) => (
                  <label key={type} className="flex items-center mt-1">
                    <input type="checkbox" className="mr-2" />
                    {type}
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Price Slider */}
          <div className="p-4 rounded-lg mt-4">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setIsPriceOpen(!isPriceOpen)}
            >
              <div className="font-bold">PRICE</div>
              {isPriceOpen ? (
                <UilArrowUp size={20} />
              ) : (
                <UilArrowDown size={20} />
              )}
            </div>
            {isPriceOpen && (
              <div>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  className="w-full mt-2"
                />
                <div className="flex justify-between">
                  <span>$0</span>
                  <span>$1000</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column for Products */}
        <div className="lg:w-3/4 lg:pl-4">
          <h2 className="text-4xl font-bold text-stone-800">
            LIFE STYLE SHOES
          </h2>

          {/* Filters and Trending dropdowns for small screens */}
          <div className="lg:hidden flex justify-between items-center mt-4">
            <div className="relative w-1/2 pr-2">
              <button
                className="w-full bg-gray-300 p-2 rounded-lg text-left relative"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <span>Filters</span>
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  {isFilterOpen ? (
                    <UilArrowUp size={20} />
                  ) : (
                    <UilArrowDown size={20} />
                  )}
                </span>
              </button>
              {isFilterOpen && <MobileFilterDropdown />}
            </div>
            <div className="relative w-1/2 pl-2">
              <div className="bg-gray-300 p-2 rounded-lg">
                <select className="w-full bg-transparent outline-none appearance-none pr-8">
                  <option value="trending">Trending</option>
                  <option value="popular">Popular</option>
                  <option value="price_low_high">Price: low to high</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <UilArrowDown size={20} />
                </div>
              </div>
            </div>
          </div>

          {/* Items count and sorting (visible only on large screens) */}
          <div className="hidden lg:flex justify-between items-center mt-4">
            <div className="text-lg text-gray-600">{shoes.length} Items</div>
            <div className="bg-gray-300 p-1 rounded-lg">
              <select className="outline-none bg-transparent">
                <option value="trending">Trending</option>
                <option value="popular">Popular</option>
                <option value="price_low_high">Price: low to high</option>
              </select>
            </div>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {currentItems.map((shoe) => (
              <div
                key={shoe.id}
                className="overflow-hidden"
                onClick={() => onShowProduct(shoe)}
              >
                {" "}
                {/* Call the function with shoe */}
                <div className="relative overflow-hidden border-8 border-white rounded-3xl">
                  <img
                    src={shoe.img}
                    alt={shoe.name}
                    className="w-full h-76 object-cover rounded-3xl transition-transform duration-300 ease-in-out transform hover:scale-105"
                  />
                  <span className="absolute top-0 left-0 bg-blue-600 text-white text-xs py-2 px-4 rounded-tl-2xl rounded-br-2xl">
                    New
                  </span>
                </div>
                <div className="mt-2 mb-12">
                  <h3 className="text-2xl font-medium mb-4 mt-4">
                    {shoe.name}
                  </h3>
                  <button className="w-full bg-stone-800 text-white py-4 px-4 rounded-xl text-sm flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:bg-stone-900">
                    <span>VIEW PRODUCT - </span>
                    <span className="text-yellow-500 ml-1">{shoe.price}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Buttons */}
          <div className="flex justify-between mt-8">
            <button
              className="bg-gray-300 px-4 py-2 rounded-md  hover:bg-blue-500  hover:text-white"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              PREVIOUS
            </button>

            <div className="flex items-center space-x-2">
              {/* Dynamically generate page numbers */}
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  className={`px-3 py-1 rounded-md ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-300"}`}
                  onClick={() => handlePageChange(index + 1)} // Add onClick to change the page
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              className="bg-gray-300 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
