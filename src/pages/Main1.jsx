import React from 'react'
import FormBlock from '../components/FormBlock'
import Slider from '../components/Slider'
import img1 from '../img/MultiCleaner/img-1.jpg'
import img2 from '../img/MultiCleaner/img-2.jpg'
import img3 from '../img/MultiCleaner/img-3.jpg'
import orderimg from '../img/MultiCleaner/order.jpg'
import './styles.css'
function Main1() {
	return (
		<div className='main'>
			<div className='main-container'>
				<section className='main-section'>
					<h1 className='title'>MULTI CLEANER</h1>
					<h2 className='subtitle'>ПОРТАТИВНИЙ БЕЗДРОТОВИЙ ПИЛОСОС</h2>
					{/* <img className='main-img' src={headerimg} alt='' /> */}
					<Slider />
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
					<a href='#bottom' className='order-button'>
						<span>ЗАМОВИТИ</span>
					</a>
					<p className='items-left'>
						Залишилося <span>12</span> пилососів по акції
					</p>
				</section>
				<section className='advantages'>
					<h3 className='advantages-title'>ПЕРЕВАГИ</h3>
					<div className='advantages-bloks'>
						<div className='advantages-blok'>
							<img src={img1} alt='' className='advantages-img' />
						</div>
						<div className='advantages-blok advantages-blok_t'>
							<p className='advantages-blok-name'>ПОТУЖНИЙ</p>
							<p className='advantages-blok-text'>
								Має високу потужність всмоктування, що дозволяє швидко та
								ефективно видаляти сміття та пил із салону автомобіля або надути
								човен.
							</p>
						</div>
						<div className='advantages-blok advantages-blok_t'>
							<p className='advantages-blok-name'>КОМПАКТНИЙ</p>
							<p className='advantages-blok-text'>
								Займає манімум місця у багажнику - ви зможете з комфортом возити
								його будь-куди.
							</p>
						</div>
						<div className='advantages-blok'>
							<img src={img2} alt='' className='advantages-img' />
						</div>
						<div className='advantages-blok'>
							<img src={img3} alt='' className='advantages-img' />
						</div>
						<div className='advantages-blok advantages-blok_t'>
							<p className='advantages-blok-name'>ШВИДКА ЗАРЯДКА</p>
							<p className='advantages-blok-text'>
								Акумулятор пилососа повністю заряджається за 2 години, що
								дозволяє швидко відновити його працездатність після
								використання.
							</p>
						</div>
					</div>
				</section>
				<section className='characteristics'>
					<h3 className='characteristics-title'>ХАРАКТЕРИСТИКИ </h3>
					<ul className='characteristics-list'>
						<li className='characteristics-item'>
							<b>Потужність</b>120 Вт
						</li>
						<li className='characteristics-item'>
							<b>Матеріал</b>ABS + чиста мідь великого двигуна
						</li>
						<li className='characteristics-item'>
							<b>Номінальна напруга</b>12 В
						</li>
						<li className='characteristics-item'>
							<b>Тип літієвої акумуляторної батареї</b>4000 mAh
						</li>
						<li className='characteristics-item'>
							<b>Час роботи пилососа</b>до 30 хв.
						</li>
						<li className='characteristics-item'>
							<b>Рабоча температура</b>-20С +50С
						</li>
						<li className='characteristics-item'>
							<b>Ступінь вакууму</b>9000 Па
						</li>
						<li className='characteristics-item'>
							<b>Вага</b>0.400 кг
						</li>
					</ul>

					{/* <iframe
						width='480'
						height='315'
						src='https://www.youtube.com/embed/UW6oP3z_9G8?si=rwmuRHPQZcRk0Puz'
						title='YouTube video player'
						frameborder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						allowfullscreen
					></iframe> */}
				</section>
				{/* <section className='coments'>
					<h3 className='coments-title'></h3>
					<div className='coment-block'>
						<div className='comet-top'>
							<img className='coment-avatar' src={face1} alt='' />
							<p className='coment-name'>Даниило Кауфман</p>
							<img src='' alt='' className='coment-picture' />
						</div>
						<p className='coment-text'></p>
						<img src='' alt='' className='coment-img' />
					</div>
					<div className='coment-block'>
						<div className='comet-top'>
							<img className='coment-avatar' src={face2} alt='' />
							<div className='coment-name-block'>
								<p className='coment-name'></p>
								<p className='coment-name-age'></p>
							</div>
							<img src='' alt='' className='coment-picture' />
						</div>
					</div>
					<div className='coment-block'>
						<div className='comet-top'>
							<img className='coment-avatar' src={face3} alt='' />
							<div className='coment-name-block'>
								<p className='coment-name'></p>
								<p className='coment-name-age'></p>
							</div>
							<img src='' alt='' className='coment-picture' />
						</div>
					</div>
				</section> */}
				<section className='do-order'>
					<h3 className='do-order-title'>
						ЯК ЗРОБИТИ <span>ЗАМОВЛЕННЯ?</span>
					</h3>
					<img src={orderimg} alt='' className='do-order-img' />
				</section>
				<section className='main-section'>
					<Slider />
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

					<p id='bottom' className='items-left'>
						Залишилося <span>12</span> пилососів по акції
					</p>
					<FormBlock />
				</section>
			</div>
		</div>
	)
}

export default Main1
