import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/Cart";
import "./CartButton.css";

const BeforeButton = () => {
  const dispatch = useDispatch();
  return (
    <div className="before-cart">
      <button className="add-cart-button" onClick={() => dispatch(addToCart())}>
        Add To Cart
      </button>
    </div>
  );
};

export default BeforeButton;
