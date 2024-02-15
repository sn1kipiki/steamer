import React from 'react'
import AdvantagesSection from './sections/advantagesSection/AdvantagesSection'
import CharacteristicsSection from './sections/characteristicsSection/CharacteristicsSection'
import ComentsSection from './sections/comentsSection/ComentsSection'
import DoOrderSection from './sections/doOrderSection/DoOrderSection'
import MainSection from './sections/mainSection/MainSection'

function Main1() {
	return (
		<div className='main'>
				<MainSection isTop={true}/>
				<AdvantagesSection/>
				<CharacteristicsSection/>
				<DoOrderSection/>
				<ComentsSection/>
				<MainSection isTop={false}/>
			</div>
	)
}

export default Main1
