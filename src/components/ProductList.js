import React from 'react';

import Product from './Product';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa'

function ProductList({products}) {
    return (
        <div className='list-wrapper'>
            <div className='scroll-buttons'>
                <FaAngleDoubleLeft />
            </div>
            <div className='products-list'>
            {
                products.map((product, index) => <Product product={product} key={index} />)
            }
            </div>
            <div className='scroll-buttons-right'>
                <FaAngleDoubleRight />
            </div>
        </div>
    )
}

export default ProductList;
