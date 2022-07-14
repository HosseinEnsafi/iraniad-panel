import { useState } from "react";
import ProductContext from "./ProductContext";

const ProductProvider = (props) => {
  const [amount, setAmount] = useState();

  return (
    <ProductContext.Provider value={(amount, setAmount)}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
