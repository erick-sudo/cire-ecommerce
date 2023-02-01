import React, { useState, useEffect } from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

function Products() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("http://localhost:8000/products")
        .then(response => response.json())
        .then(data => {
            setProducts(data)
        })
    },[])

    return (
        <div className="products">
            <h1>Products</h1>
            <ProductList products={products} />
            <ProductForm />
        </div>
    )
}

// 7537155

export default Products;