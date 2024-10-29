import React, { useState } from 'react';
import '../estilos/Article.css';
import promo from '../img/promo.png';
import local from '../img/local.png';
import hawaiana from '../img/hawaiana.png';
import promo1 from '../img/promo1.png';
import pizzalomo from '../img/pizzalomo.png';

import { Link } from 'react-router-dom';


function Article({ cart, setCart, total, setTotal }) {

  const [cantidades, setCantidades] = useState({
    cantidad1: 1,
    cantidad2: 1,
    cantidad3: 1
  }); // Estado para manejar la cantidad

  
  const handleAgregar = (id, name, price) => {
    const cantidad = parseInt(cantidades[id], 10); // Asegurarse de que sea un número
    const existingProductIndex = cart.findIndex(item => item.name === name); // Buscar si ya existe el producto
  
    if (existingProductIndex !== -1) {
      // Si el producto ya existe en el carrito, actualizamos su cantidad
      const updatedCart = cart.map((item, index) => {
        if (index === existingProductIndex) {
          return {
            ...item,
            cantidad: item.cantidad + cantidad, // Incrementar la cantidad
          };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      // Si no existe, lo agregamos como nuevo producto
      const newProduct = { name, price, cantidad };
      setCart([...cart, newProduct]);
    }
  
    // Actualizar el total
    setTotal(total + price * cantidad);
    alert(`Has agregado ${cantidad} ${name}(s) al carrito`);
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setCantidades({
      ...cantidades,
      [name]: value
    });
  };

  const regresarMenu = () => {

  }

  //////////

  return (
    <div>

      <div className='contenedor-h1'>
        <h1>¡LO MAS VENDIDO!</h1>
      </div>
      <div className='contenedor-p'>
        <p>Te mostramos las pizzas y promociones mas pedidas que tenemos para ti!!</p>
      </div>


      <div className='contenedor-catalogo'>

        <figure className='pizza-card animate-entry'>
          <img src={hawaiana} className="catalogo" alt="hawaiana" />
          <figcaption><strong>PIZZA HAWAIANA FAMILIAR</strong></figcaption>
          <p>Precio: <strong>S/20</strong></p>
          <input
            type="number"
            name="cantidad1"
            id="cantidad1"
            value={cantidades.cantidad1}
            onChange={handleChange}
            min="1"
            className="input-cantidad" />

          <input
            type="button"
            value="Comprar"
            onClick={() => handleAgregar('cantidad1', 'Pizza Hawaiana Familiar', 20)}
            className="button-comprar" /><br /><br />

          <Link to="/pizzas">
          <input
            type="button"
            value="IR A PIZZAS"
            onClick={regresarMenu}
            className="button-pizzas"
          />
          </Link>
        </figure>

        <figure className='pizza-card animate-entry'>
          <img src={promo1} className="catalogo" alt="promo1" />
          <figcaption><strong>PIZZA PROMO 1</strong></figcaption>
          <p>Precio: <strong>S/45</strong></p>
          <input
            type="number"
            name="cantidad2"
            id="cantidad2"
            value={cantidades.cantidad2}
            onChange={handleChange}
            min="1"
            className="input-cantidad" />
          
          <input
            type="button"
            value="Comprar"
            onClick={() => handleAgregar('cantidad2', 'Pizza Promo 1', 45)}
            className="button-comprar" /><br /><br />


          <Link to="/promociones">
          <input
            type="button"
            value="IR A PROMOCIONES"
            onClick={regresarMenu}
            className="button-pizzas"
          />
          </Link>
        </figure>

        <figure className='pizza-card animate-entry'>
          <img src={pizzalomo} className="catalogo" alt="pizzalomo" />
          <figcaption><strong>PIZZA DE LOMO SALTADO</strong></figcaption>
          <p>Precio: <strong>S/30</strong></p>
          <input
            type="number"
            name="cantidad3"
            id="cantidad3"
            value={cantidades.cantidad3}
            onChange={handleChange}
            min="1"
            className="input-cantidad" />

          <input
            type="button"
            value="Comprar"
            onClick={() => handleAgregar('cantidad3', 'Pizza Lomo Saltado', 30)}
            className="button-comprar" /><br /><br />

          <Link to="/pizzas">
          <input
            type="button"
            value="IR A PIZZAS"
            onClick={regresarMenu}
            className="button-pizzas"
          />
          </Link>
        </figure>

      </div>

      <div className='espacio'>

      </div>


      <div className="contenedor-fotos">
        <figure className='foto-card'>
          <img src={local} className="foto" alt="local" />
          <figcaption>
            <strong>NUEVO LOCAL "SURCO"</strong><br></br>
            Por que ustedes lo pidieron, nueva sucursal, no te quedes<br></br> con las ganas y reclama
            las ofertas que tenemos para ti, <br></br>por inauguracion o hasta agotar stock.</figcaption>
        </figure>

        <figure className='foto-card'>
          <img src={promo} className="foto" alt="promo" />
          <figcaption>
            <strong>PROMO CUMPLEAÑERA</strong><br></br>
            Si hoy cumpleas años "Pizzas Astral" te celebra, ven con<br></br> tus amigos, presenta
            tu DNI y por la compra de 1 pizza<br></br> familiar, reclama la 2da completamente ¡GRATIS!</figcaption>
        </figure>
      </div>

     

    </div>
  );
}

export default Article;