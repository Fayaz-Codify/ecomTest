import React from "react";

export default function OrderConfirmation({ order }) {
  if (!order) {
    return <p>No order found.</p>;
  }

  const items = order.order_items || [];

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Thank you for your order, {order.customer_name}!</h2>

      <p>
        Order ID: <strong>{order.id}</strong>
      </p>
      <p>Email: {order.customer_email}</p>

      <h3>Order Summary:</h3>

      {items.length === 0 ? (
        <p>No items found for this order.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={thStyle}>Product</th>
              <th style={{ ...thStyle, textAlign: "center" }}>Qty</th>
              <th style={{ ...thStyle, textAlign: "right" }}>Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td style={tdStyle}>
                  {item.product?.name || "Unknown Product"}
                </td>
                <td style={{ ...tdStyle, textAlign: "center" }}>
                  {item.quantity}
                </td>
                <td style={{ ...tdStyle, textAlign: "right" }}>
                  ${Number(item.price).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <h3 style={{ textAlign: "right", marginTop: "15px" }}>
        Total: ${Number(order.total).toFixed(2)}
      </h3>
    </div>
  );
}

const thStyle = {
  borderBottom: "1px solid #ddd",
  padding: "8px",
  textAlign: "left",
};

const tdStyle = {
  padding: "8px",
};
