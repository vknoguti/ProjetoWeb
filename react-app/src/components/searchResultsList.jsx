import React from 'react';
import './searchResultsList.css'

const SearchResultsList = ( {results} ) => { 
    return ( 
        <div className="results-list"> {
                results.map((result) => {
                    return (
                        <>
                            <div className="product-preview" key={result.id}>

                                <div className="product-img">
                                    <img src={result.image} alt="" />
                                </div>

                                <div className="product-model">
                                    <h2>{result.model}</h2>
                                </div>

                                <div className="product-brand">
                                    <p>{result.brand}</p>
                                </div>

                                <div className="product-price">
                                    <p>R$ {result.price}</p>
                                </div>

                                <div className="product-sizes">
                                <h3>Sizes:</h3>
                                <ul>
                                {result.sizes.map((sizeObj, index) => (
                                    <li key={index}>
                                    Size: {sizeObj.size}, Quantity: {sizeObj.stock}
                                    </li>
                                    ))}
                                    </ul>
                                </div>

                            </div>
                        </>
                    )
                })
            }
        </div>
     );
}
 
export default SearchResultsList;