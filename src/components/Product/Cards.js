import React from "react";
import { useState } from "react";

const Cards = (props) => {

  const {image, name, price, stock, release, category, addItem} = props;
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);
 

  let dateObj =  new Date(release);
  let month = dateObj.getMonth() ;
  let year = dateObj.getFullYear();
  let day = dateObj.getDate();
  const result = `${day}/${month}/${year}`;
  // console.log(release);

  const increment = () => {
    if(count >= stock ? setDisable(true) : setCount(count + 1));
  };

  const decrement = () => {
    if(count > 0 ? setCount(count - 1) : 0);
  };
// console.log(props)
  return (
    <div className="card cards my-3">
      <div className=" image-box img-fluid ">
        <img
          src={`https://electronic-ecommerce.herokuapp.com/${image}`}
          alt="Product image"
        />
      </div>

      <div className="details my-2">
        <div
          className="btn-group buttonStyling float-end"
          role="group"
          aria-label="Basic outlined example"
        >
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={decrement}
          >
            -
          </button>
          <button type="button" className="btn btn-outline-primary">
            {count}
          </button>
          <button
            type="button"
            disabled= {disable}
            className="btn btn-outline-primary"
            onClick={increment}
          >
            +
          </button>
        </div>
      
        <p>{name}</p>
        <p>
          {price} <span className="stock"> Stocks left :{stock}</span>
        </p>

        <p>Released On :{result}</p>

        <p>{category}</p>
      </div>
      <button onClick={() => {
                 addItem(props)
                }} > Add to card</button>
    </div>
  )}


export default Cards;
