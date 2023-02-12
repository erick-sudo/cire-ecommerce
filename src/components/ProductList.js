import React, {useRef} from 'react';

import Product from './Product';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa'

function ProductList({products}) {

    const contRef = useRef()

    function handleScroll(pixels) {

        contRef.current.scrollBy({
            top: 0,
            left: pixels,
            behavior: 'smooth'
        })
    }

    return (
        <div className='list-wrapper'>
            <div className='scroll-buttons-left' onClick={() => handleScroll(-110)}>
                <FaAngleDoubleLeft />
            </div>
            <div className='products-list' ref={contRef}>
            {
                products.map((product, index) => <Product product={product} key={index} />)
            }
            </div>
            <div className='scroll-buttons-right' onClick={() => handleScroll(110)}>
                <FaAngleDoubleRight />
            </div>
        </div>
    )
}

export default ProductList;
