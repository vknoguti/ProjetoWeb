import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Searchbar.css";
import { useNavigate } from "react-router-dom";

const Searchbar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const fetchData = (value) => {
    console.log(value)
    // fetch(`http://localhost:7000/products?model=${value}&brand=${value}`)
    fetch(`http://localhost:7000/products?model=${value}&brand=${value}`)
      .then((response) => response.json())
      .then((json) => {
        setResults(json.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };
      
    const handleChange = (value) => {
      setInput(value.replace('\\', ''));
      fetchData(value.replace('\\', ''));
      if(value === "")
        navigate('/')
      else
        navigate(`/?model=${value}&brand=${value}`)
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