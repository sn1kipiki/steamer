import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import { Notifications } from '@mantine/notifications'
// import Form from './pages/Form'
import Main1 from './pages/Main1'
import MetaPixel from './utils/MetaPixel'
function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Notifications />
				{/* <Form/> */}
				<Routes>
					<Route path='/' element={<Main1 />} />
					{/* <Route path='/form' element={<Form />} /> */}
				</Routes>
				
				<MetaPixel />
			</div>
		</BrowserRouter>
	)
}

export default App
