import React, { useState, useEffect } from "react";
import FilterProducts from "./FilterProducts";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

function Products() {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("")
    const [sort, setSort] = useState("price")
    const [sortState, setSortState] = useState(false);

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

    function setSortString(str) {
        setSort(str)
    }

    const filteredProductsBySearch = products.filter(product => {
        return product.title.toLowerCase().includes(search.toLowerCase())
    })

    const filteredProductsByCategory = filteredProductsBySearch.filter(product => {
        return product.category.toLowerCase().includes(filter.toLowerCase())
    })

    const sortedProductsByCategory = filteredProductsByCategory.sort((a, b) => {
        if(a[sort] > b[sort]) {
            return 1
        } else if(a[sort] < b[sort]) {
            return -1
        }
        return 0
    })

    return (
        <div className="products">
            <FilterProducts search={search} sortState={sortState} setSortState={setSortState} setSortString={setSortString} filter={filter} setFilterCriterion={setFilterCriterion} setSearchString={setSearchString} />
            <ProductList products={sortState ? sortedProductsByCategory : filteredProductsBySearch} />
            <ProductForm />
        </div>
    )
}

// 7537155

export default Products;