import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import "./Home.css";
const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

 

    return (
        <div className='container'>
           <div className='products'>
           {
                data.map(product => <Card product={product} key={product.id}></Card>)
            }
           </div>
           <div className="orderSummary">
            <h3>Order Summary</h3>
            <p>Selected Items: 4</p>
            <p>Total Price: 4</p>
            <p>Shipping: 4</p>
            <p>Tax: 4</p>
            <p>Grand Total: 4</p>
           </div>
        </div>
    );
};

export default Home;