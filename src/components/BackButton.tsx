import React from "react";
import { UilArrowLeft } from "./IconWrappers";

interface BackButtonProps {
  onBack: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onBack }) => {
  return (
    <div className="flex justify-end">
      <button
        onClick={onBack}
        className="flex items-center text-gray-600 hover:text-black transition-colors duration-300"
      >
        <UilArrowLeft className="w-6 h-6 mr-2" />
        <span className="text-sm lg:text-base">Back</span>
      </button>
    </div>
  );
};

export default BackButton;
