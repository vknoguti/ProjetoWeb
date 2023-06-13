import React from 'react';

const Size = ({product}) => {
    const availableSizes = product.sizes.filter(e => {
        if(e.stock > 0) return e 
    })

    return (
        <>            
            {availableSizes.map(e => {
                return <option key={e.size} value={e.size}>{e.size}</option>
            })}
        </>  
    );
}
 
export default Size;