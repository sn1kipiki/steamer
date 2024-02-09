
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Main from './pages/Main';
import Form from './pages/Form';
import { Notifications } from '@mantine/notifications';
function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
       <Notifications/>
      {/* <Form/> */}
      <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/form" element={<Form/>} />
        </Routes>
    </div>
    </BrowserRouter>
    
    
  );
}

export default App;
