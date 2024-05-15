import React from "react";
import "./CartButton.css";

const BeforeButton = ( addToCart ) => {
  return (
    <div className="before-cart">
      <button className="add-cart-button" onClick={addToCart}>Add To Cart</button>
    </div>
  );
};

export default BeforeButton;
