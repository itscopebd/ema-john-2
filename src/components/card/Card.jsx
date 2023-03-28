import React from 'react';
import "./Card.css";
const Card = (props) => {
   const {name,price,ratings,seller,img}=props.product;
   const addToCardHandler=(product)=>{
    console.log(product)
   }
    return (
      
         <div className="card">
         <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>Price: ${price}</h4>
            <h5>Manufacturer: {seller}</h5>
            <h6>Rating: {ratings}</h6>
            <button onClick={()=>addToCardHandler(props)}>Add To Card</button>
         </div>

    );
};

export default Card;