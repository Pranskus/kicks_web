import React from "react";
import { UilHeart, UilTrashAlt } from "./IconWrappers";
import { CartItem } from "../types";

// Add interfaces for the component props and cart item
interface CartPageProps {
  cartItems: CartItem[];
  onRemoveItem: (id: string) => void;
}

// Update component definition with types
const CartPage: React.FC<CartPageProps> = ({ cartItems, onRemoveItem }) => {
  const deliveryFee = 6.99;
  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);
  const total = subtotal + deliveryFee;

  return (
    <div className="px-4 lg:mx-20 pb-16 lg:pb-24">
      {" "}
      {/* Added bottom padding here */}
      <h1 className="text-3xl lg:text-4xl font-bold mb-2 mt-6 lg:mt-10">
        Saving to celebrate
      </h1>
      <p className="text-gray-600 mb-4 text-sm lg:text-base">
        Enjoy up to 60% off thousands of styles during the End of Year sale -
        while supplies last. Code is <strong>Front-end.</strong>
      </p>
      <p className="text-blue-600 mb-6 lg:mb-8 text-sm lg:text-base">
        Join us or Sign-in
      </p>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        <div className="bg-white rounded-lg p-4 lg:p-6 flex-grow">
          <h2 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-4">
            Your Bag
          </h2>
          <p className="text-gray-600 mb-4 lg:mb-6 text-sm lg:text-base">
            Items in your bag not reserved- check out now to make them yours.
          </p>

          {cartItems.map((item) => (
            <div
              key={item.cartItemId}
              className="flex flex-col lg:flex-row items-start lg:items-center border-t py-4"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full lg:w-auto h-auto lg:h-48 object-cover mb-4 lg:mb-0 lg:mr-6 rounded-lg"
              />
              <div className="flex-grow w-full lg:w-auto">
                <h3 className="text-lg lg:text-xl font-bold">{item.name}</h3>
                <p className="text-gray-600 text-sm lg:text-base">
                  {item.category || "Category not specified"}
                </p>
                <p className="text-gray-600 text-sm lg:text-base">
                  {item.color || "Color not specified"}
                </p>
                <div className="flex mt-2">
                  <select className="border rounded mr-4 px-2 py-1 text-sm lg:text-base">
                    <option>Size {item.size || "Not specified"}</option>
                  </select>
                  <select className="border rounded px-2 py-1 text-sm lg:text-base">
                    <option>Quantity 1</option>
                  </select>
                </div>
                <div className="flex mt-4 justify-between lg:justify-start items-center">
                  <div>
                    <button className="mr-4">
                      <UilHeart size="24" />
                    </button>
                    <button onClick={() => onRemoveItem(item.cartItemId)}>
                      <UilTrashAlt size="24" />
                    </button>
                  </div>
                  <p className="text-2xl lg:text-3xl font-bold text-blue-600 lg:ml-auto">
                    ${item.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-lg p-4 lg:p-6 w-full lg:w-1/3 bg-gray-100 lg:bg-transparent">
          <h2 className="text-xl lg:text-2xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2 text-sm lg:text-base">
            <span>
              {cartItems.length} ITEM{cartItems.length !== 1 && "S"}
            </span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2 text-sm lg:text-base">
            <span>Delivery</span>
            <span>${deliveryFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-4 text-sm lg:text-base">
            <span>Sales Tax</span>
            <span>-</span>
          </div>
          <div className="flex justify-between text-lg lg:text-xl font-bold mb-4">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="w-full bg-black text-white py-3 rounded text-sm lg:text-base">
            CHECKOUT
          </button>
          <p className="text-center text-blue-600 mt-4 text-sm lg:text-base">
            Use a promo code
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
