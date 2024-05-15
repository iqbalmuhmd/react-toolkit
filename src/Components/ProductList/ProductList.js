import React, { useState } from "react";
import "./ProductList.css";
import products from "../../api/product.json";
import BeforeButton from "./Cart/BeforeButton";
import AfterButton from "./Cart/AfterButton";

const ProductList = () => {
  const [count, setCount] = useState(0);

  const addToCart = () => {
    setCount(count + 1);
  };

  return (
    <section className="container">
      {products?.map((product, key) => (
        <div className="product-container" key={key}>
          <img src={product?.image} alt="" />
          <h3>{product?.title}</h3>
          {count > 0 ? <AfterButton /> : <BeforeButton addToCart={addToCart} />}
        </div>
      ))}
    </section>
  );
};

export default ProductList;
