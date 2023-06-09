import React from 'react';

const Size = ({product}) => {
    const availableSizes = product.sizes.filter(e => {
        return product.qtts[product.sizes.indexOf(e)] > 0
    })

    return (
        <>
            <select name='sizes'>
                {availableSizes.map(e => {
                    return <option value={e}>{e}</option>
                })}
            </select>
        </>  
    );
}
 
export default Size;