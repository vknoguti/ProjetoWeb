import React from 'react';
import './CheckoutItem.css';

const CheckoutItem = ({product, quantity}) => {
    console.log(product.id);
    return (  
        <li key={product.id} className='checkout-item'>
            <div className='checkout-item-img'>
                <img src={product.img} alt={product.name} />
            </div>
            <div className="checkout-item-name">
                <p>{product.name}</p>
            </div>
            <div className="checkout-item-quantity">
                <p>x{quantity}</p>
            </div>
            <div className="checkout-item-price">
                <p>Total: R${(product.price * quantity).toFixed(2)}</p>
            </div>
        </li>
    );
}
 
export default CheckoutItem;