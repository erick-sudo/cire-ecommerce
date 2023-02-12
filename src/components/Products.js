import React, { useState, useEffect } from "react";
import FilterProducts from "./FilterProducts";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

function Products({ showFilterButton }) {
    const [products, setProducts] = useState(new Array(40).fill(null))
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("")
    const [sort, setSort] = useState("price")
    const [sortState, setSortState] = useState(false);

    useEffect(() => {
        fetch("http://localhost:8001/resources/products")
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
        if(product == null) {
            return product
        }
        return product.title.toLowerCase().includes(search.toLowerCase())
    })

    const filteredProductsByCategory = filteredProductsBySearch.filter(product => {
        if(product == null) {
            return product
        }
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
        {
            showFilterButton
            ? <FilterProducts search={search} sortState={sortState} setSortState={setSortState} setSortString={setSortString} filter={filter} setFilterCriterion={setFilterCriterion} setSearchString={setSearchString} />
            : null
        }
            <ProductList products={ products[0] ? ( sortState ? sortedProductsByCategory : filteredProductsByCategory ) : products } />
            <ProductList products={ products[0] ? ( sortState ? sortedProductsByCategory : filteredProductsByCategory ) : products } />
            <ProductList products={ products[0] ? ( sortState ? sortedProductsByCategory : filteredProductsByCategory ) : products } />
            <ProductForm />
        </div>
    )
}

// 7537155

export default Products;
