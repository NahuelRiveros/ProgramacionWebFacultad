import {Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from "./components/nav";
import QuienesSomos from './components/quienesSomos';
import Footer from "./components/footer";
import ProductosAlimentos from "./components/ProductosAlimentos";
import ActividaFis from './components/activFisica'
import CuidMedAmbiente from './components/cuidMedioAmbient'
import Contactanos from './components/contactanos'
import ClientOpinan from './components/nueCliOpinan';
import CalidadVida from './components/Cursos/CalidadVida';
import ActvFisica from './components/Cursos/PlanActFisc';
import PequeAcciones from './components/Cursos/PequeñasAcc';
function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <NavBar>
      </NavBar>
      <Routes>
          <Route path='/QuienesSomos' element={<QuienesSomos/>}></Route>
          <Route path='/ProductosAlimentos' element={<ProductosAlimentos/>}></Route>
          <Route path='/ActividadFisica' element={<ActividaFis/>}></Route>
          <Route path='/CuidMedAmbiente' element={<CuidMedAmbiente/>}></Route>
          <Route path='/Contactanos' element={<Contactanos/>}></Route>
          <Route path='/ClientOpinan' element={<ClientOpinan/>}></Route>
          <Route path='/CalidadVida' element={<CalidadVida/>}></Route>
          <Route path='/' element={<ActvFisica/>}></Route>
          <Route path='/PequeAcciones' element={<PequeAcciones/>}></Route>
      </Routes>
      <Footer>
      </Footer>
      </BrowserRouter>
    </div>
  )
}

export default App
