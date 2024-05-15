import React, { Fragment } from "react";
import Header from "./Components/Header/Header";
import ProductList from "./Components/ProductList/ProductList";

const App = () => {
  return (    
      <Fragment>
        <Header />
        <ProductList />
      </Fragment>    
  );
};

export default App;
