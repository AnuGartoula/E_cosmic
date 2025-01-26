import React from "react";
import "./category.css";

const catagoryData = {
  images: [
    {
      id: 1,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBjWyFyKeMW_wVQ_2s4fwLhVrU7QgZ20gm-A&s",
      alt: "Skin Care",
    },
    {
      id: 2,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3_91bu4YDcpzQJHRNypntegPa5H-ZmnoHYA&s",
      alt: "Hair Care",
    },
    {
      id: 3,
      src: "https://www.beautyhaul.com/assets/uploads/Body_care1.jpg",
      alt: "Body Care",
    },
    {
      id: 4,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5kNnqUSCZp9YynhKaKp1L3GEymErpGgk7Gg&s",
      alt: "Lip Care",
    },
    {
      id: 5,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv39j8cSVZsj221tjvRO0PSePkZDSpLW0inA&s",
      alt: "Eye Care",
    },
  ],
};

function Catagory() {
  // const [images] = useState(catagoryData.images);

  return (
    <div className="catagory-Section">
      <div className="title">
        <h3>Shop By Category</h3>
      </div>

      <div className="catagory-container">
        {catagoryData.images.map((image) => (
          <div className="catagory-card" key={image.id}>
            <img src={image.src} alt={image.alt} className="catagory-image" />
            <p className="catagory-title">{image.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catagory;
