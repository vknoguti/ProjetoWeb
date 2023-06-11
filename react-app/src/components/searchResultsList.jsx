import React from 'react';
import './searchResultsList.css'
import ProductDetails from '../pages/admin/adminProductDetails'

const SearchResultsList = ( {results, command, handleClick} ) => { 

    return ( 
        <div className="results-list"> {
            results.map((result) => {
                return (
                    <>
                        {command === 'deleteProduct' ? (
                            
                            <div className="delete-prod-container">

                                <ProductDetails result={result}/>
                                <button id="delete-btn" onClick={() => handleClick(result.id)}>Delete</button>
                            </div>
                            
                        ) : (
                            <ProductDetails result={result}/>
                        )}  
                    </>
                )
            })}
        </div>
     );
}
 
export default SearchResultsList;