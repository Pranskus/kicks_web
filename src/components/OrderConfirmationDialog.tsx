import React from "react";

interface OrderConfirmationDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderConfirmationDialog: React.FC<OrderConfirmationDialogProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold mb-4">Order Confirmed!</h2>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order has been successfully placed.
        </p>
        <button
          onClick={onClose}
          className="w-full bg-black text-white py-3 rounded-lg text-sm lg:text-base hover:bg-stone-900 transition-colors duration-300"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmationDialog;
