import React, { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import NewDrops from "./components/NewDrops"; // Import NewDrops
import CategoriesPage from "./components/CategoriesPage";
import ProductPage from "./components/ProductPage"; // Import the ProductPage
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import CartPage from "./components/CartPage"; // Import the CartPage
import { Product, CartItem, Category } from "./types";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartCount, setCartCount] = useState<number>(0);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState<boolean>(false); // New state to control cart visibility
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  const handleShowCategories = (gender: string, category: string): void => {
    setSelectedCategory({ gender, category });
    setCurrentPage("categories");
    window.scrollTo(0, 0);
  };

  const handleShowProduct = (product: Product): void => {
    setSelectedProduct(product);
    setCurrentPage("product");
    window.scrollTo(0, 0);
  };

  const handleAddToCart = (product: Product): void => {
    const productWithDetails: CartItem = {
      id: product.id,
      cartItemId: Date.now().toString(),
      name: product.name,
      img: product.img,
      price: parseFloat(product.price.replace(/[^0-9.-]+/g, "")),
      size: product.size || "42",
    };

    setCartItems((prevItems) => [...prevItems, productWithDetails]);
    setCartCount((prevCount) => prevCount + 1);
  };

  const handleRemoveFromCart = (cartItemId: string): void => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.cartItemId !== cartItemId)
    );
    setCartCount((prevCount) => prevCount - 1);
  };

  const handleShowCart = (): void => {
    setCurrentPage("cart");
    window.scrollTo(0, 0);
  };

  const handleLogoClick = (): void => {
    setCurrentPage("home");
    setSelectedProduct(null);
    window.scrollTo(0, 0);
  };

  const handleBuyNow = (): void => {
    setCurrentPage("cart");
    window.scrollTo(0, 0);
  };

  const handleNewDropsClick = () => {
    if (currentPage !== "home") {
      setCurrentPage("home");
      setTimeout(() => {
        const newDropsSection = document.getElementById("new-drops");
        if (newDropsSection) {
          newDropsSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  console.log("Current page:", currentPage);

  return (
    <div style={{ backgroundColor: "#e7e7e2" }}>
      <Header
        onLogoClick={handleLogoClick}
        cartCount={cartCount}
        onShowCart={handleShowCart}
        onShowCategories={handleShowCategories}
        onNewDropsClick={handleNewDropsClick}
      />
      {currentPage === "categories" && (
        <CategoriesPage
          onShowProduct={handleShowProduct}
          selectedCategory={selectedCategory?.category || ""}
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
          <HeroSection
            onShowCategories={() => handleShowCategories("All", "New Drops")}
          />
          <NewDrops
            onShowProduct={handleShowProduct}
            onShowCategories={handleShowCategories}
          />
          <Categories />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
