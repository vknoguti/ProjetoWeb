import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import '../../App.css';
import Product from '../../components/Product';
import './productdetails.css'
import Size from '../../components/Size';
import Footer from '../../components/Footer';
import { useParams } from 'react-router-dom';

const ProductDetail = ({results, headerUser, setHeaderUser}) => {
    // Encontra o produto pelo parametro passado na url
    const key = useParams();
   
    // Encontra o produto no banco de dados atraves da key/id
    let product = results.filter(item => {
        if(item.id == key.id) {
            return item;
        } 
    })[0];

    const [qttInput, setQttInput] = useState(0);

    const [size, setSize] = useState('');

    // Handler do botão de adicionar ao carrinho
    const handleAddToCart = () => {
        // Verifica primeiramente se o usuário está logado
        if(!headerUser.logged) {
            alert("Voce precisa estar logado para adicionar itens ao carrinho");
            return;
        }

        // Encontra a quantidade em estoque do tamanho selecionado 
        const qtt = product.sizes.filter(e => {
            if(e.size == size)
                return e;
        })
        
        // Caso seja selecionado um tamanho, porém a quantidade digitada pelo usuário seja maior que em estoque, ou seja 0, alerta o usuário de que a quantidade
        // está indisponível
        if(qtt.length > 0 && (qttInput < 1 || parseInt(qttInput) > qtt[0].stock))
        {
            console.log(qtt[0].stock, qttInput)
            alert("Quantidade indisponivel.\n" + `Quantidade restante:\nTamanho: ${qtt[0].size}\nQuantidade:${qtt[0].stock}`)
        } else if(qtt.length === 0) { // Caso o tamanho do array do filtro seja 0, significa que uma quantidade não foi selecionada
            alert("Selecione um tamanho")
        } else { // Caso em que o tamanho existe e a quantidade está disponível
            const itemToCart = { ...product, sizes: product.sizes.map(e => {
                // Caso seja o tamanho correto, a quantidade pedida é o input
                if(e.size == size) return {size: e.size, stock: parseInt(qttInput)}
                // Caso contrario, a quantidade pedida é 0
                else return {size: e.size, stock: 0}
            })};

            // Agora é necessário atualizar o carrinho
            let newState = {...headerUser}

            // Primeiro verificamos se o carrinho ja possui o item que estamos adicionando
            if(newState.cart.length == 0 || newState.cart.filter((e) => {
                if(e.id == itemToCart.id) return e;
            }).length == 0) { // Caso não possua, apenas damos um append no carrinho com o item
                newState.cart.push(itemToCart)
            } else { // Caso o carrinho ja possua o item
                newState.cart.find((o) => { // Encontramos o item no carrinho
                    if(o.id == itemToCart.id) {
                        o.sizes.find((x) => { 
                        if(x.size == size) { // Encontramos o tamanho correto do item
                                if(x.stock + parseInt(qttInput) <= qtt[0].stock) { // Verificação se a quantidade comprada somada a do carrinho não ultrapassa o estoque
                                    x.stock += parseInt(qttInput); // Caso não ultrapasse, aumenta no carrinho
                                }
                                else
                                    // Caso contrário, alerta o usuário de que a quantidade está indisponível
                                    alert("Quantidade indisponível")
                            }
                        })
                    }
                })
            }

            // Atualiza o estado do usuário geral
            setHeaderUser(newState);
        }

    }
    console.log(qttInput);

    useEffect(() => {
        console.log(results);
    })

    if(results.length > 0) return (  
        <>
            <Header user={headerUser} logged={headerUser.logged}/>
            <div className="container">
                <main className='product-details'>
                    <section className='product-detail'>
                        <div className="product-image">
                            <img src={product.image} alt='product'></img>
                            {/* <video src={product.image} autoPlay loop></video> */}

                        </div>
                        <div className="product-info">
                            <h2>{product.model}</h2>
                            <p className='product-description'>{product.description}</p>
                            <div className="product-details-price">
                                <span>R${parseFloat(product.price).toFixed(2)}</span>
                            </div>
                            <div className="product-size">
                                <h3>Select Size</h3>
                                <select id='sizes' value={size} onChange={(e) => setSize(e.target.value)}>
                                    <option value=''>Sizes</option>
                                    <Size product={product}/>
                                </select>
                            </div>
                            <p>Select Quantity</p>
                            <div className="product-quantity">
                                <input value={qttInput} onChange={e => setQttInput(e.target.value)} type='number' min='0'></input>
                                <button onClick={handleAddToCart} className='qtt-button'>ADD TO CART</button>
                            </div>
                        </div>
                    </section>
                    <section className="related">
                        <h2>Related Products</h2>
                        <div className="related-products">
                            {results.map(item => {
                                if(item.id != key.id && item.brand == product.brand)
                                    return <Product key={item.id}  item={item} />
                            })}
                        </div>
                    </section>
                </main>
            </div>
            <Footer />
        </>
    );
    else return(<></>)
}
 
export default ProductDetail;
