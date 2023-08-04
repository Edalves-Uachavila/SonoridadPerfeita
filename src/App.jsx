

import "./App.css"
import {HashRouter, BrowserRouter , Routes, Route } from 'react-router-dom';
import { Ladingpage } from "./pages/pt/ladingpage";
import { Pedido } from "./pages/pt/pedido";
import { Ladingpage_es } from "./pages/es/ladingpage_es";
import { Pedido_es } from "./pages/es/pedido_es";





function App(){

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Ladingpage_es/>}/>
        <Route path="pedido" element = {<Pedido_es/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
