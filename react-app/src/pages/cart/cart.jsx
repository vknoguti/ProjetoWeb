import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './cart.css';
import { Link, useNavigate } from 'react-router-dom';
import CartItem from '../../components/CartItem';

const Cart = ({headerUser, setHeaderUser}) => {
    const [items, setItems] = useState(headerUser.cart);

    const navigate = useNavigate();

    const removeItem = (id, size) => {
        const newState = items.filter(obj => {
            if (obj.id != id) return obj;
            else {
                // logica de remocao item igual, tamanho diferente
                obj.sizes = obj.sizes.map(e => {
                    if(e.size == size) {
                        return {size: e.size, stock: 0}
                    } else {
                        return {size: e.size, stock: e.stock}
                    }
                })
                if(obj.sizes.filter(e => {
                    if(e.stock > 0) return e;
                }).length > 0) return obj
            } 
        })
        const newUser = {...headerUser, cart: newState};

        setHeaderUser(newUser);

        setItems(newState);
    }
    
    const handleQuantity = (qtt, size, id) => {       
        const newState = items.map(obj => {
            if(obj.id == id) {
                return {...obj, sizes: obj.sizes.map(newSize => {
                    if(newSize.size == size) return{ size: newSize.size, stock: qtt};
                    else return newSize
                })}
            } 

            return obj;
        })

        console.log(newState)

        setItems(newState);
    }

    const handleCheckout = () => {
        if(headerUser.logged) navigate('/checkout')
        else {
            alert('É necessário estar logado em uma conta para comprar');
            navigate('/login');
        }
    }

    const [total, setTotal] = useState(0);

    const calcTotal = () => {
        let tmpTotal = 0;
        for(let i = 0; i < items.length; i++) {
            for(let j = 0; j < items[i].sizes.length; j++) {
                tmpTotal += items[i].price * items[i].sizes[j].stock;
            }
        }
        setTotal(tmpTotal);
    }

    const calcCart = () => {
        const t = items.map(item => {
            return item.sizes.map(itemSize => {
                if(itemSize.stock > 0)
                    return <CartItem key={`${item.id}.${itemSize.size}`} item={item} size={itemSize} handleQuantity={handleQuantity} removeItem={removeItem}/>
            }) 
            // <CartItem item={item} handleQuantity={handleQuantity} removeItem={removeItem} />
        })

        return t;
    }

    useEffect(() => {
        calcTotal();
    })
    
    if(items.length < 1) {
        return (
            <>
                <Header user={headerUser} logged={headerUser.logged}/>
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
                <Header user={headerUser} logged={headerUser.logged}/>
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
                                    <button onClick={handleCheckout} className='checkout-button'>Finalizar</button>
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