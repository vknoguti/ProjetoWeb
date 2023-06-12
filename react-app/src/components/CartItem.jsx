import React, { useEffect, useState } from 'react';
import './CartItem.css'
import {MdDeleteOutline} from 'react-icons/md'
import { PRODUCTLIST } from '../productlist';

const CartItem = ({item, size, handleQuantity, removeItem}) => {
    const [product, setProduct] = useState(item);

    const handleDecrement = () => {
        if(size.stock > 1) {
            const newState = {...product, sizes: product.sizes.map(e => {
                if(e.size == size.size) return {size: e.size, stock: e.stock - 1};
                else return e
            })};

            handleQuantity(size.stock - 1, size.size, product.id);
            setProduct(newState);
        }      
    }

    const handleIncrement = () => {        
        const filterItem = PRODUCTLIST.filter(item => {
            if(item.id === product.id) return item;
        })[0];

        const filterSize = filterItem.sizes.filter(e => {
            if(size.size === e.size) return e;
        })[0];

        if(size.stock < filterSize.stock) {
            const newState = {...product, sizes: product.sizes.map(e => {
                if(e.size == size.size) return {size: e.size, stock: e.stock + 1};
                else return e
            })};

            handleQuantity(size.stock + 1, size.size, product.id);
            setProduct(newState);

        } else {
            alert('Quantidade acima do estoque')
        }
    }

    const handleDelete = () => {
        removeItem(product.id, size.size);
    }

    return (  
        <>
            <div className="cart-item-container">
                <div className="cart-item-info">
                    <div className="cart-item-icon">
                        <img src={product.img} alt={product.name} />
                    </div>
                    <div className="cart-item-info-text">
                        <div className="cart-item-name">
                            <p>{product.name}</p>
                            <MdDeleteOutline onClick={handleDelete}/>
                        </div>
                        <div className="cart-item-size">
                            <p>Tamanho: {size.size}</p>
                        </div>
                    </div>
                </div>
                <div className="cart-item-quantity-price">
                    <div className="cart-item-qtt-selection">
                        <button onClick={handleDecrement}>-</button>
                        <input type='number' value={size.stock} readOnly='readonly'></input>
                        <button onClick={handleIncrement}>+</button>
                    </div>
                    <p>R$ {(product.price * size.stock).toFixed(2)}</p>
                </div>
            </div>
        </>
    );
}
 
export default CartItem;