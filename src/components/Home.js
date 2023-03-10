import React, { useState, useEffect} from "react";
import ProductsByCategory from "./ProductsByCategory";

import Title from './Title';

function Home() {

    const [categories, setCategories] = useState(new Array(15).fill(null));


    useEffect(() => {
        fetch('http://localhost:8001/resources/categories')
        .then(response => response.json())
        .then(cats => setCategories(cats))
    }, [])

    return (
        <React.Fragment>
            <div className="home-title">
                <Title />
            </div>
            <div className="products-home">
                {
                    categories.map((cat, index) => <ProductsByCategory key={index} category={cat} /> )
                }
            </div>
        </React.Fragment>
    )
}

export default Home;
