import React, { useState, useEffect } from "react";
import axios from "axios";
import Item from "./Item";

const CATEGORY_URL = "http://apolis-grocery.herokuapp.com/api/category";

const Category = () => {
  // setting state with initial value and callback to set state value
  const [categories, setCategories] = useState([]);

  // similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    axios
      .get(CATEGORY_URL)
      .then((response) => {
        setCategories(response.data.data);
        //console.log(response.data.data)
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className="container">
      <h1 className="text-center">All Category</h1>
      <div class="row">
        {categories.map((item) => (
          <Item category={item} />
        ))}
      </div>
    </div>
  );
};
export default Category;
