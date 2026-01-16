import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("home"); // simple routing

  const addToCart = (product) => setCart([...cart, { ...product, quantity: 1 }]);
  const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));
  const clearCart = () => setCart([]);

  return (
    <div style={{ background: darkMode ? '#222' : '#fff', color: darkMode ? '#fff' : '#000', minHeight: '50vh' , width: "100vw", padding: '0px' }}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} cart={cart} />

      <div className="" style={{padding:"10px"}}>

      <button  style={{margin:"5px"}}  onClick={() => setPage("home")}>Home</button>
      <button style={{margin:"5px"}}  onClick={() => setPage("checkout")}>Checkout</button>

      {page === "home" && <Home addToCart={addToCart} />}
      {page === "checkout" && <Checkout cart={cart} clearCart={clearCart} />}
      </div>

    </div>
  );
}
