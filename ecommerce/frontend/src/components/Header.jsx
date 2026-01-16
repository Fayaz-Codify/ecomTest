import React from "react";

export default function Header({ darkMode, setDarkMode, cart }) {
  return (
    <header style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1>E-Commerce</h1>
      <div>
        <button onClick={() => setDarkMode(!darkMode)} style={{ marginRight: '10px' }}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <span>Cart: {cart.length} items</span>
      </div>
    </header>
  );
}
