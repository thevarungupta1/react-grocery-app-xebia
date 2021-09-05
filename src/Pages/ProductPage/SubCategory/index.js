import React, { useState, useEffect } from "react";
import axios from "axios";

const SUB_CATEGORY_URL =
  "http://apolis-grocery.herokuapp.com/api/subcategory/3";

const SubCategory = () => {
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    axios
      .get(SUB_CATEGORY_URL)
      .then((response) => setSubCategories(response.data.data))
      .catch((error) => console.log(error));
  });

  return (
    <div>
      <h2 className="text-center">Fruits and Veges</h2>
      <ul className="list-group">
        {subCategories.map((item) => (
          <li className="list-group-item">{item.subName}</li>
        ))}
      </ul>
    </div>
  );
};
export default SubCategory;
