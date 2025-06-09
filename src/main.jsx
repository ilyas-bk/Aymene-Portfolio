import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import Graphicsfolio from './pages/GraphicsFolio';
import Products from './pages/Products';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.Fragment>
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/graphicsfolio' element={<Graphicsfolio />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </BrowserRouter>
  </React.Fragment>
)
