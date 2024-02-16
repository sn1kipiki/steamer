import React from 'react'
import orderimg from './img/order.jpg'
import './styles.scss'
function DoOrderSection() {
	return (
		<section className='do-order'>
			<div className="container">

					<h3 className='do-order-title'>
						ЯК ЗРОБИТИ <span>ЗАМОВЛЕННЯ?</span>
					</h3>
					<img src={orderimg} alt='' className='do-order-img' />
			</div>
				</section>
	)
}

export default DoOrderSection