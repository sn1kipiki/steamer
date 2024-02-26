import React from 'react'
import FormBlock from '../../../components/FormBlock'

import CountDown from '../../../components/countDown/CountDown'
import './styles.scss'
import SlickSlider from '../../../components/slickSlider/SlickSlider'
function MainSection({isTop}) {
	return (
		<section className='main-section' style={isTop ? {height: 1170+ "px"}: {height: 1500+ "px"}}>
					{isTop &&
					<>	
					<h1 className='title'>CAR VACUUM CLEANER</h1>
					<h2 className='subtitle'>ПОРТАТИВНИЙ БЕЗДРОТОВИЙ ПИЛОСОС</h2>
					</>
					}
					<SlickSlider/>
					<div className='prise-blok'>
						<div className='priseblock-left'>
							<p className='priseblock-head'>Звичайна ціна:</p>
							<p className='priseblock-price'>
								{' '}
								<s>1150 грн</s>{' '}
							</p>
						</div>
						<div className='priseblock-right'>
							<p className='priseblock-head'>Ціна сьогодні:</p>
							<p className='priseblock-price'>550 грн </p>
						</div>
					</div>
					<CountDown/>
					{isTop &&
						<a href='#bottom' className='order-button'>
						<span>ЗАМОВИТИ</span>
					</a>
					}
					<p   className='items-left'>
						Залишилося <span>12</span> пилососів по акції
					</p>
					{!isTop &&

					<FormBlock/>
					}
				</section>
	)
}

export default MainSection