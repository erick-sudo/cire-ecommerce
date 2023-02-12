import React, {useState, useEffect, useRef} from "react";
import Product from "./Product";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa'

function ProductsByCategory({category}) {

    const [ products, setProducts] = useState(new Array(30).fill(null))

    const contRef = useRef()

    useEffect(() => {
        if(category) {
            fetch(`http://localhost:8001/products?category=${category}`)
            .then(res => res.json())
            .then(res => {
                setProducts(res)
            })
        }
    },[category])

    function handleScroll(pixels) {

        contRef.current.scrollBy({
            top: 0,
            left: pixels,
            behavior: 'smooth'
        })
    }

    return (
        <div className="fieldsets" >
            <div className="h2">{category ? `↻~~~~${category}~~~~↻` : "↻~~~~⏳--⏳~~~~↻"}</div>
            <div className='list-wrapper'>
                <div className='scroll-buttons-left' onClick={() => handleScroll(-110)}>
                    <FaAngleDoubleLeft />
                </div>
                <div className="products-by-category" ref={contRef}>
                {
                    products.map((product, index) => <Product key={index} product={product} /> )
                }
                </div>
                <div className='scroll-buttons-right' onClick={() => handleScroll(110)}>
                    <FaAngleDoubleRight />
                </div>
            </div>
        </div>
    )
}

export default ProductsByCategory;
