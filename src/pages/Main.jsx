import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { useNavigate } from 'react-router-dom'
import DescriptionTabs from '../components/DescriptionTabs'
import Img_2 from '../img/img2.1.jpg'
import Img_3 from '../img/img2.2.jpg'
import Img_4 from '../img/img3-2.jpg'
import Img_5 from '../img/img3-3.jpg'
function Main() {
	const navigate = useNavigate()
	const navigationHandler = () => {
		navigate('/form')
	}
	return (
		<div>
			<div className='app-container'>
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
					</div>
				</div>
				<div className='side-panel'>
					<div className='content'>
						<h1 className='content__title'>
							Портативний автомобільний пилосос, Ручний пилосос для машини 2в1{' '}
						</h1>
						<div className='content__prise'>
							550₴ <br /> <span className='last_prise'>850₴</span>{' '}
						</div>
						<div className='content__econom'>Економія 300грн </div>
						<button onClick={navigationHandler} className='content_button'>
							Оформити замовлення
						</button>
					</div>
					<div className='description'>
						<DescriptionTabs />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Main
