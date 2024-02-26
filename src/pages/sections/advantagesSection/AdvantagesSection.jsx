import React from 'react'
import img1 from './img/img-1.jpg'
import img2 from './img/img-2.jpg'
import img3 from './img/img-3.jpg'
import './styles.scss'
function AdvantagesSection() {
	
	return (
		<section className='advantages'>
			<div className="container">

			<h3 className='advantages-title'>ПЕРЕВАГИ</h3>
			<div className='advantages-bloks'>
				<div className='advantages-blok'>
					<img src={img1} alt='' className='advantages-img' />
				</div>
				<div className='advantages-blok advantages-blok_t'>
					<p className='advantages-blok-name'>ПОТУЖНИЙ</p>
					<p className='advantages-blok-text'>
						Має високу потужність всмоктування, що дозволяє швидко та ефективно
						видаляти сміття та пил із салону автомобіля або надути човен.
					</p>
				</div>
				<div className='advantages-blok advantages-blok_t'>
					<p className='advantages-blok-name'>КОМПАКТНИЙ</p>
					<p className='advantages-blok-text'>
						Займає мінімум місця у багажнику - ви зможете з комфортом возити
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
						Акумулятор пилососа повністю заряджається за 2 години, що дозволяє
						швидко відновити його працездатність після використання.
					</p>
				</div>
			</div>
			</div>
		</section>
	)
}

export default AdvantagesSection
