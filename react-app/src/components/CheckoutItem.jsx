import React from 'react';
import './CheckoutItem.css';

const CheckoutItem = ({product}) => {
    return (  
        <li className='checkout-item'>
            <div className='checkout-item-img'>
                <img src={product.img} alt={product.name} />
            </div>
            <div className="checkout-item-name">
                <p>{product.name}</p>
            </div>
            <div className="checkout-item-quantity">
                <p>x{product.quantity}</p>
            </div>
            <div className="checkout-item-price">
                <p>Total: R${product.price * product.quantity}</p>
            </div>
        </li>
    );
}
 
export default CheckoutItem;