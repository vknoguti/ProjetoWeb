import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Searchbar.css";

const Searchbar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("http://localhost:7000/products")
      .then((response) => response.json())
      .then((json) => {
        const filteredResults = value
          ? json.filter((product) =>
              product.model.toLowerCase().includes(value.toLowerCase())
            )
          : [];
        setResults(filteredResults);
      })
      .catch((error) => {
        console.log(error);
      });
  };
      
    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };

    return ( 
        <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input 
                placeholder="Type to search..."
                value={input} 
                onChange={(e) => handleChange(e.target.value)} 
            />
        </div>
     );
}

export default Searchbar;