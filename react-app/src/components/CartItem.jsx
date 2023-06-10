import React, { useEffect, useState } from 'react';
import './CartItem.css'
import {MdDeleteOutline} from 'react-icons/md'

const CartItem = ({item, handleQuantity}) => {
    const [product, setProduct] = useState(item);
    console.log(product)

    const [num, setNum] = useState(0);

    const handleDecrement = () => {
        let aux = product;
        if(aux.quantity > 1)
            aux.quantity--;
        setProduct(aux);
        handleQuantity(aux.quantity, item);
        setNum(prevNum => prevNum - 1);
    }

    useEffect(() => {
        console.log(product);
        console.log(num);
    })

    const handleIncrement = () => {
        let aux = product;
        if(aux.quantity < 10)
            aux.quantity++;
        setProduct(aux);
        handleQuantity(aux.quantity, item);
        setNum(prevNum => prevNum + 1);
    }

    return (  
        <>
            <span>{product.id}</span>
            <div className="cart-item-container">
                <div className="cart-item-info">
                    <div className="cart-item-icon">
                        <img src={product.img} alt={product.nome} />
                    </div>
                    <div className="cart-item-info-text">
                        <div className="cart-item-name">
                            <p>{product.name}</p>
                            <MdDeleteOutline />
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