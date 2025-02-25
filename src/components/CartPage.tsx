import React, { useState } from "react";
import { UilHeart, UilTrashAlt } from "./IconWrappers";
import { CartItem } from "../types";
import BackButton from "./BackButton";

// Add interfaces for the component props and cart item
interface CartPageProps {
  cartItems: CartItem[];
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  onCheckout: () => void;
  onBack: () => void;
  onPromoApply: (applied: boolean) => void;
  isPromoApplied: boolean;
}

// Update component definition with types
const CartPage: React.FC<CartPageProps> = ({
  cartItems,
  onRemoveItem,
  onClearCart,
  onCheckout,
  onBack,
  onPromoApply,
  isPromoApplied: initialPromoApplied,
}) => {
  const [promoCode, setPromoCode] = useState<string>("");
  const [isPromoApplied, setIsPromoApplied] =
    useState<boolean>(initialPromoApplied);
  const [showPromoInput, setShowPromoInput] = useState<boolean>(false);
  const [promoError, setPromoError] = useState<string>("");

  const handleApplyPromo = () => {
    if (promoCode.toLowerCase() === "frontend") {
      setIsPromoApplied(true);
      onPromoApply(true);
      setPromoError("");
      setShowPromoInput(false);
    } else {
      setPromoError("Invalid promo code");
    }
  };

  const deliveryFee = 6.99;
  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);
  const discount = isPromoApplied ? subtotal * 0.4 : 0;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="px-4 lg:mx-20 py-8">
      <BackButton onBack={onBack} />
      <h1 className="text-3xl lg:text-4xl font-bold mb-2">
        Saving to celebrate
      </h1>
      <p className="text-gray-600 mb-4 text-sm lg:text-base">
        Enjoy up to 40% off thousands of styles during the End of Year sale -
        while supplies last. Code is <strong>frontend</strong>
      </p>
      <p className="text-blue-600 mb-6 lg:mb-8 text-sm lg:text-base">
        Join us or Sign-in
      </p>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        <div className="bg-white rounded-lg p-4 lg:p-6 flex-grow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl lg:text-2xl font-bold">Your Bag</h2>
            {cartItems.length > 0 && (
              <button
                onClick={onClearCart}
                className="text-red-500 hover:text-red-700 text-sm lg:text-base transition-colors duration-300"
              >
                Clear Cart
              </button>
            )}
          </div>
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
                  <div className="border rounded mr-4 px-2 py-1 text-sm lg:text-base">
                    Size: {item.size}
                  </div>
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

        <div className="rounded-lg w-full lg:w-1/3">
          <div className="bg-gray-100 rounded-lg p-4 lg:p-6">
            <h2 className="text-xl lg:text-2xl font-bold mb-4">
              Order Summary
            </h2>
            <div className="flex justify-between mb-2 text-sm lg:text-base">
              <span>
                {cartItems.length} ITEM{cartItems.length !== 1 && "S"}
              </span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            {isPromoApplied && (
              <div className="flex justify-between mb-2 text-sm lg:text-base text-green-600">
                <span>Discount (40%)</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
            )}

            <div className="flex justify-between mb-2 text-sm lg:text-base">
              <span>Delivery</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-lg lg:text-xl font-bold mb-4">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-6">
            <button
              className={`w-full py-3 rounded-lg text-sm lg:text-base transition-colors duration-300 ${
                cartItems.length === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-black text-white hover:bg-stone-900"
              }`}
              onClick={onCheckout}
              disabled={cartItems.length === 0}
            >
              {cartItems.length === 0 ? "CART IS EMPTY" : "CHECKOUT"}
            </button>
          </div>

          {showPromoInput ? (
            <div className="mt-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Enter promo code"
                  className="flex-1 border rounded-lg px-4 py-3 text-sm lg:text-base"
                />
                <button
                  onClick={handleApplyPromo}
                  className="bg-black text-white px-6 py-3 rounded-lg text-sm lg:text-base hover:bg-stone-900 transition-colors duration-300"
                >
                  Apply
                </button>
              </div>
              {promoError && (
                <p className="text-red-500 text-sm mt-2">{promoError}</p>
              )}
            </div>
          ) : (
            <p
              onClick={() => !isPromoApplied && setShowPromoInput(true)}
              className={`text-center text-blue-600 mt-4 text-sm lg:text-base cursor-pointer ${
                isPromoApplied ? "opacity-50" : "hover:text-blue-700"
              }`}
            >
              {isPromoApplied ? "Promo code applied" : "Use a promo code"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
