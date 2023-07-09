import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Product from '../../components/Product';
import Footer from '../../components/Footer';

import './home.css'
import '../../App.css'
import Searchbar from '../../components/Searchbar';


const Home = ({results, setResults, headerUser}) => {   
    const [page, setPage] = useState(1);

    async function getResults()  {
        const response = await fetch(`http://localhost:7000/products?page=${page}`);

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
        getResults();
        console.log(page)
    }, [page])

    const handlePreviousPage = async () => {
        if(page > 1) {
            setPage(page - 1);
        }
    }

    const handleNextPage = async () => {
        if(results.length === 20) {
            console.log("arruma")
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