import React from 'react';
import './Product.css';
import '../App.css';
import { Link } from 'react-router-dom';

const Product = () => {
    const url = 'https://assets.adidas.com/images/w_600,f_auto,q_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Tenis_Ultraboost_22_Preto_GZ0127_01_standard.jpg';

    return (  
        <section className="product">
            <Link className='product-link' to='/product'>
                <div className="icon">
                    <img src={url} alt='Ultraboost Preto'></img>
                </div>
            </Link>
            <p>Masculino</p>
            <Link className='product-link' to='product'>
                <h3>Ultraboost</h3>
            </Link>
            <span>R$1000,00</span>
        </section>
    );
}
 
export default Product;