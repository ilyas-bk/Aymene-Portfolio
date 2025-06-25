import {Routes, Route} from 'react-router-dom';

import Home from './pages/Home'
import Graphicsfolio from './pages/GraphicsFolio';
import Products from './pages/Products';



function App() {
  return (
    <Routes>
      <Route index path='/' element={<Home />} />
      <Route path='/graphicsfolio' element={<Graphicsfolio />} />
      <Route path='/products' element={<Products />} />
    </Routes>
  )
}

export default App;