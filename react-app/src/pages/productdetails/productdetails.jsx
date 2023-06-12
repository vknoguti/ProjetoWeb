import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import '../../App.css';
import Product from '../../components/Product';
import './productdetails.css'
import Size from '../../components/Size';
import Footer from '../../components/Footer';
import { PRODUCTLIST } from '../../productlist';
import { useParams } from 'react-router-dom';

const ProductDetail = ({headerUser, setHeaderUser}) => {
    const key = useParams();

    const product = PRODUCTLIST.filter(item => {
        if(item.id == key.id) return item;
    })[0]

    const [qttInput, setQttInput] = useState(0);

    const [size, setSize] = useState('');

    const handleAddToCart = () => {
        const qtt = product.sizes.filter(e => {
            if(e.size == size)
                return e;
        })
        
        if(qtt.length > 0 && (qttInput < 1 || qttInput > qtt[0].stock))
        {
            alert("Quantidade indisponivel")
        } else {
            let itemToCart = { ...product, sizes: [
                {
                    size: 38,
                    stock: 0
                },
                {
                    size: 39,
                    stock: 0
                },
                {
                    size: 40,
                    stock: 0
                },
                {
                    size: 41,
                    stock: 0
                },
            ] };
            let aux = itemToCart.sizes.find((o, i) => {
                if(o.size == size) {
                    itemToCart.sizes[i] = {
                        size: o.size,
                        stock: parseInt(qttInput)
                    }
                } else {
                    itemToCart.sizes[i] = {
                        size: o.size,
                        stock: 0
                    }
                }
            })

            let newState = {...headerUser}

            console.log(newState);

            if(newState.cart.length == 0 || newState.cart.filter((e) => {
                if(e.id == itemToCart.id) return e;
            }).length == 0) {
                newState.cart.push(itemToCart)
            }
            else {
                aux = newState.cart.find((o, i) => {
                    if(o.id == itemToCart.id) {
                        if(o.sizes[size - 38].stock + parseInt(qttInput) <= qtt[0].stock)
                            o.sizes[size - 38].stock += parseInt(qttInput);
                        else 
                            alert("Quantidade indisponivel")
                    }
                })
            }

            setHeaderUser(newState);
        }

    }

    useEffect(() => {
        console.log(qttInput)
    })

    return (  
        <>
            <Header user={headerUser} logged={headerUser.logged}/>
            <div className="container">
                <main className='product-details'>
                    <section className='product-detail'>
                        <div className="product-image">
                            <img src={product.img} alt='product'></img>
                        </div>
                        <div className="product-info">
                            <h2>{product.name}</h2>
                            <p className='product-description'>{product.descripton}</p>
                            <div className="product-details-price">
                                <span>R${product.price}</span>
                            </div>
                            <div className="product-size">
                                <h3>Selecione um tamanho</h3>
                                <select id='sizes' value={size} onChange={(e) => setSize(e.target.value)}>
                                    <option value=''>Tamanhos</option>
                                    <Size product={product}/>
                                </select>
                            </div>
                            <p>Selecione uma Quantidade</p>
                            <div className="product-quantity">
                                <input value={qttInput} onChange={e => setQttInput(e.target.value)} type='number' min='0'></input>
                                <button onClick={handleAddToCart} className='qtt-button'>Adicionar ao Carrinho</button>
                            </div>
                        </div>
                    </section>
                    <section className="related">
                        <h2>Related Products</h2>
                        <div className="related-products">
                            {PRODUCTLIST.map(item => {
                                if(item.id != key.id)
                                    return <Product key={item.id}  item={item} />
                            })}
                        </div>
                    </section>
                </main>
            </div>
            <Footer />
        </>
    );
}
 
export default ProductDetail;