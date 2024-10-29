import '../estilos/Carrito.css';
import React, { useState } from 'react';
import { jsPDF } from 'jspdf';


function Carrito({ cart = [], setCart, total, setTotal }) {
  const [customerInfo, setCustomerInfo] = useState({
    nombre: '',
    dni: '',
    celular: '',
    direccion: '',
    metodoPago: ''
  });


  const handlePaymentChange = (e) => {
    setCustomerInfo({
      ...customerInfo,
      metodoPago: e.target.value
    });
  };

  const handleCustomerChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({
      ...customerInfo,
      [name]: value
    });
  };

  const removeItem = (index) => {
    const item = cart[index];
    const newCart = cart.filter((_, i) => i !== index);
    setTotal(total - item.price * item.cantidad);
    setCart(newCart);
  };

  const generarPDF = () => {
    const doc = new jsPDF();

    // Estilo del título principal
    doc.setFontSize(22);
    doc.setTextColor(40, 40, 40); // Gris oscuro
    doc.text('Detalle de la Compra', 105, 20, { align: 'center' });

    // Datos del cliente
    doc.setFontSize(16);
    doc.setTextColor(100, 100, 100); // Gris más claro
    doc.text('Datos del Cliente:', 10, 40);

    // Información del cliente
    doc.setFontSize(14);
    doc.setTextColor(50, 50, 50); // Gris medio
    doc.text(`Nombre: ${customerInfo.nombre}`, 10, 50);
    doc.text(`DNI: ${customerInfo.dni}`, 10, 60);
    doc.text(`Celular: ${customerInfo.celular}`, 10, 70);
    doc.text(`Dirección: ${customerInfo.direccion}`, 10, 80);

    // Método de pago
    doc.setFontSize(14);
    doc.setTextColor(50, 50, 50);
    doc.text(`Método de Pago: ${customerInfo.metodoPago}`, 10, 90);

    // Línea divisoria
    doc.setLineWidth(0.5);
    doc.setDrawColor(200, 200, 200); // Color gris claro para la línea
    doc.line(10, 95, 200, 95);

    // Sección de productos
    doc.setFontSize(16);
    doc.setTextColor(100, 100, 100);
    doc.text('Productos:', 10, 110);

    // Detalle de los productos
    doc.setFontSize(12);
    cart.forEach((item, index) => {
      const yPosition = 120 + (index * 10);
      doc.setTextColor(50, 50, 50); // Gris medio para los detalles de productos
      doc.text(`${index + 1}. ${item.name}`, 10, yPosition);
      doc.text(`Cantidad: ${item.cantidad}`, 120, yPosition);
      doc.text(`Precio: S/${(item.price * item.cantidad).toFixed(2)}`, 160, yPosition);
    });

    // Total a pagar
    const totalYPosition = 120 + (cart.length * 10) + 10;
    doc.setFontSize(16);
    doc.setTextColor(40, 40, 40); // Gris oscuro
    doc.text(`Total a Pagar: S/${total.toFixed(2)}`, 10, totalYPosition);

    // Guardar el PDF
    doc.save('detalle_compra.pdf');
  };



  return (
    <div className='carrito'>
      <h2>Carrito de Compras</h2>

      {/* Verificar si el carrito está vacío */}
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - Cantidad: {item.cantidad} - Precio: S/{(item.price * item.cantidad).toFixed(2)}
              <button onClick={() => removeItem(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}

      <h3 className='total-text'>Total: S/{total}</h3>

      {/* Formulario para datos del cliente */}
      <div className='formulario'>
        <h2>Completa tus Datos</h2>
        <label>
          Nombre:
          <input type="text" name="nombre" value={customerInfo.nombre} onChange={handleCustomerChange} />
        </label><br />
        <label>
          DNI:
          <input type="text" name="dni" value={customerInfo.dni} onChange={handleCustomerChange} />
        </label><br />
        <label>
          Celular:
          <input type="text" name="celular" value={customerInfo.celular} onChange={handleCustomerChange} />
        </label><br />
        <label>
          Dirección:
          <input type="text" name="direccion" value={customerInfo.direccion} onChange={handleCustomerChange} />
        </label><br />

        {/* Nuevo: Selección del método de pago */}
        <h3 className='texto-pago'>Selecciona tu método de pago:</h3>
        <div className="metodos-pago">
          <label>
            <input type="radio" name="metodoPago" value="Efectivo" onChange={handlePaymentChange} />
            Efectivo
          </label><br />
          <label>
            <input type="radio" name="metodoPago" value="Yape" onChange={handlePaymentChange} />
            Yape
          </label><br />
          <label>
            <input type="radio" name="metodoPago" value="Tarjeta" onChange={handlePaymentChange} />
            Tarjeta
          </label><br />
          <label>
            <input type="radio" name="metodoPago" value="Transferencia" onChange={handlePaymentChange} />
            Transferencia
          </label><br />
        </div>

        <button onClick={generarPDF}>Generar PDF</button>
      </div>
    </div>
  );
}

export default Carrito;