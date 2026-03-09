import React, { useContext } from "react";
import { StoreContext } from "../../componetes/context/StoreContext";
import "./PlaceOrder.css";
import { useNavigate } from "react-router-dom";

export default function PlaceOrder() {
  const { getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  const deliveryFee = 2;
  const subTotal = getTotalCartAmount();
  const total = subTotal + deliveryFee;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Success message
    alert("Order placed successfully! 🎉");

    // Redirect after OK
    navigate("/");
  };

  return (
    <form className="place-order" onSubmit={handleSubmit}>
      
      {/* LEFT - DELIVERY INFO */}
      <div className="place-order-right">
        <p className="title">Delivery Information</p>

        <div className="multi-fields">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>

        <input type="email" placeholder="Email Address" required />
        <input type="text" placeholder="Street" required />

        <div className="multi-fields">
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="State" required />
        </div>

        <div className="multi-fields">
          <input type="text" placeholder="Zip Code" required />
          <input type="text" placeholder="Country" required />
        </div>

        <input type="text" placeholder="Phone" required />
      </div>

      {/* RIGHT - CART TOTAL */}
      <div className="place-order-left">
        <div className="cart-total">
          <h2>Cart Total</h2>

          <div className="cart-total-details">
            <p>Sub Total</p>
            <p>₹{Number(subTotal).toFixed(2)}</p>
          </div>

          <hr />

          <div className="cart-total-details">
            <p>Delivery Fees</p>
            <p>₹{Number(deliveryFee).toFixed(2)}</p>
          </div>

          <hr />

          <div className="cart-total-details">
            <b>Total</b>
            <b>₹{Number(total).toFixed(2)}</b>
          </div>

          <button type="submit">Proceed to Payment</button>
        </div>
      </div>

    </form>
  );
}