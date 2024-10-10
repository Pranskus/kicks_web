import React, { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import NewDrops from "./components/NewDrops"; // Import NewDrops
import CategoriesPage from "./components/CategoriesPage";
import ProductPage from "./components/ProductPage"; // Import the ProductPage
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import CartPage from "./components/CartPage"; // Import the CartPage

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null); // State for selected product
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false); // New state to control cart visibility
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleShowCategories = (gender, category) => {
    setSelectedCategory({ gender, category });
    setCurrentPage("categories");
    window.scrollTo(0, 0);
  };

  const handleShowProduct = (product) => {
    setSelectedProduct(product); // Set the selected product
    setCurrentPage("product"); // Update current page to product
    window.scrollTo(0, 0);
  };

  const handleAddToCart = (product) => {
    const productWithDetails = {
      id: product.id,
      name: product.name,
      img: product.img,
      price: product.price
        ? parseFloat(product.price.replace(/[^0-9.-]+/g, ""))
        : 0,
      size: "42",
      cartItemId: Date.now(), // Add a unique cartItemId
    };

    setCartItems((prevItems) => [...prevItems, productWithDetails]);
    setCartCount((prevCount) => prevCount + 1);
  };

  const handleRemoveFromCart = (cartItemId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.cartItemId !== cartItemId)
    );
    setCartCount((prevCount) => prevCount - 1);
  };

  const handleShowCart = () => {
    console.log("Show cart clicked");
    setCurrentPage("cart");
    window.scrollTo(0, 0);
  };

  const handleLogoClick = () => {
    console.log("Logo clicked in App");
    setCurrentPage("home"); // Update current page to home
    setSelectedProduct(null);
    window.scrollTo(0, 0);
  };

  const handleBuyNow = () => {
    setCurrentPage("cart");
    window.scrollTo(0, 0);
  };

  console.log("Current page:", currentPage);

  return (
    <div style={{ backgroundColor: "#e7e7e2" }}>
      <Header
        onLogoClick={handleLogoClick}
        cartCount={cartCount}
        onShowCart={handleShowCart}
        onShowCategories={handleShowCategories}
      />
      {currentPage === "categories" && (
        <CategoriesPage
          onShowProduct={handleShowProduct}
          selectedCategory={selectedCategory}
        />
      )}
      {currentPage === "product" && selectedProduct && (
        <ProductPage
          product={selectedProduct}
          onShowProduct={handleShowProduct}
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
        />
      )}
      {currentPage === "cart" && (
        <CartPage cartItems={cartItems} onRemoveItem={handleRemoveFromCart} />
      )}
      {currentPage === "home" && (
        <>
          <HeroSection onShowCategories={handleShowCategories} />
          <NewDrops
            onShowProduct={handleShowProduct}
            onShowCategories={handleShowCategories} // Add this prop
          />
          <Categories />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
