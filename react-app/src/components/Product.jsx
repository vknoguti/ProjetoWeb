import React from 'react';
import './Product.css';
import '../App.css';
import { Link } from 'react-router-dom';

const Product = ({item}) => {
    return (  
        <section className="product">
            <Link className='product-link' to={`/product/${item.id}`}>
                <div className="icon">
                    <img src={item.img} alt='Ultraboost Preto'></img>
                </div>
            </Link>
            <p>Masculino</p>
            <Link className='product-link' to={`/product/${item.id}`}>
                <h3>{item.name}</h3>
            </Link>
            <span>R${(item.price).toFixed(2)}</span>
        </section>
    );
}
 
export default Product;