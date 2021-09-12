import React from "react";

const ProductItem = (props) => {
  const { productName, price, mrp, image, unit, description } = props.product;
  return (
    <div class="col-sm-4">
      <div class="card">
        <img src={'http://rjtmobile.com/grocery/images/'+ image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{ productName }</h5>
          <p>{ unit }</p>
          <h2>{ price } <span style={{ fontSize: '18px', color: 'grey' }}><del>{ mrp }</del></span></h2>
          <p class="card-text">{ description }</p>
          <a href="#" class="btn btn-primary">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProductItem;
