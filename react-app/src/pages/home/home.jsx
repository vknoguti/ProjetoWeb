import React from 'react';
import Header from '../../components/Header';
import Product from '../../components/Product';

import './home.css'
import '../../App.css'

const Home = () => {
    return (
        <>
            <Header />
            <div className="container">
                <main className="products">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </main>
            </div>  
            <h1>Home</h1>
        </>
    );
}
 
export default Home;