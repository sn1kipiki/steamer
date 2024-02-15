import React from 'react'
import coment1 from './img/coment1.jpg'
import coment21 from './img/coment2-1.jpg'
import coment22 from './img/coment2-2.jpg'
import coment3 from './img/coment3.jpg'
import quotes from './img/double-quotes-l.svg'
import face1 from './img/face1.jpg'
import face2 from './img/face2.jpg'
import face3 from './img/face3.jpg'
import face4 from './img/face4.jpg'

import './styles.scss'
function ComentsSection() {
	return (
		 <section className='coments'>
					<h3 className='coments-title'>ВІДГУКИ ПОКУПЦІВ</h3>
					<div className='coment-block'>
						<div className='comet-top'>
							<img className='coment-avatar' src={face1} alt='' />
							<p className='coment-name'>Данило Кауфман</p>
							<img src={quotes} alt='' className='coment-picture' />
						</div>
						<p className='coment-text'>Доброго дня ! Сьогодні отримав ,та відразу вирішив спробувати його в дії .
						Прибирання дуже зручне ,швидке ,та якісне .Я задоволений на всі 100% .
						Це зекономило мені багато грошей на майбутнє,та часу .</p>
						<img src={coment1} alt='' className='coment-img' />
					</div>
					<div className='coment-block'>
						<div className='comet-top'>
							<img className='coment-avatar' src={face2} alt='' />
							<p className='coment-name'>Юлія Гук</p>
							<img src={quotes} alt='' className='coment-picture' />
						</div>
						<p className='coment-text'>Пробувала використовувати і в авто ,і вдома .Зі своєю задачею впорався !
						Слава Україні!! </p>
						<img src={coment21} alt='' className='coment-img' />
						<img src={coment22} alt='' className='coment-img' />
					</div>
					<div className='coment-block'>
						<div className='comet-top'>
							<img className='coment-avatar' src={face3} alt='' />
							<p className='coment-name'>Акименко Христина</p>
							<img src={quotes} alt='' className='coment-picture' />
						</div>
						<p className='coment-text'>Все чудово ,задоволена покупкою. </p>
						<img src={coment3} alt='' className='coment-img' />
						
					</div>
					<div className='coment-block'>
						<div className='comet-top'>
							<img className='coment-avatar' src={face4} alt='' />
							<p className='coment-name'>Керницький Предислав</p>
							<img src={quotes} alt='' className='coment-picture' />
						</div>
						<p className='coment-text'>Сьогодні забрав з пошти ,доїхало в нормальному стані ,працює клас ,за таку ціну - це саме те . </p>
						
						
					</div>
					
				</section> 
	)
}

export default ComentsSection