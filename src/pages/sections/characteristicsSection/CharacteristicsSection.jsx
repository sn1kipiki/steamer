import React from 'react'
import './styles.scss'

function CharacteristicsSection() {
	return (
		<section className='characteristics'>
			<div className="container">

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
			</div>
				</section>
	)
}

export default CharacteristicsSection