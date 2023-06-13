import React from 'react';
import './Product.css';
import '../App.css';
import { Link } from 'react-router-dom';

const Product = ({item}) => {
    return (  
        <section className="product">
            <Link className='product-link' to={`/product/${item.id}`}>
                <div className="icon">
                    <img src={item.image} alt='Ultraboost Preto'></img>
                    {/* <video src={item.image} autoPlay loop></video> */}
                </div>
            </Link>
            <div className="product-infos">

                <Link className='product-link' to={`/product/${item.id}`}>
                    <p>{item.brand}</p>
                    <h3>{item.model}</h3>
                </Link>
                <span>R${(parseFloat(item.price)).toFixed(2)}</span>
            </div>
        </section>
    );
}
 
export default Product;