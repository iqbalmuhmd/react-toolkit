import React from "react";
import { useSelector } from "react-redux";
import products from "../../api/product.json";
import BeforeButton from "./Cart/BeforeButton";
import AfterButton from "./Cart/AfterButton";
import "./ProductList.css";

const ProductList = () => {
  const { cartCount } = useSelector((state) => state.cart);
  console.log(cartCount, "==cart");

  return (
    <section className="container">
      {products?.map((product, key) => (
        <div className="product-container" key={key}>
          <img src={product?.image} alt="" />
          <h3>{product?.title}</h3>
          {cartCount > 0 ? (
            <AfterButton cartCount={cartCount} />
          ) : (
            <BeforeButton />
          )}
        </div>
      ))}
    </section>
  );
};

export default ProductList;
