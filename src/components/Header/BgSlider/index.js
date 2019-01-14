import React, { Component } from 'react';
import Slider from "react-slick";

import classes from './index.less';

class BgSlider extends Component {

  render() {
    const settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: false,
     autoplay: true,
     autoplaySpeed: 10000,
     vertical: true,
     verticalSwiping: true,
     dotsClass: 'slick-dots',

   };

   console.log(settings.autoplay);
    return (
      <div>
        <Slider {...settings}>
          <div>
            <div className={'slide it1'}></div>
          </div>
          <div>
            <div className={'slide it2'}></div>
          </div>
        </Slider>
      </div>
    )
  }
}

export default BgSlider;
