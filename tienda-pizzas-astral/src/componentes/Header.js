import React, {useState, useEffect} from 'react';
import '../estilos/Header.css';
import banner from '../img/banner.png';
import banner2 from '../img/banner2.png';
import banner3 from '../img/banner3.png';
import banner4 from '../img/banner4.png';

function Header () {

 const images = [banner, banner2, banner3, banner4];

 const [indicePrimeraImagen, setIndicePrimeraImagen] = useState(0);

 useEffect(() => {

    const intervaloId = setInterval(() => {
        setIndicePrimeraImagen((prevIndice) =>
        (prevIndice + 1) % images.length
    );
    }, 3000); //se coloca el tiempo para la transicion de cada imagen

    return () => clearInterval(intervaloId);

 }, [images.length]);

//////////////

    return (
        <header className='contenedor-header'>
            <img src={images[indicePrimeraImagen]} className='banner' alt="banner" />
            <div className='contenedor-horario'>
                <p>Delivery GRATIS de Viernes a Domingos / Atencion de: 10am a 10pm - Exclusivo solo Web</p>
            </div>
        </header>
    );
}

export default Header;