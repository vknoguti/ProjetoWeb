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
        },
        {
            id: 4,
            name: 'Air Jordan',
            price: 1019.99,
            img: 'https://imgnike-a.akamaihd.net/768x768/016511IN.jpg',
            size: 40,
            quantity: 1
        }
    ]);

    const removeItem = (id) => {
        const newState = items.filter(obj => {
            if (obj.id != id) return obj; 
        })
        
        setItems(newState);
    }
    
    const handleQuantity = (qtt, id) => {       
        const newState = items.map(obj => {
            if(obj.id == id) {
                return {...obj, quantity: qtt}
            } 

            return obj;
        })

        setItems(newState);
    }

    const [total, setTotal] = useState(0);

    const calcTotal = () => {
        let tmpTotal = 0;
        for(let i = 0; i < items.length; i++) {
            tmpTotal += items[i].price * items[i].quantity;
        }
        setTotal(tmpTotal);
    }

    const calcCart = () => {
        const t = items.map(item => {
            console.log(item);
            return <CartItem item={item} handleQuantity={handleQuantity} removeItem={removeItem} />
        })

        return t;
    }

    useEffect(() => {
        calcTotal();
    })
    
    if(items.length < 1) {
        return (
            <>
                <Header />
                <div className="container">
                    <div className="empty-content">
                        <div className="empty-message">Your cart is currently empty</div>
                        <Link to='/'>
                            <button className='empty-button'>Return to shop</button>
                        </Link>
                    </div>
                </div>
                <Footer />
            </>
        )
    } else {
        return (
            <>
                <Header />
                <div className="container">
                    <div className="cart-content">
                        <div className="cart-items">
                            <h3>Meu Carrinho</h3>
                            <div className="cart-items-list">
                                {
                                    calcCart()
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
                </div>
                <Footer />
            </>
        )
    }
}
 
export default Cart;