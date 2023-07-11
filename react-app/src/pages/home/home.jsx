import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Product from '../../components/Product';
import Footer from '../../components/Footer';

import './home.css'
import '../../App.css'
import Searchbar from '../../components/Searchbar';
import { useLocation } from 'react-router-dom';



const Home = ({results, setResults, headerUser}) => {
    const search = useLocation();   
    const [page, setPage] = useState(1);
    const [brand, setBrand] = useState("")

    async function getResults()  {
        const response = await fetch(`http://localhost:7000/products?page=${page}&model=${brand}&brand=${brand}`);

        console.log(page);
        
        if (!response.ok) {
          const message = `An error occurred: ${response.statusText}`;
          console.log(message);
          return;
        }
    
        const data = await response.json();
    
        setResults(data.results);
    };

    useEffect(() => {
        console.log(page);
        let query = new URLSearchParams(search.search);
        console.log(query.get("brand"))
        if(query.get("brand") !== null) {
            setBrand(query.get("brand"));
        } else {
            setBrand("");
        }

    }, [page, search])

    useEffect(() => {
        getResults();

    }, [page]);

    const handlePreviousPage = async () => {
        if(page > 1) {
            setPage(page - 1);
        }
    }

    const handleNextPage = async () => {
        if(results.length === 10) {
            setPage(page + 1);
        }
    }

    if(results) {
        return (
            <>
                <Header user={headerUser} logged={headerUser.logged}/>
                <div className="container">
                    <div className="homeSearchBar">
                        <Searchbar setResults={setResults}/>
                    </div>
                    <main className="products">
                        <div className="homeProductsContainer">
                            {results.map(item => {
                                return <Product key={item._id} item={item} />
                            })}
                        </div>
                    <div className="homeBtns">
                        <button onClick={handlePreviousPage}>Previous</button>
                        <button onClick={handleNextPage}>Next</button>
                    </div>
                    </main>
                </div>  
                <Footer />
            </>
        );
    }
    else return (<></>);
}
 
export default Home;