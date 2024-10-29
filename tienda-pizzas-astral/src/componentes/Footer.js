import React from 'react'
import '../estilos/Footer.css';
import facebook from '../img/facebook.png';
import instagram from '../img/instagram.png';
import tiktok from '../img/tiktok.png';
import twiter from '../img/twitter.png';
import youtube from '../img/youtube.png';
import logo from '../img/logo.png';

function Footer() {
  return (

    <div className='contenedor-footer'>

      <div className='contenedor-logo-lista'>

        <div className='contenedor-logo'>
          <img src={logo} className='redes' alt="logo" />
        </div>

        <div className="contenedor-listado">
          <ul>
            <li><a className="titulo-enlace">SOBRE NOSOTROS</a></li><br></br>
            <li><a href="">Locales</a></li>
            <li><a href="">Terminos y condiciones</a></li>
            <li><a href="">Politicas de privacidad</a></li>
          </ul>
          <ul>
            <li><a className="titulo-enlace">SERVICIO AL CLIENTE</a></li><br></br>
            <li><a href="">Libro de Reclamaciones</a></li>
            <li><a href="">Comprobante electronico</a></li>
            <li><a href="">Preguntas frecuentes</a></li>
          </ul>
          <ul>
            <li><a className="titulo-enlace">CONTÁCTANOS</a></li><br></br>
            <li><a href="">+51 913568455</a></li>
            <li><a href="">pizza_astral@gmail.com</a></li>
            <li><a href="">Jr. Primavera 105 - San Isidro</a></li>
          </ul>
        </div>
      </div>

      <div className='contenedor-redes'>
        <div className='copyrigth'>
          <p>Copyright © 2024 Webside. All</p>
        </div>

        <div className='logos-redes'>
          <img src={facebook} className='redes' alt="facebook" />
          <img src={instagram} className='redes' alt="instagram" />
          <img src={tiktok} className='redes' alt="tiktok" />
          <img src={twiter} className='redes' alt="banner" />
          <img src={youtube} className='redes' alt="youtube" />
        </div>

      </div>

    </div>
  );
}

export default Footer;