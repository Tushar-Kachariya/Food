import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../componetes/context/StoreContext'
import { formatINR } from '../../utils/currency'
import { useNavigate } from 'react-router-dom';

export default function Cart() {

  // ✅ CORRECT FUNCTION NAME
  const {
    cartItems = {},
    food_list = [],
    removeFromCart,
    getTotalCartAmount
  } = useContext(StoreContext);

  const navigate = useNavigate();
  const deliveryFee = 2;

  return (
    <div className='cart'>
      <div className="cart-item">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        <br />
        <hr />

        {food_list.map(item =>
          cartItems[item._id] > 0 ? (
            <div key={item._id}>
              <div className='cart-item-title cart-items-item'>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>{formatINR(item.price)}</p>
                <p>{cartItems[item._id]}</p>
                <p>{formatINR(item.price * cartItems[item._id])}</p>
                <p
                  className="corss"
                  onClick={() => removeFromCart(item._id)}
                >
                  ❌
                </p>
              </div>
              <hr />
            </div>
          ) : null
        )}
      </div>

      <div className="cart-bottam">
        <div className="cart-total">
          <h2>Cart Total</h2>

          <div className='cart-total-details'>
            <p>Sub Total</p>
            <p>{formatINR(getTotalCartAmount())}</p>
          </div>

          <hr />

          <div className='cart-total-details'>
            <p>Delivery fees</p>
            <p>{formatINR(deliveryFee)}</p>
          </div>

          <hr />

          <div className='cart-total-details'>
            <b>Total</b>
            <b>{formatINR(getTotalCartAmount() + deliveryFee)}</b>
          </div>

          <button onClick={() => navigate('/order')}>
            Process to Checkout
          </button>

          <div className="cart-promocorde">
            <p>If you have a promocode, enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Enter Promocode" />
              <button>Submit</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
