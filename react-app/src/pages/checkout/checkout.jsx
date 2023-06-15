import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import './checkout.css';
import '../../App.css';
import CheckoutItem from '../../components/CheckoutItem';
import { useNavigate } from 'react-router-dom';

const Checkout = ({results, setResults, headerUser, setHeaderUser}) => {
    const items = headerUser.cart;

    let total = 0;

    const [card, setCard] = useState({
        number: '',
        date: '',
        cvv: ''
    })

    //Listener do numero do cartão
    const handleNumber = (e) => {
        const newState = {...card, number: e.target.value};
        setCard(newState)
    }

    //Listener da validade do cartão
    const handleDate = (e) => {
        const newState = {...card, date: e.target.value};
        setCard(newState);
    }

    //Listener do código do cartão
    const handleCVV = (e) => {
        const newState = {...card, cvv: e.target.value};
        setCard(newState);
    }

    const navigate = useNavigate();

    const handleOrder = async () => {
        //Caso todos os dados do cartão tenham sido digitados, finaliza a compra com sucesso e remove do estoque a quantidade comprada
        if(card.number != '' && card.date != '' && card.cvv != '') {
            let newResults = [...results];

            console.log(newResults)
            // Percorrendo pelos items do carrinho
            headerUser.cart.map(item => {
                // Buscando pelo item no banco de dados que se refere ao do carrinho
                newResults.find((e) => {
                    // Ao encontrar o item do carrinho
                    if(e.id == item.id) {
                        // Percorre por todos os tamanhos diminuindo a quantidade em estoque
                        for(let i = 0; i < e.sizes.length; i++) {
                            e.sizes[i].stock -= item.sizes[i].stock;
                            e.sold = parseInt(e.sold);
                            e.sold += parseInt(item.sizes[i].stock);
                        }
                    }
                })
            })

            // TODO put no db atualizando o estoque e setResults para atualizar o valor do result, renderizando o result novamente resultando em um novo get dos itens
            const updateStock = newResults.map(async (item) => {
                try {
                    const response = await fetch(`http://localhost:7000/products/${item.id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(item),
                        })

                        if(response.ok) {
                            console.log('Product updated successfully');
                    
                            setResults(prevResults => {
                                const updatedResults = prevResults.map(result => {
                                if (result.id === item.id) {
                                    return item;
                                } else {
                                    return result;
                                }
                                });
                                return updatedResults;
                            });
        
                            } else {
                            console.log('Product update failed');
                            }                       
                            
                        }
                        catch (error){
                            console.log(error);
                        }
                    });
            
            console.log(updateStock);

            // Criando o objeto que será enviado como um novo pedido no banco de dados
            const order = {
                username: headerUser.name,
                address: headerUser.address,
                items: headerUser.cart
            }

            console.log(order);
            
            // Adicionando um novo pedido no banco de dados
            const createOrder = await fetch('http://localhost:7000/orders', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(order)
            }).then(() => {
                console.log('new order added');
            });

            setTimeout(createOrder, 1000)

            //Esvazia o carrinho do usuario
            const newState = {...headerUser, cart: []};
            setHeaderUser(newState);

            //Mensagem de compra realizada com sucesso e retorna a pagina inicial
            alert("Compra realizada com sucesso");
            navigate('/')

        } else { //Caso contrário, da um alerta para preencher os dados do cartão
            alert('Digite os dados corretos do cartão')
        }
    }

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
                            item.sizes.map(itemSize => {
                                total += itemSize.stock * item.price
                                aux += parseInt(itemSize.stock)
                            })
                            return <CheckoutItem product={item} quantity={aux}/>;
                        })}
                    </ul>
                    <div className="place-order">
                        <h3>Total: R${total.toFixed(2)}</h3>
                        <button onClick={handleOrder}>
                        <span>CHECKOUT</span></button>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Checkout;