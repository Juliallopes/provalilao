import React from 'react';




import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App'

import Cadastro from './pages/Cadastro';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer/>
    <BrowserRouter>
      <Routes>

          <Route path='/Cadastro'        element={<Cadastro />} />
          
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);