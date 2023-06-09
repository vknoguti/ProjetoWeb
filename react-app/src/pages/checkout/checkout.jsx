import React from 'react';
import Header from '../../components/Header';
import './checkout.css';
import '../../App.css';
import CheckoutItem from '../../components/CheckoutItem';

const Checkout = () => {
    const items = [
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
    ];

    let total = 0;

    return (  
        <>
            <Header />
            <div className="container">
                <div className="payment-card">
                    <h3>Digite os detalhes do pagamento</h3>
                    <span>Número do Cartão</span>
                    <input type='number' placeholder='Card Number'></input>
                    <span>Validade</span>
                    <input type='month'></input>
                    <span>Código de Segurança</span>
                    <input type='text' placeholder='CVV' pattern='[0-9]{3}'></input>
                </div>
                <div className="checkout-items">
                    <h3>Itens da compra</h3>
                    <ul>
                        {items.map(item => {
                            total += item.price * item.quantity;
                            return <CheckoutItem product={item} />
                        })}
                    </ul>
                    <div className="place-order">
                        <h3>Total: R${total}</h3>
                        <button><span>Finalizar Compra</span></button>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Checkout;