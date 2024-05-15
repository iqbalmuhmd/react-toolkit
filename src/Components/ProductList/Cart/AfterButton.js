import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../../../redux/Cart";
import "./CartButton.css";

const AfterButton = ({ cartCount }) => {
  const dispatch = useDispatch();
  return (
    <div className="after-cart">
      <button
        className="cart-counter-button"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <div className="cart-count">{cartCount}</div>
      <button
        className="cart-counter-button"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
    </div>
  );
};

export default AfterButton;
