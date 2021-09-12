import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import axios from "axios";

const SUB_CATEGORY_URL =
  "http://apolis-grocery.herokuapp.com/api/subcategory/";

const SubCategory = (props) => {
  const params = useParams();
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    let catId = params.catId;
    
    axios
      .get(`${SUB_CATEGORY_URL + catId}`)
      .then((response) => setSubCategories(response.data.data))
      .catch((error) => console.log(error));
  },[]);

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
