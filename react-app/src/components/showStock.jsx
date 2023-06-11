import React from 'react';
import './showStock.css'
import Searchbar from './Searchbar';
import { useState, useEffect } from 'react';
import SearchResultsList from './searchResultsList';

const ShowStock = () => {
    const [results, setResults] = useState([]);
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
      fetch('http://localhost:7000/products')
        .then(response => response.json())
        .then(data => setResults(data))
        .catch(error => console.log(error));
    }, []);

    
    return ( 
        <>
            <div className="searchbar-div">
                <Searchbar setResults={setResults} />

                {results.length > 0 ? (
                    <SearchResultsList results={results} />
                ) : (
                    <SearchResultsList results={products} />
                )}
            </div>
        </>
     );
}
 
export default ShowStock;