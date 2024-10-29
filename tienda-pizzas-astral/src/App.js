import './App.css';
import NavBar from './componentes/NavBar';
import Header from './componentes/Header';
import Article from './componentes/Article';
import Footer from './componentes/Footer';
import Nosotros from './componentes/Nosotros';
import Pizzas from './componentes/Pizzas';
import Promociones from './componentes/Promociones';
import Carrito from './componentes/Carrito';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  return (

    <div className="App">
      <BrowserRouter>

        <NavBar />
        <Header />

        <Routes>
          <Route path='/' element={ <Article cart={cart} setCart={setCart} total={total} setTotal={setTotal} /> } />
          <Route path='/pizzas' element={ <Pizzas cart={cart} setCart={setCart} total={total} setTotal={setTotal} /> } />
          <Route path='/promociones' element={ <Promociones cart={cart} setCart={setCart} total={total} setTotal={setTotal} /> } />
          <Route path='/nosotros' element={ <Nosotros /> } />
          <Route path='/carritobuy' element={ <Carrito cart={cart} setCart={setCart} total={total} setTotal={setTotal} /> } />
        </Routes>

        <Footer />

      </BrowserRouter>

    </div>

  );
}

export default App;
