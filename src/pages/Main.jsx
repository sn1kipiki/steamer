import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import instagramImg from '../img/instagram-fill.svg'
import telegramImg from '../img/telegram-fill.svg'
import facebookImg from '../img/facebook-circle-fill.svg'
import Img_2 from '../img/img-2.jpg'
import Img_3 from '../img/img-3.jpg'
import Img_4 from '../img/img-4.jpg'
import Img_5 from '../img/img-5.jpg'
import DescriptionTabs from '../components/DescriptionTabs';
function Main() {
  return (
    <div>
         <div className="header">
        <a href=""><img className='header-img' src={instagramImg} alt="instagram" /></a>
        <a href=""><img className='header-img'src={telegramImg} alt="telegram" /></a>
        <a href=""><img className='header-img' src={facebookImg} alt="facebook" /></a>
      </div>
      <div className="app-container">

      <div className="photo-slider-box">
                <div className="photo-slider">
                
                <Carousel  interval="1000" transitionTime="1000" infiniteLoop>
                    <div>
                        <img src={Img_2} alt="" />
                        <button className="legend">Оформити замовлення</button>
                    </div>
                    <div>
                        <img src={Img_3} alt="" />
                        <button className="legend">Оформити замовлення</button>
                    </div>
                    <div>
                    <img src={Img_4} alt="" />
                        <button className="legend">Оформити замовлення</button>
                    </div>
                    <div>
                         <img src={Img_5} alt="" />
                        <button className="legend">Оформити замовлення</button>
                    </div>
                    
                </Carousel>
            </div>
            </div>
      <div className="side-panel">

      <div className="content">
        <h1 className='content__title'>Відпарювач RAF SKY RS7307 </h1>
        <div className="content__prise">850₴ <br /> <span className="last_prise">1100₴</span> </div>
        <div className='content__econom'>Економія 250 грн </div>
        <button className='content_button'>Оформити замовлення</button>
      </div>
      <div className="description">
            <DescriptionTabs/>
      </div>
            </div>
    </div>
    </div>
  )
}

export default Main