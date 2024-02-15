import React from 'react'
import orderimg from './img/order.jpg'
import './styles.scss'
function DoOrderSection() {
	return (
		<section className='do-order'>
					<h3 className='do-order-title'>
						ЯК ЗРОБИТИ <span>ЗАМОВЛЕННЯ?</span>
					</h3>
					<img src={orderimg} alt='' className='do-order-img' />
				</section>
	)
}

export default DoOrderSection