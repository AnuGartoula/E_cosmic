import React, { useState } from "react";
import "./testimonials.css";


const TestimonialsData = {
    testimonies: [
        {
          "id": 1,
          "name": "Sophia Johnson",
          "rating": 5,
          "comment": "Absolutely love this product! My skin feels so smooth and radiant after using it.",
          "product": "Hydrating Face Serum"
        },
        {
          "id": 2,
          "name": "Emily Carter",
          "rating": 4,
          "comment": "Great quality, but a bit pricey. Still worth it for the results!",
          "product": "Luxury Lipstick"
        },
        {
          "id": 3,
          "name": "Liam Brown",
          "rating": 3,
          "comment": "The product is decent, but I expected better packaging.",
          "product": "Moisturizing Hand Cream"
        },
        {
          "id": 4,
          "name": "Olivia Smith",
          "rating": 5,
          "comment": "This has become my go-to eye shadow palette. Gorgeous colors!",
          "product": "Eyeshadow Palette"
        },
        {
          "id": 5,
          "name": "James Wilson",
          "rating": 2,
          "comment": "Didn't suit my skin type, but customer service was excellent.",
          "product": "Anti-Aging Night Cream"
        },
        {
          "id": 6,
          "name": "Charlotte Davis",
          "rating": 4,
          "comment": "I noticed a difference in just a week. Lovely fragrance too.",
          "product": "Vitamin C Brightening Cream"
        },
        {
          "id": 7,
          "name": "Benjamin Garcia",
          "rating": 5,
          "comment": "Best lip balm I've ever used! Keeps my lips hydrated all day.",
          "product": "Nourishing Lip Balm"
        },
        {
          "id": 8,
          "name": "Mia Martinez",
          "rating": 4,
          "comment": "Very lightweight and non-greasy. Perfect for daily use.",
          "product": "Daily Moisturizer"
        },
        {
          "id": 9,
          "name": "Alexander Lopez",
          "rating": 3,
          "comment": "It’s okay, but I prefer other brands for the same price.",
          "product": "Hair Repair Oil"
        },
        {
          "id": 10,
          "name": "Amelia White",
          "rating": 5,
          "comment": "A must-have for anyone who loves makeup. Beautiful finish!",
          "product": "Matte Foundation"
        }
      ]
      
}
function Testimonials(){
    const [testimonies] = useState(TestimonialsData.testimonies)

    const renderStars = (rating) => {
        const maxStars = 5;
        const filledStars = "★".repeat(rating);
        const emptyStars = "☆".repeat(maxStars - rating);
        return filledStars + emptyStars;
      };
    
    return(
        <div className="Testimonials-section">
    <div className="title">
        <h3>What our Customers say?</h3>
      </div>

<div className="testimonials-container">
    {testimonies.map((testimony) => (
    <div className="testimony-card" key = {testimony.id}>
        <h3 className="testimony-name">
            {testimony.name}
        </h3>
        <div className="testimony-rating">
              <span>{renderStars(testimony.rating)}</span>
            </div>
        <p className="testimony-title">{testimony.comment}</p>
        <h4 className="testimony-product">
            {testimony.product}
        </h4>




    </div>
    ))}
</div>
        </div>
    )
}

export default Testimonials;