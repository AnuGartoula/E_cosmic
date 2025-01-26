import './slider.css';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
    {
        image: '/images/ordinary.jpg',
        title:'ordinary'
    },
    {
        image: '/images/dermaco.jpg',
        title:'Derma Co.'
    },
    {
        image: '/images/loreal.jpg',
        title:'loreal'
    },
    {
        image: '/images/minimalist.jpg',
        title:'minimalist'
    },
    {
        image: '/images/plum.jpg',
        title:'plum'
    },
    {
        image: '/images/cetaphil.jpg',
        title:'cetaphil'
    },
]
 function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
   
  return(
    <div className="Slider">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="container">
            <img src={item.image} alt={item.title} />
            
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SimpleSlider;