import React from 'react'
import '../estilos/NavBar.css';
import wasap from '../img/wasap.png';
import fijo from '../img/fijo.png';
import logo from '../img/logo.png';
import carrito from '../img/carrito.png';
import {Link} from 'react-router-dom';

function NavBar() {
    return (

        <nav className='contenedor-navbar'>

            <div className='contenedor-textos'>

                <img src={wasap} className='icono' alt="wasap" />

                <div className='contenedor-wasap'>
                    <a className='link-wasap' href='https://wa.link/fq9gu2' target='_blank' rel='noopener noreferrer'>
                    <p>Has tu pedido por whatsapp</p></a>
                </div>

                <img src={fijo} className='icono' alt="fijo" />

                <div className='contenedor-numero'>
                    <p>Llamanos al: 01-253 6545</p>
                </div>

            </div>

            <div className='contenedor-menu'>

                <div className='nada'>
                    <Link to="/" ><img src={logo} className='icono-logo' alt="logo" /></Link>
                </div>

                <ul>
                    <li><Link className="link-menu" to ="/">INICIO</Link></li>
                    <li><Link className="link-menu" to="pizzas">PIZZAS</Link></li>
                    <li><Link className="link-menu" to="promociones">PROMOCIONES</Link></li>
                    <li><Link className="link-menu" to = "nosotros">NOSOTROS</Link></li>
                </ul>

                <div className='div-buscar'>
                    <input type="text" placeholder='Buscar'></input>
                </div>

                <div className='nada'>
                    <Link to="/carritobuy"><img src={carrito} className='icono-carrito' alt="carrito" /></Link>
                </div>

            </div>


        </nav>

    );
}

export default NavBar;