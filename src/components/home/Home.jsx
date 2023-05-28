import React, { useEffect, useState } from 'react';
import { storeLocalStorageData } from '../../utilitize/utilitize';
import Card from '../card/Card';
import SingleProduct from '../singleProduct/SingleProduct';
import "./Home.css";
const Home = () => {
    const [data, setData] = useState([]);
    const [card,setCard]=useState([])
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    const addToCardHandler=(product)=>{
        const newCard=[...card,product];
        setCard(newCard)
       storeLocalStorageData(product.id);
       console.log(product)
       }


    return (
        <div className='container'>
           <div className='products'>
           {
                data.map(product => <SingleProduct product={product} key={product.id} addToCardHandler={addToCardHandler}></SingleProduct>)
            }
           </div>
           <div className="orderSummary">
<Card card={card}></Card>

        </div>
        </div>
    );
};

export default Home;