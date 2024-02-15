import React from 'react'
import { useNavigate } from 'react-router-dom'
import CountDown from '../components/CountDown'
import DescriptionTabs from '../components/DescriptionTabs'


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
						<CountDown />
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
