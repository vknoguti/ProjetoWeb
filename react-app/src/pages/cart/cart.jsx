import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './cart.css';
import { Link } from 'react-router-dom';
import CartItem from '../../components/CartItem';

const Cart = () => {
    const [items, setItems] = useState([
        {
            id: 2,
            name: 'Ultraboost',
            price: 1000.00,
            img: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Tenis_Ultraboost_22_Preto_GZ0127_01_standard.jpg',
            size: 40,
            quantity: 3
        },
        {
            id: 3,
            name: 'Air Max',
            price: 890.99,
            img: 'https://static.dafiti.com.br/p/Nike-T%C3%AAnis-Nike-Air-Max-SC-Masculino-8782-7606269-1-zoom.jpg',
            size: 40,
            quantity: 2
        }
    ]);
    
    const handleQuantity = (quantity, item) => {
        let aux = items;
        aux.map(a => {
            if(a === item) {
                a.quantity = quantity;
            }
        })
        setItems(aux);
    }

    let total = 0;

    const calcCart = (items) => {
        if(items.length < 1)
            return (
                <>
                    <div className="empty-content">
                        <div className="empty-message">Your cart is currently empty</div>
                        <Link to='/'>
                            <button className='empty-button'>Return to shop</button>
                        </Link>
                    </div>
                </>
            )
        else 
            for(let i = 0; i < items.length; i++) {
                total += items[i].price * items[i].quantity;
            }
            return (
                <>
                    <div className="cart-content">
                        <div className="cart-items">
                            <h3>Meu Carrinho</h3>
                            <div className="cart-items-list">
                                {
                                    items.map(item => {
                                        return <CartItem item={item} handleQuantity={handleQuantity} />
                                    })
                                }
                            </div>
                        </div>
                        <div className="summary">
                            <h3>Resumo da compra</h3>
                            <div className="summary-container">
                                <div className="total-container">
                                    <div>Total</div>
                                    <div>R$ {total.toFixed(2)}</div>
                                </div>
                                <div className="button-container">
                                    <Link to='/checkout'>
                                        <button className='checkout-button'>Finalizar</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
    }

    return (  
        <>
            <Header />
            <div className="container">
                {calcCart(items)}
            </div>
            <Footer />
        </>
    );
}
 
export default Cart;