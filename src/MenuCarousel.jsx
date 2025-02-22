import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const carouselData=[
  {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdHhxO1mKHFoWvYB8HF4QsIM9C_9uKRtDGlA&s",title:"TOWER BEEF BURGER", content:"We Deliver Taste & Quality, Not Just Food", price:"$25" 
    },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgUR3kNvBnjarzhM-PawsuIT0_0N6HTF7L_A&s",
    title: "LAYER SANDWICH",
    content: "Excellence in Every Bite – Taste & Quality Beyond Food",
    price: "$18"
  },
  {
    img: "https://www.shutterstock.com/image-photo/creative-layout-hot-delicious-pizza-260nw-1377666413.jpg",
    title: "BurGerLAB SPECIAL PIZZA",
    content: "Where Taste Meets Perfection – More Than Just Food",
    price: "$25"
  },
  {
    img: "https://thumbs.dreamstime.com/b/crispy-french-fries-loaded-bacon-cheese-sauce-jalapeno-pepper-spring-onion-high-quality-photo-yellow-background-342978937.jpg",
    title: "LOADED FRIES",
    content: "Delivering Unmatched Quality with Every Bite",
    price: "$10"
  }
];

const MenuCarousel = () => {
  return (
    <Carousel>
      {carouselData.map((data, index)=>(
      <Carousel.Item key={index} interval={1000}>      
     <img
          className="menuCarousel"
          src={data.img} 
          alt="First slide"
        />
        <Carousel.Caption>
        <h1>{data.title}</h1>
          <h2>{data.content}</h2>
          <h3>{data.price}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    ))}        
    </Carousel>
    );
  }


export default MenuCarousel;
