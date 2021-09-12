import React from "react";
import { useHistory } from 'react-router-dom';

const Item = (props) => {
  const history = useHistory();
  const { catName, catImage, catId } = props.category;

  const onButtonClickHandler = () => {
    history.push(`/products/${ catId }`)
    
  }


  return (
    <div class="col-sm-3">
      <div class="card">
        <img src={'http://rjtmobile.com/grocery/images/'+catImage} class="card-img-top" alt={catName} />
        <div class="card-body">
          <h5 class="card-title">{catName}</h5>
          <button onClick={ onButtonClickHandler } href="#" class="btn btn-primary btn-block">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default Item;
