// src/components/HeroSection.jsx
import React, { useEffect, useState } from "react";
import Hero from "../images/sneaker_header.jpg";
import SmallImage1 from "../images/angle1.jpg";
import SmallImage2 from "../images/angle2.jpg";
import styled from "styled-components";

interface HeroSectionProps {
  onShowCategories: () => void;
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

const HeroSection: React.FC<HeroSectionProps> = ({ onShowCategories }) => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-start">
      <div className="w-[90vw] max-w-[2560px] flex flex-col items-center pt-8 pb-10">
        {" "}
        <div className="w-full mt-8">
          <div
            className="relative overflow-hidden"
            style={{
              width: "100%",
              height: "700px",
              borderRadius: "60px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: `${-scrollY * 0.5}px`,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(${Hero})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transform: `translateY(${scrollY * 0.1}px)`,
                transition: "transform 0.1s ease-out",
              }}
            />
            <div className="absolute top-0 left-0 transform translate-y-8 sm:translate-y-12 translate-x-0 bg-black text-white px-4 py-2 rounded-lg rounded-br-none rounded-bl-none rotate-90 origin-bottom-left">
              <span className="text-xs sm:text-sm whitespace-nowrap transform -rotate-180">
                Nike product of the year
              </span>
            </div>
            <div className="absolute inset-0 opacity-30 rounded-lg"></div>
            <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col md:block">
              <div className="text-center md:text-left ml-2 md:ml-6 mb-2 md:mb-10">
                <h3 className="text-5xl md:text-5xl text-white mt-2 pb-4 font-semibold xl:text-8xl lg:text-7xl w-full md:w-auto">
                  NIKE AIR MAX
                </h3>
                <p className="text-lg md:text-md text-white mt-2 md:mt-4 font-thin xl:text-2xl lg:text-1xl mx-auto md:mx-0 w-full md:w-auto max-w-[90%] md:max-w-[70%]">
                  Nike introducing the new air max for everyone's comfort
                </p>
                <PulsingButton
                  className="mt-6 md:mt-10 py-3 md:py-4 px-8 md:px-10 rounded-xl"
                  style={{
                    background: "linear-gradient(to right, #4a69e1, #1DA1F2)",
                  }}
                  onClick={onShowCategories}
                >
                  <span className="text-white text-base md:text-lg relative z-10">
                    SHOP NOW
                  </span>
                </PulsingButton>
              </div>
              <div className="flex flex-row justify-center md:justify-end space-x-4 md:space-x-6 mt-6 md:mt-0 md:absolute md:bottom-4 md:right-4 pb-6 md:pb-0">
                <img
                  src={SmallImage1}
                  alt="Small Shoe 1"
                  className="w-20 h-20 md:w-32 md:h-32 shadow-md outline outline-gray-200 outline-2 rounded-[15px]"
                />
                <img
                  src={SmallImage2}
                  alt="Small Shoe 2"
                  className="w-20 h-20 md:w-32 md:h-32 shadow-md outline outline-gray-200 outline-2 rounded-[15px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
