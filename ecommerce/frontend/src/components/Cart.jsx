import React from "react";

export default function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div style={{ border: '1px solid gray', padding: '10px', marginTop: '20px' }}>
      <h3>Cart</h3>
      {cart.length === 0 ? <p>Cart is empty</p> :
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price} x {item.quantity || 1}
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
      }
      <h4>Total: ${total.toFixed(2)}</h4>
    </div>
  );
}
