import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";

function FilterProducts({setFilterCriterion, setSearchString, search, filter, setSortString, sortState, setSortState}) {

    const [categories, setCategories] = useState([]);

    function handleCategoriesChange(event) {
        setFilterCriterion(event.target.value);
    }

    function handleSearchChange(event) {
        setSearchString(event.target.value);
    }

    function handleSortChange(event) {
        setSortString(event.target.value);
    }

    useEffect(() => {
        fetch('https://transactions-bank-of-flatiron.herokuapp.com/categories')
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
