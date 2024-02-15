
import './styles/App.scss'

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import { Notifications } from '@mantine/notifications'
// import Form from './pages/Form'
import Main from './pages/Main'
import MetaPixel from './utils/MetaPixel'
function App() {
	return (
			<div className='App'>
				<Notifications />
				<Main />
				<MetaPixel />
			</div>
	)
}

export default App
