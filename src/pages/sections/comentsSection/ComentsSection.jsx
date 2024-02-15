import React from 'react'

function ComentsSection() {
	return (
		 <section className='coments'>
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
				</section> 
	)
}

export default ComentsSection