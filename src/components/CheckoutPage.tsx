import React, { useState } from "react";
import { CartItem } from "../types";
import BackButton from "./BackButton";
import {
  CreditCardIcon,
  PayPalIcon,
  ApplePayIcon,
  GooglePayIcon,
} from "./PaymentIcons";

interface CheckoutPageProps {
  cartItems: CartItem[];
  total: number;
  isPromoApplied: boolean;
  onBack: () => void;
}

// Add example data
const exampleData = {
  email: "john.doe@example.com",
  firstName: "John",
  lastName: "Doe",
  address: "123 Main Street",
  city: "New York",
  country: "US",
  zipCode: "10001",
  cardNumber: "4111 1111 1111 1111",
  expiryDate: "12/25",
  cvv: "123",
};

// Add payment methods
const paymentMethods = [
  { id: "card", name: "Credit Card", icon: <CreditCardIcon /> },
  { id: "paypal", name: "PayPal", icon: <PayPalIcon /> },
  { id: "apple", name: "Apple Pay", icon: <ApplePayIcon /> },
  { id: "google", name: "", icon: <GooglePayIcon /> },
];

const CheckoutPage: React.FC<CheckoutPageProps> = ({
  cartItems,
  total,
  isPromoApplied,
  onBack,
}) => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [step, setStep] = useState<"shipping" | "payment">("shipping");

  // Add state for payment method
  const [selectedPayment, setSelectedPayment] = useState<string>("card");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Add autofill function
  const handleAutofill = () => {
    setFormData(exampleData);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === "shipping") {
      setStep("payment");
    } else {
      // Handle payment submission
      console.log("Processing payment...", formData);
    }
  };

  return (
    <div className="px-4 lg:mx-20 pt-8 pb-16 lg:pb-24">
      <BackButton onBack={onBack} />
      <h1 className="text-3xl lg:text-4xl font-bold mb-6">Checkout</h1>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Form Section */}
        <div className="flex-grow">
          <form onSubmit={handleSubmit} className="space-y-6">
            {step === "shipping" ? (
              <div className="bg-white rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Shipping Information</h2>
                  <button
                    type="button"
                    onClick={handleAutofill}
                    className="text-blue-600 hover:text-blue-700 text-sm"
                  >
                    Fill with example data
                  </button>
                </div>
                <div className="space-y-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border rounded-lg px-4 py-3"
                    required
                  />
                  <div className="flex gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full border rounded-lg px-4 py-3"
                      required
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full border rounded-lg px-4 py-3"
                      required
                    />
                  </div>
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full border rounded-lg px-4 py-3"
                    required
                  />
                  <div className="flex gap-4">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full border rounded-lg px-4 py-3"
                      required
                    />
                    <input
                      type="text"
                      name="zipCode"
                      placeholder="ZIP Code"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="w-full border rounded-lg px-4 py-3"
                      required
                    />
                  </div>
                  <select
                    name="country"
                    className="w-full border rounded-lg px-4 py-3 bg-white"
                    required
                  >
                    <option value="">Select Country</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="CA">Canada</option>
                  </select>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Payment Information</h2>

                {/* Add payment method selection */}
                <div className="mb-6">
                  <h3 className="font-bold mb-3">Payment Method</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {paymentMethods.map((method) => (
                      <button
                        key={method.id}
                        type="button"
                        className={`flex items-center justify-center h-16 border rounded-lg transition-all duration-300 ${
                          selectedPayment === method.id
                            ? "border-blue-500 bg-blue-50"
                            : "hover:border-gray-400"
                        }`}
                        onClick={() => setSelectedPayment(method.id)}
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-6">{method.icon}</span>
                          <span className="text-lg">{method.name}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {selectedPayment === "card" && (
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Card Number"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      className="w-full border rounded-lg px-4 py-3"
                      required
                    />
                    <div className="flex gap-4">
                      <input
                        type="text"
                        name="expiryDate"
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        className="w-full border rounded-lg px-4 py-3"
                        required
                      />
                      <input
                        type="text"
                        name="cvv"
                        placeholder="CVV"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        className="w-full border rounded-lg px-4 py-3"
                        required
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg text-sm lg:text-base hover:bg-stone-900 transition-colors duration-300"
            >
              {step === "shipping" ? "Continue to Payment" : "Place Order"}
            </button>
          </form>
        </div>

        {/* Order Summary Section */}
        <div className="w-full lg:w-1/3">
          <div className="bg-gray-100 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            {cartItems.map((item) => (
              <div key={item.cartItemId} className="flex py-2 border-b">
                <div className="flex-grow pr-4">
                  <p className="font-medium break-words">{item.name}</p>
                  <p className="text-sm text-gray-600">Size: {item.size}</p>
                </div>
                <p className="font-medium whitespace-nowrap">${item.price}</p>
              </div>
            ))}

            {isPromoApplied && (
              <div className="flex justify-between py-2 text-green-600">
                <span>Discount (40%)</span>
                <span>-${(total * 0.4).toFixed(2)}</span>
              </div>
            )}

            <div className="flex justify-between py-2">
              <span>Delivery</span>
              <span>$6.99</span>
            </div>

            <div className="flex justify-between pt-4 text-lg font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
