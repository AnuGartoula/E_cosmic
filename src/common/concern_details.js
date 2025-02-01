import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SortByDropdown from "./sorted_by";

function ConcernDetails() {
    const [products, setProducts] = useState([]);
    const [sortedProducts, setSortedProducts] = useState([]);
    const { id } = useParams(); // This will get the concern ID from the URL
    const limit = 10;

    useEffect(() => {
        // Convert concern ID to relevant keywords
        const keywordMap = {
            1: 'product_type=foundation',
            2: 'product_category=concealer&product_type=foundation',
            3: 'product_tags=Natural&product_type=foundation',

            //TODO
            4: " ",
            5: " "
        };

        const keyword = keywordMap[id] || id;
        console.log(keyword);

        fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?${keyword}`)
            .then((result) => result.json())
            .then((result) => {
                const sortedData = result.sort((a, b) => b.rating - a.rating);
                const limitedData = sortedData.slice(0, limit);
                console.log(limitedData);
                setProducts(limitedData);
                setSortedProducts(limitedData);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [id]);

    const handleSort = (sortOption) => {
        let sorted = [...products];
        
        switch (sortOption) {
            case "Price: Low to High":
                sorted.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
                break;
            case "Price: High to Low":
                sorted.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
                break;
            case "New arrivals":
                // Assuming products have a created_at or similar timestamp field
                sorted.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                break;
            case "Best selling":
            default:
                sorted.sort((a, b) => b.rating - a.rating);
                break;
        }
        
        setSortedProducts(sorted);
    };

    return (
       
        <div className="catagory-Section">
            <div className="title">
                <h3>Recommended Products</h3>
            </div>
            <SortByDropdown onSortChange={handleSort} />
            <div className="products-grid catagory-container">
                {sortedProducts.map((product, index) => (
                    <div key={index} className="catagory-card">
                        <img src={product.image_link} alt={product.name} className="catagory-image" />
                        <div className="catagory-title">
                            <h3>{product.name}</h3>
                            <p>{product.brand}</p>
                            <p>Price: {product.price} {product.currency}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
       
    );
}

export default ConcernDetails;