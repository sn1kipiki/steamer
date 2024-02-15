import React from 'react'
import AdvantagesSection from './sections/advantagesSection/AdvantagesSection'
import CharacteristicsSection from './sections/characteristicsSection/CharacteristicsSection'
import DoOrderSection from './sections/doOrderSection/DoOrderSection'
import MainSection from './sections/mainSection/MainSection'
import './styles.scss'
function Main1() {
	return (
		<div className='main'>
				<MainSection isTop={true}/>
				<AdvantagesSection/>
				<CharacteristicsSection/>
				<DoOrderSection/>
				<MainSection isTop={false}/>
			</div>
	)
}

export default Main1
