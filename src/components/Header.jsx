import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import { UilSearch, UilShoppingCart, UilUser } from "./IconWrappers";
import styled from "styled-components"; // Add this import if you're not already using styled-components

// Add this styled component
const AnimatedCartButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 9999px;
  transition: transform 0.3s ease;

  &:hover {
    animation: wiggle 0.5s ease infinite;
  }

  @keyframes wiggle {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-2px);
    }
    75% {
      transform: translateX(2px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

// Add this new styled component for the hamburger icon
const HamburgerIcon = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  @media (min-width: 1100px) {
    display: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: #0d0c1d;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 1000;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 60px; // Add top padding to push content down
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 40px; // Increase font size
  background: none;
  border: none;
  cursor: pointer;
`;

const MobileCartButton = styled(AnimatedCartButton)`
  @media (max-width: 1099px) {
    width: 48px;
    height: 48px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Header = ({ onLogoClick, onShowCart, cartCount, onShowCategories }) => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility
  const [showMenCategories, setShowMenCategories] = useState(false); // State for Men categories
  const [showWomenCategories, setShowWomenCategories] = useState(false); // State for Women categories
  const searchRef = useRef(null);
  const dropdownRef = useRef(null); // Ref for dropdown
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSearchActive, setMobileSearchActive] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsSearchActive(false);
        setIsDropdownOpen(false); // Close dropdown when clicking outside
        setShowMenCategories(false);
        setShowWomenCategories(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const categories = {
    Men: [
      "Lifestyle Shoes",
      "Basketball Shoes",
      "Running Shoes",
      "Training Shoes",
    ],
    Women: [
      "Lifestyle Shoes",
      "Basketball Shoes",
      "Running Shoes",
      "Training Shoes",
    ],
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    console.log("Cart clicked in Header");
    onShowCart();
  };

  const handleCategoryClick = (gender, category) => {
    onShowCategories(gender, category);
    setIsDropdownOpen(false);
    setShowMenCategories(false);
    setShowWomenCategories(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full flex justify-center items-center mt-8">
      <header
        className="flex items-center justify-between bg-white shadow-lg"
        style={{
          width: "90vw",
          maxWidth: "2560px", // Match the max-width of the hero section
          borderRadius: "30px",
          height: "80px",
          padding: "0 20px",
        }}
      >
        {/* Left section: Hamburger menu for mobile and tablets, Navigation for desktop */}
        <div className="flex-1 flex items-center justify-start">
          <HamburgerIcon
            onClick={toggleMobileMenu}
            className="lg:hidden"
            style={{
              width: "32px",
              height: "32px",
            }}
          >
            <div />
            <div />
            <div />
          </HamburgerIcon>
          <nav className="hidden lg:flex items-center space-x-6">
            <Link
              to="new-drops"
              smooth={true}
              duration={500}
              className="font-semibold text-gray-800 hover:text-[#2998ef] transition duration-300 whitespace-nowrap"
              style={{ fontSize: "16px" }}
            >
              New Drops 🔥
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button
                className="font-semibold text-gray-800 hover:text-[#2998ef] transition duration-300 whitespace-nowrap"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                style={{ fontSize: "16px" }}
              >
                Categories ▼
              </button>
              {isDropdownOpen && (
                <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <button
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                      onClick={() => setShowMenCategories(!showMenCategories)}
                    >
                      Men
                    </button>
                    {showMenCategories && (
                      <div className="pl-4">
                        {categories.Men.map((category) => (
                          <button
                            key={category}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                            onClick={() => handleCategoryClick("Men", category)}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    )}
                    <button
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                      onClick={() =>
                        setShowWomenCategories(!showWomenCategories)
                      }
                    >
                      Women
                    </button>
                    {showWomenCategories && (
                      <div className="pl-4">
                        {categories.Women.map((category) => (
                          <button
                            key={category}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                            onClick={() =>
                              handleCategoryClick("Women", category)
                            }
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Center section: Logo */}
        <div
          onClick={onLogoClick}
          className="flex-shrink-0 flex justify-center items-center"
        >
          <img
            src={`${process.env.PUBLIC_URL}/Logo.png`}
            alt="KICKS Logo"
            style={{
              height: "48px",
              width: "auto",
              objectFit: "contain",
            }}
          />
        </div>

        {/* Right section: Cart and user buttons */}
        <div className="flex-1 flex items-center justify-end space-x-4">
          <div className="relative hidden lg:flex items-center" ref={searchRef}>
            <button
              onClick={() => setIsSearchActive(!isSearchActive)}
              className="rounded-full focus:outline-none"
              style={{ padding: "8px" }}
            >
              <UilSearch
                style={{
                  width: "24px",
                  height: "24px",
                }}
              />
            </button>
            {isSearchActive && (
              <input
                type="text"
                className="border rounded-full absolute right-0 top-full mt-2"
                style={{
                  padding: "8px 16px 8px 40px",
                  width: "200px",
                  fontSize: "14px",
                }}
                placeholder="Search..."
                onBlur={() => setIsSearchActive(false)}
              />
            )}
          </div>
          <MobileCartButton onClick={handleCartClick} className="lg:p-2">
            <UilShoppingCart className="w-8 h-8 lg:w-6 lg:h-6" />
            <span
              className="absolute bg-orange-500 text-white rounded-full flex items-center justify-center"
              style={{
                top: "0",
                right: "0",
                width: "20px",
                height: "20px",
                fontSize: "12px",
              }}
            >
              {cartCount}
            </span>
          </MobileCartButton>
          <button
            className="hidden lg:flex items-center rounded-full focus:outline-none"
            style={{ padding: "8px" }}
          >
            <UilUser
              style={{
                width: "24px",
                height: "24px",
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <MobileMenu open={isMobileMenuOpen}>
        <CloseButton onClick={toggleMobileMenu}>&times;</CloseButton>
        <div className="p-4 w-full">
          <Link
            to="new-drops"
            smooth={true}
            duration={500}
            className="block py-6 text-xl font-bold" // Increased top padding
            onClick={toggleMobileMenu}
          >
            New Drops 🔥
          </Link>
          <div className="py-6">
            {" "}
            {/* Increased top padding */}
            <button
              className="text-xl font-bold"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Categories ▼
            </button>
            {isDropdownOpen && (
              <div className="mt-4">
                {" "}
                {/* Increased top margin */}
                <button
                  className="block py-3 w-full text-lg font-bold" // Increased padding
                  onClick={() => setShowMenCategories(!showMenCategories)}
                >
                  Men
                </button>
                {showMenCategories && (
                  <div>
                    {categories.Men.map((category) => (
                      <button
                        key={category}
                        className="block py-3 w-full text-base font-semibold" // Increased padding
                        onClick={() => {
                          handleCategoryClick("Men", category);
                          toggleMobileMenu();
                        }}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                )}
                <button
                  className="block py-3 w-full text-lg font-bold" // Increased padding
                  onClick={() => setShowWomenCategories(!showWomenCategories)}
                >
                  Women
                </button>
                {showWomenCategories && (
                  <div>
                    {categories.Women.map((category) => (
                      <button
                        key={category}
                        className="block py-3 w-full text-base font-semibold" // Increased padding
                        onClick={() => {
                          handleCategoryClick("Women", category);
                          toggleMobileMenu();
                        }}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="py-6">
            {" "}
            {/* Increased top padding */}
            <button
              className="text-xl font-bold flex items-center justify-center w-full"
              onClick={() => setMobileSearchActive(!mobileSearchActive)}
            >
              <UilSearch
                style={{ width: "24px", height: "24px", marginRight: "8px" }}
              />
              Search
            </button>
            {mobileSearchActive && (
              <input
                type="text"
                className="mt-4 w-full border rounded-full px-4 py-3 text-center" // Increased padding
                placeholder="Search..."
              />
            )}
          </div>
          <button className="py-6 text-xl font-bold flex items-center justify-center w-full">
            {" "}
            {/* Increased top padding */}
            <UilUser
              style={{ width: "24px", height: "24px", marginRight: "8px" }}
            />
            User
          </button>
        </div>
      </MobileMenu>
    </div>
  );
};

export default Header;
