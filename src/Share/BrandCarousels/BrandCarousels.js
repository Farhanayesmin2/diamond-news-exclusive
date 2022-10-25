import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import download1 from '../../assets/Brand/download 1.jpg'
import download2 from '../../assets/Brand/download2.jpg'


const BrandCarousels = () => {
    return (
        <div>
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={download1}
          alt="First slide"
        />
     
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={download2}
          alt="Second slide"
        />

      
      </Carousel.Item>
    

       
    </Carousel>
        </div>
    );
};

export default BrandCarousels;