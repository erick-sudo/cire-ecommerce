import React, { useEffect, useState } from "react";

function FilterProducts({setFilterCriterion, setSearchString, search, filter}) {

    const [categories, setCategories] = useState([]);

    function handleCategoriesChange(event) {
        setFilterCriterion(event.target.value);
    }

    function handleSearchChange(event) {
        setSearchString(event.target.value);
    }

    useEffect(() => {
        fetch('http://localhost:8000/categories')
        .then(response => response.json())
        .then(cats => setCategories(cats))
    }, [])

    return (
        <div className="filter-products">
            <input value={search} onChange={handleSearchChange} type="text" placeholder="Search...." />
            <select name="filter" value={filter} onChange={handleCategoriesChange}>
                {
                    categories.map((cat, index) => <option key={index} value={cat}>{cat}</option>)
                }
            </select>

        </div>
    )
}

export default FilterProducts;