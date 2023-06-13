import React, { useState } from 'react';
import Header from '../../components/Header';
import Product from '../../components/Product';
import Footer from '../../components/Footer';

import './home.css'
import '../../App.css'
import { PRODUCTLIST } from '../../productlist';

const Home = ({headerUser}) => {   
    return (
        <>
            <Header user={headerUser} logged={headerUser.logged}/>
            <div className="container">
                <main className="products">
                    {PRODUCTLIST.map(item => {
                        return <Product key={item.id} item={item} />
                    })}
                </main>
            </div>  
            <Footer />
        </>
    );
}
 
export default Home;