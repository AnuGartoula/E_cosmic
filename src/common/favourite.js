import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./favourite.css"
const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className="favorites-page">
      <h2>Your Favorite Items</h2>
      <div className="favorites-list">
        {favorites.length === 0 ? (
          <p>No favorite items yet.</p>
        ) : (
          favorites.map((item) => (
            <div key={item.id} className="favorite-item">
              <img src={item.image_link} alt={item.name} className="favorite-image" />
              <div className="favorite-info">
              <h3>{item.name}</h3>
    {/* <p>{item.brand}</p> */}
    <p className="price">{item.currency || "$"} {item.price}</p>
    <Link to={`/product/${item.id}`} className="view-details">View Details</Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
