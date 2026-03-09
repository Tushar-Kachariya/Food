import React, { useContext } from 'react'
import { StoreContext } from '../../componetes/context/StoreContext'
import './PlaceOrder.css'

export default function PlaceOrder() {

  const { getTotalCartAmount } = useContext(StoreContext);

  const deliveryFee = 2;
  const subTotal = getTotalCartAmount();
  const total = subTotal + deliveryFee;

  return (
    <form className="place-order">

      {/* LEFT - DELIVERY INFO */}
      <div className="place-order-right">
        <p className="title">Delivery Information</p>

        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>

        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Street" />

        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>

        <div className="multi-fields">
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country" />
        </div>

        <input type="text" placeholder="Phone" />
      </div>

      {/* RIGHT - CART TOTAL */}
      <div className="place-order-left">
        <div className="cart-total">
          <h2>Cart Total</h2>

          <div className="cart-total-details">
            <p>Sub Total</p>
            <p>{`₹${Number(subTotal).toFixed(2)}`}</p>
          </div>

          <hr />

          <div className="cart-total-details">
            <p>Delivery Fees</p>
            <p>{`₹${Number(deliveryFee).toFixed(2)}`}</p>
          </div>

          <hr />

          <div className="cart-total-details">
            <b>Total</b>
            <b>{`₹${Number(total).toFixed(2)}`}</b>
          </div>

          <button type="submit">Proceed to Payment</button>
        </div>
      </div>

    </form>
  )
}
