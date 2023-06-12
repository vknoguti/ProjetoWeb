import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar';
import SearchResultsList from './searchResultsList';
import { useNavigate } from 'react-router-dom';

const DeleteProduct = () => {
  const [results, setResults] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handleClick = (productId) => {
    fetch(`http://localhost:7000/products/${productId}`, {
      method: 'DELETE',
    })
      .then(() => {
        // Refresh the results after successful deletion
        fetchResults();
      })
      .catch(error => console.log(error));
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
