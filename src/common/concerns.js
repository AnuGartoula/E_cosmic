import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./concerns.css";

const concernsData = {
  images: [
    {
      id: 1,
      src: "https://th.bing.com/th/id/OIP.OASrMYabiHVazcpbjMDH9wHaJQ?w=156&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      alt: "Acne",
    },
    {
      id: 2,
      src: "https://th.bing.com/th/id/OIP.hEpfCERVGoyorktaGQHi1gHaEK?w=322&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      alt: "Dark Circles",
    },
    {
      id: 3,
      src: "https://th.bing.com/th/id/OIP.DdP-E-33BlKdZ8GOQ5uMogHaE8?w=278&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      alt: "Dull Skin",
    },
    {
      id: 4,
      src: "https://th.bing.com/th/id/OIP.NNEDJ4o1-spAmilNyFOhnwHaE8?w=257&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      alt: "Hyperpigmentation",
    },
    {
      id: 5,
      src: "https://th.bing.com/th/id/OIP.21kGBHEUo6m1_TvFrPom2AHaC6?w=270&h=137&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      alt: "Hair Fall",
    },
  ],
};

function Concerns() {
  const [images] = useState(concernsData.images);

  return (
    <div className="concerns-Section">
      <div className="title">
        <h3>Shop By Category</h3>
      </div>

      <div className="concerns-container">
        {images.map((image) => (
          <div className="concerns-card" key={image.id}>
            {/* Use Link to navigate to Concern Details */}
            <Link to={`/concerns/${image.id}`} className="concerns-link">
              <img src={image.src} alt={image.alt} className="concerns-image" />
              <p className="concerns-title">{image.alt}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Concerns;
