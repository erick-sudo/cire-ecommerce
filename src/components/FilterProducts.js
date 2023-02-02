import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";

function FilterProducts({setSort, setFilterCriterion, setSearchString, search, filter}) {

    const [categories, setCategories] = useState([]);
    const [sortState, setSortState] = useState(false);

    function handleCategoriesChange(event) {
        setFilterCriterion(event.target.value);
    }

    function handleSearchChange(event) {
        setSearchString(event.target.value);
    }

    function handleSortChange(event) {
        setSort(event.target.value);
    }

    useEffect(() => {
        fetch('http://localhost:8000/categories')
        .then(response => response.json())
        .then(cats => setCategories(cats))
    }, [])

    return (
        <div className="filter-products">
            <label>Sort By <input checked={sortState} onChange={() => setSortState(!sortState)} type="checkbox" /> </label>
            <select name="sortby" onChange={handleSortChange} disabled={sortState}>
                <option value="price">Price</option>
                <option value="price">Category</option>
            </select>
            <input value={search} onChange={handleSearchChange} type="text" placeholder="Search...." />
            <label><FaFilter /></label>
            <select name="filter" value={filter} onChange={handleCategoriesChange}>
                {
                    categories.map((cat, index) => <option key={index} value={cat}>{cat}</option>)
                }
            </select>

        </div>
    )
}

export default FilterProducts;