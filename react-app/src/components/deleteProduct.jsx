import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar';
import SearchResultsList from './searchResultsList';

const DeleteProduct = () => {
  const [results, setResults] = useState([]);

  const handleClick = (action, productId) => {
    if (action === 'delete') {
      fetch(`http://localhost:7000/products/${productId}`, {
        method: 'DELETE',
      })
        .then(() => {
          console.log('Product deleted');
          setResults(prevResults => prevResults.filter(result => result.id !== productId));
        })
        .catch(error => console.log(error));
    } 
  };
  
  const fetchResults = () => {
    fetch('http://localhost:7000/products')
      .then(response => response.json())
      .then(data => setResults(data))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <>
      <div className="searchbar-div">
        <Searchbar setResults={setResults} />

        <SearchResultsList results={results} command="deleteProduct" handleClick={handleClick} />
      </div>
    </>
  );
};

export default DeleteProduct;
