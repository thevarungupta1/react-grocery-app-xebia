import React from "react";

const Item = (props) => {
  const { catName, catImage } = props.category;
  return (
    <div class="col-sm-3">
      <div class="card">
        <img src={'http://rjtmobile.com/grocery/images/'+catImage} class="card-img-top" alt={catName} />
        <div class="card-body">
          <h5 class="card-title">{catName}</h5>
          <a href="#" class="btn btn-primary btn-block">
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};
export default Item;
