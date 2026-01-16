import React, { useState } from "react";
import axios from "axios";

export default function Checkout({ cart, clearCart }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(null);
  const [error, setError] = useState(null);

  const placeOrder = async () => {
    if (!name || !email || cart.length === 0) {
      return alert("Fill all fields and add items to cart.");
    }

    const items = cart.map(item => ({
      product_id: item.id,
      quantity: item.quantity || 1,
    }));

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/orders",
        {
          customer_name: name,
          customer_email: email,
          items,
        },
        {
          headers: { Accept: "application/json" },
        }
      );

      setOrderSuccess(response.data);
      clearCart();
    } catch (err) {
      console.error(err);

      if (err.response?.status === 422) {
        const messages = err.response.data.errors;
        setError(
          Object.values(messages)
            .map(arr => arr.join(", "))
            .join(" | ")
        );
      } else {
        setError("Failed to place order. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  /* =======================
     ORDER CONFIRMATION
     ======================= */
  if (orderSuccess) {
    const items = orderSuccess.order_items || [];

    return (
      <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
        <h2>Order Placed Successfully 🎉</h2>

        <p>
          Order ID: <strong>{orderSuccess.id}</strong>
        </p>

        <p>
          Total:{" "}
          <strong>
            ${Number(orderSuccess.total).toFixed(2)}
          </strong>
        </p>

        <h3>Order Items</h3>

        {items.length === 0 ? (
          <p>No items found.</p>
        ) : (
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.product?.name || "Unknown Product"} ×{" "}
                {item.quantity} = $
                {Number(item.price).toFixed(2)}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  /* =======================
     CHECKOUT FORM
     ======================= */
  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h2>Checkout</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <button
        onClick={placeOrder}
        disabled={loading}
        style={{ padding: "10px 20px", width: "100%" }}
      >
        {loading ? "Placing Order..." : "Place Order"}
      </button>
    </div>
  );
}
