import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./product_detail.css";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(`http://makeup-api.herokuapp.com/api/v1/products/${id}.json`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product details:", error));
  }, [id]);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const addToCart = () => {
    if (!product) return;

    const cartItem = {
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: parseFloat(product.price),
      currency: product.currency,
      image_link: product.image_link,
      quantity: quantity,
    };

    // Get existing cart items from localStorage
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...existingCart, cartItem];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert("Item added to cart!");
  };
  const addTofavourite = () => {
    if (!product) return;
  
    const favoriteItem = {
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: parseFloat(product.price),
      currency: product.currency,
      image_link: product.image_link,
    }
  // Get existing favorites from localStorage
  const existingFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
  
  // Check if the product is already in favorites to avoid duplicates
  const isAlreadyFavorite = existingFavorites.some(item => item.id === favoriteItem.id);
  
  if (isAlreadyFavorite) {
    alert("This item is already in your favorites.");
    return;
  }

  const updatedFavorites = [...existingFavorites, favoriteItem];
  localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  alert("Item added to favorites!");
  
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details">
      <div className="product-images">
        {product.image_link ? (
          <img src={product.image_link} alt={product.name} className="main-image" />
        ) : (
          <div className="no-image">No Image Available</div>
        )}
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p><strong>Brand:</strong> {product.brand}</p><br />
        <p><strong>Description:</strong> {product.description || "No description available."}</p><br />
        <p><strong>Price:</strong> {product.currency || "$"} {product.price || "N/A"}</p>
        <div className="quantity-control">
          <button onClick={decreaseQuantity} className="quantity-button">-</button>
          <span className="quantity-display">{quantity}</span>
          <button onClick={increaseQuantity} className="quantity-button">+</button>
        </div>
        <button className="add-to-cart" onClick={addToCart}>Add to Cart</button> 
        <button className="add-to-favourite" onClick={addTofavourite}>Favourite</button>
      </div>
      
    </div>
  );
}

export default ProductDetails;