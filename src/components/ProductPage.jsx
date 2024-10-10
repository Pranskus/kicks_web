import React from "react";
import SimilarShoes from "./SimilarShoes";

const ProductPage = ({ product, onShowProduct, onAddToCart, onBuyNow }) => {
  const handleBuyNow = () => {
    onAddToCart(product);
    onBuyNow();
  };

  return (
    <div>
      {/* Large screen layout */}
      <div className="hidden lg:block mx-20 pt-16 pb-20">
        <div className="flex flex-row">
          {/* Left Column for Images (2/3 of the layout) */}
          <div className="flex-[2]">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-auto"
                style={{ borderTopLeftRadius: "50px" }}
              />
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-auto"
                style={{ borderTopRightRadius: "50px" }}
              />
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-auto"
                style={{ borderBottomLeftRadius: "50px" }}
              />
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-auto"
                style={{ borderBottomRightRadius: "50px" }}
              />
            </div>
          </div>

          {/* Right Column for Product Details (1/3 of the layout) */}
          <div className="flex-1 ml-8">
            <h2 className="text-3xl font-bold text-stone-800">
              {product.name}
            </h2>
            <p className="text-2xl font-semibold mt-2 text-blue-500">
              {product.price}
            </p>
            {/* Color Selection */}
            <div className="mt-4">
              <h3 className="font-bold">COLOR</h3>
              <div className="flex space-x-2 mt-2">
                <div className="w-8 h-8 rounded-full bg-black cursor-pointer" />
                <div className="w-8 h-8 rounded-full bg-white cursor-pointer" />
              </div>
            </div>
            {/* Size Selection */}
            <div className="rounded-lg mt-4">
              <h3 className="font-bold">SIZE</h3>
              <div className="grid grid-cols-5 gap-2 mt-2">
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
                    className={`border rounded-lg p-2 hover:bg-blue-500 hover:text-white ${
                      size === "43" || size === "42"
                        ? "bg-stone-400"
                        : "bg-stone-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            {/* Buttons */}
            <div className="flex flex-col mt-8 w-full">
              <button
                className="py-2 px-4 bg-stone-800 text-white rounded-lg w-full mb-2"
                onClick={() => onAddToCart(product)}
              >
                ADD TO CART
              </button>
              <button
                className="py-2 px-4 bg-blue-500 text-white rounded-lg w-full"
                onClick={handleBuyNow}
              >
                BUY IT NOW
              </button>
            </div>
            {/* Product Description */}
            <div className="mt-8 text-gray-700">
              <h3 className="font-bold">ABOUT THE PRODUCT</h3>
              <p className="mt-2 text-gray-500">
                Color: Shadow Navy / Army Green
              </p>
              <p className="mt-2 text-gray-500">
                This product is excluded from promotional discounts and offers.
                Designed for both style and performance, it features a modern
                silhouette that pairs well with any outfit.
              </p>
              <ul className="list-disc list-inside mt-2 pl-6 text-gray-500">
                <li>Pay over time with Affirm, Klarna, or Afterpay.</li>
                <li>
                  Join adiClub for free standard shipping and easy returns.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Updated Small screen layout */}
      <div className="lg:hidden px-4 pt-4">
        <div className="relative">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-auto rounded-xl"
          />
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 mt-4">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-auto aspect-square object-cover rounded-lg"
          />
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-auto aspect-square object-cover rounded-lg"
          />
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-auto aspect-square object-cover rounded-lg"
          />
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-auto aspect-square object-cover rounded-lg"
          />
        </div>

        <div className="py-6">
          <div className="bg-blue-500 text-white px-2 py-1 inline-block rounded mb-2">
            New Release
          </div>
          <h2 className="text-xl font-bold text-stone-800">{product.name}</h2>
          <p className="text-xl font-semibold mt-2 text-blue-500">
            {product.price}
          </p>
          <div className="mt-4">
            <h3 className="font-bold">Color</h3>
            <div className="flex space-x-2 mt-2">
              <div className="w-8 h-8 rounded-full bg-black border-2 border-blue-500"></div>
              <div className="w-8 h-8 rounded-full bg-gray-400"></div>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center">
              <h3 className="font-bold">Size</h3>
              <span className="text-blue-500 text-sm">SIZE CHART</span>
            </div>
            <div className="grid grid-cols-5 gap-2 mt-2">
              {["38", "39", "40", "41", "42", "43", "44", "45", "46", "47"].map(
                (size) => (
                  <button
                    key={size}
                    className={`border rounded-lg p-2 text-sm hover:bg-blue-500 hover:text-white transition-colors duration-300 ${
                      size === "43" || size === "42"
                        ? "bg-stone-400"
                        : "bg-stone-300"
                    }`}
                  >
                    {size}
                  </button>
                )
              )}
            </div>
          </div>
          <div className="mt-6 space-y-2">
            <button
              className="w-full py-3 bg-black text-white rounded-xl"
              onClick={() => onAddToCart(product)}
            >
              ADD TO CART
            </button>
          </div>
          <button
            className="w-full py-3 bg-blue-500 text-white rounded-xl mt-2"
            onClick={handleBuyNow}
          >
            BUY IT NOW
          </button>
          <div className="mt-6">
            <h3 className="font-bold">ABOUT THE PRODUCT</h3>
            <p className="mt-2 text-sm text-gray-500">
              Shadow Navy / Army Green
            </p>
            <p className="mt-2 text-sm text-gray-500">
              This product is excluded from all promotional discounts and
              offers.
            </p>
            <ul className="list-disc list-inside mt-2 text-sm text-gray-500">
              <li>
                Pay over time in interest-free installments with Affirm, Klarna
                or Afterpay.
              </li>
              <li>
                Join adiClub to get unlimited free standard shipping, returns, &
                exchanges.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <SimilarShoes onShowProduct={onShowProduct} />
    </div>
  );
};

export default ProductPage;