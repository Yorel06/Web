import React from 'react';
import '../estilos/Nosotros.css';
import noso1 from '../img/con1.jpg';
import noso2 from '../img/con2.png';
import noso3 from '../img/con3.jpg';

function Nosotros() {

  return (
    <div className="contenedor-nosotros">
      <div className="contenedor-titulos">
        <h1>¡Sobre Nosotros! <em>"Pizzas Astral"</em></h1>
        <h3><em>"El arte de hacer pizza, desde el corazón hasta tu mesa."</em></h3>
      </div>

      <div className="contenedor-slogan">
        <img src={noso1} className="slogan" alt="hawaiana" />
        <p><strong>¡Bienvenidos a Pizza Astral!</strong> Somos una pizzería con 2 años en el mercado
          elaborando pizzas artesanales. Desde nuestros inicios, hemos mantenido
          la misma pasión por crear pizzas únicas, preparadas con ingredientes frescos y de
          alta calidad. En cada pizza, encontrarás la dedicación y el esmero que nos han
          distinguido a lo largo de casi una década. Nuestro compromiso es ofrecerte una
          experiencia auténtica, donde la tradición y la innovación se unen para brindarte el mejor sabor.</p>
      </div>

      <div className="contenedor-fila">
        <div className="contenedor-valores">
          <img src={noso2} className="horno" alt="horno" />
          <h3><em>Nuestros Valores</em></h3>
          <p><strong>Calidad</strong><br></br>
            En Pizza Astral nos esforzamos por ofrecer siempre productos de la más alta calidad.
            Cada pizza es el resultado de una cuidada selección de ingredientes frescos y de proximidad.</p>
          <p><strong>Tradición</strong><br></br>
            Respetamos las técnicas artesanales en la elaboración de nuestras pizzas, preservando la
            tradición que nos ha acompañado durante estos 9 años.</p>
          <p><strong>Compromiso</strong><br></br>
            Estamos comprometidos con nuestros clientes, ofreciendo un servicio impecable y adaptándonos a
            sus necesidades para asegurar una experiencia gastronómica excepcional.</p>
        </div>

        <div className="contenedor-historia">
          <img src={noso3} className="horno" alt="valores" />
          <h3><em>Nuestro Objetivo</em></h3>
          <p><strong>Expansión de nuestra comunidad</strong><br></br>
            Queremos llevar el sabor de Pizza Astral a más personas, ampliando nuestra base de clientes
            y fortaleciendo nuestra presencia en la comunidad.</p>
          <p><strong>Mejorar la experiencia del cliente</strong><br></br>
            Queremos llevar el sabor de Pizza Astral a más personas, ampliando nuestra base de clientes
            y fortaleciendo nuestra presencia en la comunidad.</p>
          <p><strong>Compromiso con la sostenibilidad</strong><br></br>
            Seguir implementando prácticas responsables, utilizando ingredientes locales y sostenibles,
            y reduciendo el uso de plásticos y otros materiales contaminantes.</p>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;


