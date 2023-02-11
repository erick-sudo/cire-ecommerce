import React from 'react';

import Product from './Product';

function ProductList({products}) {
    return (
        <div className='products-list'>
            {
                products.map(product => <Product product={product} key={product.id} />)
            }
        </div>
    )
}

export default ProductList;
