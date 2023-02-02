import React, { useState, useEffect } from "react";
import FilterProducts from "./FilterProducts";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

function Products() {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("")
    const [sort, SetSort] = useState("price")
    useEffect(() => {
        fetch("http://localhost:8000/products")
        .then(response => response.json())
        .then(data => {
            setProducts(data)
        })
    },[])

    function setFilterCriterion(fltr) {
        setFilter(fltr)
    }

    function setSearchString(str) {
        setSearch(str)
    }

    const filteredProductsBySearch = products.filter(product => {
        return product.title.toLowerCase().includes(search.toLowerCase())
    })

    const filteredProductsByCategory = filteredProductsBySearch.filter(product => {
        return product.category.toLowerCase().includes(filter.toLowerCase())
    })

    return (
        <div className="products">
            <FilterProducts search={search} filter={filter} setFilterCriterion={setFilterCriterion} setSearchString={setSearchString} />
            <ProductList products={filteredProductsByCategory} />
            <ProductForm />
        </div>
    )
}

// 7537155

export default Products;