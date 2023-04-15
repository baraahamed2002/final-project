import React from 'react'

import { useDispatch } from "react-redux";
import PlatsDisponibles from "../PlatsDisponibles";
import { Add } from "../../../store/cartSlice";
const MealItem = (props) => {
  const dispatch = useDispatch();
  return (
    <li className="list">
      <div>
        <h2> {props.name}</h2>
      </div>
      <div className='image'>{props.image}</div>
      <div className="name"> {props.name}</div>
      <div className="price">{props.pice}</div>

      <button
        onClick={() => {
          dispatch(
            Add({
              image: props.image,
              name: props.name,
              price: props.price,
              
              
            })
          );
        }}
      >
        Add to cart
      </button>
    </li>
  );
};
export default MealItem;
