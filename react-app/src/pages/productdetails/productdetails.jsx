import React from 'react';
import Header from '../../components/Header';
import '../../App.css';
import Product from '../../components/Product';
import './productdetails.css'
import Size from '../../components/Size';

const ProductDetail = () => {
    const url = 'https://assets.adidas.com/images/w_600,f_auto,q_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Tenis_Ultraboost_22_Preto_GZ0127_01_standard.jpg';

    const product = 
        {
            sizes: [38, 39, 40, 41],
            qtts: [10, 0, 15, 10]
        };

    return (  
        <>
            <Header />
            <div className="container">
                <main className='product-details'>
                    <section className='product-detail'>
                        <div className="product-image">
                            <img src={url} alt='product'></img>
                        </div>
                        <div className="product-info">
                            <h2>Ultraboost</h2>
                            <p className='product-description'>Este tênis de corrida Ultraboost oferece conforto e responsividade. Ele tem como base uma entressola BOOST, com sistema Linear Energy Push e solado de Borracha Continental™, para proporcionar energia infinita. O cabedal deste tênis é feito com fios de alta performance que contêm pelo menos 50% de plástico reciclado Parley Ocean Plastic, interceptado em ilhas remotas, praias, comunidades costeiras e litorais, impedindo que polua nossos oceanos.</p>
                            <div className="product-price">
                                <span>R$1000,00</span>
                            </div>
                            <div className="product-size">
                                <h3>Selecione um tamanho</h3>
                                <Size product={product}/>
                            </div>
                            <p>Selecione uma Quantidade</p>
                            <div className="product-quantity">
                                <input type='number' min='0'></input>
                                <button className='qtt-button'>Adicionar ao Carrinho</button>
                            </div>
                        </div>
                    </section>
                    <section className="related">
                        <h2>Related Products</h2>
                        <div className="related-products">
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}
 
export default ProductDetail;