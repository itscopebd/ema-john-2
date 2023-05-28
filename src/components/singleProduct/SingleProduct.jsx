import React from 'react';
import "./SingleProduct.css";
const SingleProduct = (props) => {

    const {name,price,ratings,seller,img}=props.product;
    const addToCardHandler=props.addToCardHandler;
   
    return (
      
         <div className="product">
         <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>Price: ${price}</h4>
            <h5>Manufacturer: {seller}</h5>
            <h6>Rating: {ratings}</h6>
            <button onClick={()=>addToCardHandler(props.product)}>Add To Card</button>
         </div>

    );
};

export default SingleProduct;