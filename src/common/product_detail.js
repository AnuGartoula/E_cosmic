// ProductDetails.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./product_detail.css";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Fetch product details using the ID
    fetch(`http://makeup-api.herokuapp.com/api/v1/products/${id}.json`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product details:", error));
  }, [id]);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details">
      

      <div className="product-images" >
        {product.image_link ? (
          <img src={product.image_link} alt={product.name} className="main-image" />
        ) : (
          <div className="no-image">No Image Available</div>
        )}
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p><strong>Brand:</strong> {product.brand}</p><br/>
        <p><strong>Description:</strong> {product.description || "No description available."}</p><br/>
        <p><strong>Price:</strong> {product.currency || "$"} {product.price || "N/A"}</p>
        <div className="quantity-control">
          <button onClick={decreaseQuantity} className="quantity-button">-</button>
          <span className="quantity-display">{quantity}</span>
          <button onClick={increaseQuantity} className="quantity-button">+</button>
        </div>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;