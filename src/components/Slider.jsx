import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { useNavigate } from 'react-router-dom'
import Img_4 from '../img/MultiCleaner/imgm3.jpg'
import Img_5 from '../img/MultiCleaner/imgm4.jpg'
import Img_2 from '../img/MultiCleaner/imgn1.jpg'
import Img_3 from '../img/MultiCleaner/imgn2.jpg'
function Slider() {
	const navigate = useNavigate()
	const navigationHandler = () => {
		navigate('/form')
	}
	return (
		<div className='photo-slider-box'>
			<div className='photo-slider'>
				<Carousel interval='1000' transitionTime='1000' infiniteLoop>
					<div>
						<img src={Img_2} alt='' />
						<button onClick={navigationHandler} className='legend'>
							Оформити замовлення
						</button>
					</div>
					<div>
						<img src={Img_3} alt='' />
						<button onClick={navigationHandler} className='legend'>
							Оформити замовлення
						</button>
					</div>
					<div>
						<img src={Img_4} alt='' />
						<button onClick={navigationHandler} className='legend'>
							Оформити замовлення
						</button>
					</div>
					<div>
						<img src={Img_5} alt='' />
						<button onClick={navigationHandler} className='legend'>
							Оформити замовлення
						</button>
					</div>
				</Carousel>
				{/* <CountDown /> */}
			</div>
		</div>
	)
}

export default Slider
