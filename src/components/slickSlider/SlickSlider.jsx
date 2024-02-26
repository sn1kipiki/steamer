// App.js
import React, { useState, useEffect } from 'react';
import './styles.scss'

import Slider from "react-slick";
import slides from './slides.js'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SlickSlider() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
	const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {

    setNav1(slider1);
    setNav2(slider2);

  }, [slider1, slider2]);


  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  };

  const settingsThumbs = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
		arrows: false,
		infinite: false,
    // centerMode: true,
    // swipeToSlide: true,
    // focusOnSelect: true,
    // centerPadding: '10px'
		draggable: false,
		onReInit: () => setCurrentSlide(slider1?.innerSlider.state.currentSlide),
  };

  

  return (

   
<div className='slider-wrapper'>

     

        <Slider
          {...settingsMain}
          asNavFor={nav2}
          ref={slider => (setSlider1(slider))}
					className='top-sleder'
        >

          {slides.map((slide) =>

            <div className="top-slider__card" key={slide.id} 
						
						>
              {/* <h2 className="slick-slide-title">{slide.title}</h2> */}
              <img className="top-slider__image" src={slide.src} alt={slide.alt}/>
              {/* <label className="slick-slide-label">{slide.label}</label> */}
            </div>

          )}

        </Slider>
          <Slider
            {...settingsThumbs}
            asNavFor={nav1}
            ref={slider => (setSlider2(slider))}
						className='bot-slider'
						>
						
            {slides.map((slide, idx) =>

              <div className={currentSlide === idx ? "bot-slider__card-active":"bot-slider__card "} key={slide.id} onClick={() => {
                slider1?.slickGoTo(idx)
              }} >
								

                <img className="bot-slider__image" src={slide.src} alt={slide.alt} />
								
              </div>

            )}

          </Slider>
        
      

    
</div>
  );
}

export default SlickSlider;