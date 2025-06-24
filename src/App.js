import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import Home from './Pages/Home/Home';

import Newsletter from './Pages/Newsletter/Newsletter';


function App() {
  return (
    <HelmetProvider>
      <div className="App">
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true,
        }}
      >
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/newsletter' element={<Newsletter/>}/>   
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </div>
    </HelmetProvider>
  );
}

export default App;
