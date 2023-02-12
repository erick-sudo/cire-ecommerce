import React, {useState, useEffect} from "react";
import Product from "./Product";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa'

function ProductsByCategory({category}) {

    const [ products, setProducts] = useState(new Array(30).fill(null))

    useEffect(() => {
        if(category) {
            fetch(`http://localhost:8001/products?category=${category}`)
            .then(res => res.json())
            .then(res => {
                setProducts(res)
            })
        }
    },[category])

    return (
        <div className="fieldsets" >
            <div className="h2">{category ? category : "↻~~~~~~~~~~~~~~~~↻"}</div>
            <div className="products-by-category">
                <div className='list-wrapper'>
                    <div className='scroll-buttons-left'>
                        <FaAngleDoubleLeft />
                    </div>
                    {
                        products.map((product, index) => <Product key={index} product={product} /> )
                    }
                    <div className='scroll-buttons-right'>
                        <FaAngleDoubleRight />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsByCategory;
