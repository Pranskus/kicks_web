import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import { UilShoppingCart, UilUser } from "./IconWrappers";
import styled from "styled-components";

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

interface MobileMenuProps {
  open: boolean;
}

const MobileMenu = styled.div<MobileMenuProps>`
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
  padding-top: 60px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 40px;
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

const AnimatedFire = styled.span`
  display: inline-block;
  transition: transform 0.3s ease;

  .new-drops-link:hover & {
    animation: burn 0.8s infinite;
    transform-origin: bottom center;
    filter: brightness(1.1);
  }

  @keyframes burn {
    0% {
      transform: scale(1) rotate(0deg);
      filter: brightness(1);
    }
    25% {
      transform: scale(1.1) rotate(-3deg);
      filter: brightness(1.2);
    }
    50% {
      transform: scale(1.15) rotate(3deg);
      filter: brightness(1.3);
    }
    75% {
      transform: scale(1.1) rotate(-2deg);
      filter: brightness(1.2);
    }
    100% {
      transform: scale(1) rotate(0deg);
      filter: brightness(1);
    }
  }
`;

const FloatingCartButton = styled.button`
  &.cart-added {
    animation: cartBounce 0.5s cubic-bezier(0.36, 0, 0.66, -0.56) forwards;
  }

  @keyframes cartBounce {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
  }
`;

interface HeaderProps {
  onLogoClick: () => void;
  cartCount: number;
  onShowCart: () => void;
  onShowCategories: (gender: string, category: string) => void;
  onNewDropsClick: () => void;
  currentPage?: string;
  onGoBack?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  onLogoClick,
  cartCount,
  onShowCart,
  onShowCategories,
  onNewDropsClick,
  currentPage,
  onGoBack,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileCategoriesOpen, setIsMobileCategoriesOpen] = useState(false);
  const [showMenCategories, setShowMenCategories] = useState(false);
  const [showWomenCategories, setShowWomenCategories] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showFloatingCart, setShowFloatingCart] = useState(false);
  const [isCartAnimating, setIsCartAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowFloatingCart(scrollPosition > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (cartCount > 0) {
      setIsCartAnimating(true);
      setTimeout(() => setIsCartAnimating(false), 500);
    }
  }, [cartCount]);

  const categories = {
    Men: [],
    Women: [],
  };

  const handleCartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Cart clicked in Header");
    onShowCart();
  };

  const handleCategoryClick = (gender: string): void => {
    onShowCategories(gender, "all");
    setIsDropdownOpen(false);
    setShowMenCategories(false);
    setShowWomenCategories(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNewDropsClick = () => {
    onNewDropsClick();
    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }
  };

  return (
    <>
      <div className="w-full flex justify-center items-center mt-8">
        <header
          className="flex items-center justify-between bg-white shadow-lg"
          style={{
            width: "90vw",
            maxWidth: "2560px",
            borderRadius: "30px",
            height: "80px",
            padding: "0 20px",
          }}
        >
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
                className="new-drops-link font-semibold text-gray-800 hover:text-[#2998ef] transition duration-300 whitespace-nowrap"
                style={{ fontSize: "16px", cursor: "pointer" }}
                onClick={handleNewDropsClick}
              >
                New Drops <AnimatedFire>🔥</AnimatedFire>
              </Link>
              <div className="relative" ref={dropdownRef}>
                <button
                  className="font-semibold text-gray-800 hover:text-[#2998ef] transition duration-300 whitespace-nowrap"
                  onClick={() => {
                    console.log("Categories button clicked");
                    setIsDropdownOpen((prev) => !prev);
                  }}
                  style={{ fontSize: "16px" }}
                >
                  Categories
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
                        onClick={() => handleCategoryClick("Men")}
                      >
                        Men
                      </button>
                      {showMenCategories && (
                        <div className="pl-4">
                          {categories.Men.map((category) => (
                            <button
                              key={category}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                              onClick={() => handleCategoryClick("Men")}
                            >
                              {category}
                            </button>
                          ))}
                        </div>
                      )}
                      <button
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                        onClick={() => handleCategoryClick("Women")}
                      >
                        Women
                      </button>
                      {showWomenCategories && (
                        <div className="pl-4">
                          {categories.Women.map((category) => (
                            <button
                              key={category}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                              onClick={() => handleCategoryClick("Women")}
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

          <div className="flex-1 flex items-center justify-end space-x-4">
            <MobileCartButton onClick={handleCartClick} className="lg:p-2">
              <UilShoppingCart className="w-8 h-8 lg:w-6 lg:h-6 cart-icon" />
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
          </div>
        </header>

        <MobileMenu open={isMobileMenuOpen}>
          <CloseButton onClick={toggleMobileMenu}>&times;</CloseButton>
          <div className="p-4 w-full">
            <Link
              to="new-drops"
              smooth={true}
              duration={500}
              className="new-drops-link block py-6 text-xl font-bold"
              onClick={handleNewDropsClick}
              style={{ cursor: "pointer" }}
            >
              New Drops <AnimatedFire>🔥</AnimatedFire>
            </Link>
            <div className="py-6">
              <button
                className="text-xl font-bold"
                onClick={() => {
                  setIsMobileCategoriesOpen((prev) => !prev);
                }}
              >
                Categories
              </button>
              {isMobileCategoriesOpen && (
                <div className="mt-4">
                  <button
                    className="block py-3 w-full text-lg font-bold"
                    onClick={() => {
                      console.log("Men button clicked");
                      onShowCategories("Men", "All");
                      toggleMobileMenu();
                      setIsMobileCategoriesOpen(false);
                    }}
                  >
                    Men
                  </button>
                  <button
                    className="block py-3 w-full text-lg font-bold"
                    onClick={() => {
                      console.log("Women button clicked");
                      onShowCategories("Women", "All");
                      toggleMobileMenu();
                      setIsMobileCategoriesOpen(false);
                    }}
                  >
                    Women
                  </button>
                </div>
              )}
            </div>
          </div>
        </MobileMenu>
      </div>

      <div
        className={`fixed bottom-8 right-8 transition-all duration-300 transform z-[9999] ${
          showFloatingCart && currentPage !== "cart"
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0"
        }`}
      >
        <FloatingCartButton
          onClick={handleCartClick}
          className={`bg-stone-800 p-4 rounded-full shadow-lg hover:bg-stone-900 transition-colors duration-300 ${
            isCartAnimating ? "cart-added" : ""
          }`}
        >
          <UilShoppingCart className="w-6 h-6 text-white" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
              {cartCount}
            </span>
          )}
        </FloatingCartButton>
      </div>
    </>
  );
};

export default Header;
