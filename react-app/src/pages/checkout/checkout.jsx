import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import './checkout.css';
import '../../App.css';
import CheckoutItem from '../../components/CheckoutItem';
import { useNavigate } from 'react-router-dom';

const Checkout = ({headerUser}) => {
    // const items = [
    //     {
    //         id: 2,
    //         name: 'Ultraboost',
    //         price: 1000.00,
    //         img: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Tenis_Ultraboost_22_Preto_GZ0127_01_standard.jpg',
    //         size: 40,
    //         quantity: 3
    //     },
    //     {
    //         id: 3,
    //         name: 'Air Max',
    //         price: 890.99,
    //         img: 'https://static.dafiti.com.br/p/Nike-T%C3%AAnis-Nike-Air-Max-SC-Masculino-8782-7606269-1-zoom.jpg',
    //         size: 40,
    //         quantity: 2
    //     }
    // ];

    const items = headerUser.cart;

    let total = 0;

    const [card, setCard] = useState({
        number: '',
        date: '',
        cvv: ''
    })

    const handleNumber = (e) => {
        const newState = {...card, number: e.target.value};
        setCard(newState)
    }

    const handleDate = (e) => {
        const newState = {...card, date: e.target.value};
        setCard(newState);
    }

    const handleCVV = (e) => {
        const newState = {...card, cvv: e.target.value};
        setCard(newState);
    }

    const navigate = useNavigate();

    return (  
        <>
            <Header user={headerUser} logged={headerUser.logged}/>
            <div className="container">
                <div className="payment-card">
                    <h3>Digite os detalhes do pagamento</h3>
                    <span>Número do Cartão</span>
                    <input value={card.number} onChange={handleNumber} type='number' placeholder='Card Number'></input>
                    <span>Validade</span>
                    <input value={card.date} onChange={handleDate} type='month'></input>
                    <span>Código de Segurança</span>
                    <input value={card.cvv} onChange={handleCVV} type='text' placeholder='CVV' pattern='[0-9]{3}'></input>
                </div>
                <div className="checkout-items">
                    <h3>Itens da compra</h3>
                    <ul>
                        {items.map(item => {
                            let aux = 0;
                            console.log(headerUser)
                            item.sizes.map(itemSize => {
                                total += itemSize.stock * item.price
                                aux += parseInt(itemSize.stock)
                            })
                            return <CheckoutItem product={item} quantity={aux}/>;
                        })}
                    </ul>
                    <div className="place-order">
                        <h3>Total: R${total}</h3>
                        <button onClick={() => {
                            if(card.number != '' && card.date != '' && card.cvv != '') {
                                alert("Compra realizada com sucesso");
                                setTimeout(() => {
                                    navigate('/')
                                }, 500);
                            } else {
                                alert('Digite os dados corretos do cartão')
                            }
                        }}><span>Finalizar Compra</span></button>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Checkout;