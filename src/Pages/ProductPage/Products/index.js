import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";

const PRODUCT_URL = "http://apolis-grocery.herokuapp.com/api/products/cat/3";
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(PRODUCT_URL)
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => console.log(error));
  });

  return (
    <div>
      <h2 className="text-center">All Products</h2>
      <div class="row">
        {
            products.map(product => <ProductItem product={product} />)
        }
      </div>
    </div>
  );
};
export default Products;
