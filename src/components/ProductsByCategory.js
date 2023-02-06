import React, {useState, useEffect} from "react";
import Product from "./Product";

function ProductsByCategory({category}) {

    const [ products, setProducts] = useState([])

    useEffect(() => {
        fetch(`https://transactions-bank-of-flatiron.herokuapp.com/products?category=${category}`)
        .then(res => res.json())
        .then(res => setProducts(res))
    },[category])

    return (
        <fieldset className="products-by-category">
            <legend>{category}</legend>
            {
                products.map((product, index) => <Product key={index} product={product} /> )
            }
        </fieldset>
    )
}

export default ProductsByCategory;
