import React, { useEffect, useState } from 'react';
import './CartItem.css'
import {MdDeleteOutline} from 'react-icons/md'

const CartItem = ({item, handleQuantity, removeItem}) => {
    const [product, setProduct] = useState(item);

    const handleDecrement = () => {
        const newState = {...product, quantity: product.quantity - 1};

        if(product.quantity > 1) {
            handleQuantity(product.quantity - 1, product.id);
            setProduct(newState);
        }        
    }

    const handleIncrement = () => {
        const newState = {...product, quantity: product.quantity + 1};
        
        if(product.quantity < 10) {
            handleQuantity(product.quantity + 1, product.id);
            setProduct(newState);
        }
    }

    const handleDelete = () => {
        removeItem(product.id);
    }

    return (  
        <>
            <div className="cart-item-container">
                <div className="cart-item-info">
                    <div className="cart-item-icon">
                        <img src={product.img} alt={product.nome} />
                    </div>
                    <div className="cart-item-info-text">
                        <div className="cart-item-name">
                            <p>{product.name}</p>
                            <MdDeleteOutline onClick={handleDelete}/>
                        </div>
                        <div className="cart-item-size">
                            <p>Tamanho: {product.size}</p>
                        </div>
                    </div>
                </div>
                <div className="cart-item-quantity-price">
                    <div className="cart-item-qtt-selection">
                        <button onClick={handleDecrement}>-</button>
                        <input type='number' value={product.quantity} readOnly='readonly'></input>
                        <button onClick={handleIncrement}>+</button>
                    </div>
                    <p>R$ {(product.price * product.quantity).toFixed(2)}</p>
                </div>
            </div>
        </>
    );
}
 
export default CartItem;