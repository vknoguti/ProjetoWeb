import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Product from '../../components/Product';
import Footer from '../../components/Footer';

import './home.css'
import '../../App.css'


const Home = ({results, headerUser}) => {   
    console.log(results);

    return (
        <>
            <Header user={headerUser} logged={headerUser.logged}/>
            <div className="container">
                <main className="products">
                    {results.map(item => {
                        return <Product key={item.id} item={item} />
                    })}
                </main>
            </div>  
            <Footer />
        </>
    );
}
 
export default Home;