import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import "./App.css";
import { useState } from "react";

function Home() {
  const [showProductList, setShowProductList] = useState(false);

  if (showProductList) return <ProductList />;

  return (
    <div className="landing">
      <h1>🌿 Paradise Nursery</h1>
      <AboutUs />
      <button onClick={() => setShowProductList(true)}>Get Started</button>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
    </Routes>
  );
}

export default App;
