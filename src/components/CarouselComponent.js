import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import i1 from './groceries-offers_enhanced.jpg';
import i2 from './clothing-offers_enhanced.jpg';
import i3 from './today-electronics-offers_enhanced.jpg';

function CarouselComponent() {
  return (
    <div className='Carousel'>
    <Carousel width={"60%"} height={"5%"} >
      <div>
        <img src={i1} alt="Slide 1"  />
        <p className="legend"><a className='anchor' href='groceries.html'>Groceries</a></p>
      </div>
      <div>
        <img src={i2} alt="Slide 2" />
        <p className="legend"><a className='anchor' href='Clothing.html'>Clothing</a></p>
      </div>
      <div>
        <img src={i3} alt="Slide 3" />
        <p className="legend"><a className='anchor' href='electronics.html'>Electronics</a></p>
      </div>
    </Carousel>
    </div>
  );
}

export default CarouselComponent;
