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
                </div>
            </Link>
            <p>Masculino</p>
            <Link className='product-link' to={`/product/${item.id}`}>
                <h3>{item.model}</h3>
            </Link>
            <span>R${(parseFloat(item.price)).toFixed(2)}</span>
        </section>
    );
}
 
export default Product;