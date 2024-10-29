import "../estilos/Promociones.css";
import promo1 from "../img/promo1.png";
import promo2 from "../img/promo2.png";
import promo3 from "../img/promo3.png";
import combo1 from "../img/combo1.png";
import combo2 from "../img/combo2.png";
import combo3 from "../img/combo3.png";


function Pizzas({ cart, setCart, total, setTotal }) {

  // Agregar al carrito
  const addToCart = (menus) => {
    const priceNumber = parseFloat(menus.price.replace("S/", ""));
    
    const pizzaInCart = cart.find((item) => item.name === menus.name);
    
    if (pizzaInCart) {
      const updatedCart = cart.map((item) =>
        item.name === menus.name
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...menus, cantidad: 1, price: priceNumber }]);
    }
    
    // Actualizar el total
    setTotal(total + priceNumber);
  alert(`Producto agregado al Carrito de Compras.`);
};


  const menu = [
    {
      name: "Promoción 1",
      image: promo1,
      price: "S/45",
      p: "1 Pizza grande + pizza pequeña + gaseosa",
    },
    {
      name: "Promoción 2",
      image: promo2,
      price: "S/55",
      p: "2 Pizzas familiar + gaseosa",
    },
    {
      name: "Promoción 3",
      image: promo3,
      price: "S/40",
      p: "2 Pizzas grandes + gaseosa",
    },
    {
      name: "Combo 1",
      image: combo1,
      price: "S/50",
      p: "1 Pizza familiar + 2 pizzas personales de 5 sabores",
    },
    {
      name: "Combo 2",
      image: combo2,
      price: "S/60",
      p: "2 Pizzas grandes de 5 sabores + gaseosa",
    },
    {
      name: "Combo 3",
      image: combo3,
      price: "S/70",
      p: "2 Pizzas familiar de 5 sabores",
    },
    
  ];

//////

  return (
    <div id="menu-promo">
      <div className="titulo-promo">
        <h1>PROMOCIONES</h1>
        <p>Te mostramos las mejores promociones hechas con los mejores ingredientes.</p>
      </div>

      <div className="menu-cards-promo">
        {menu.map((menus) => (
          <div key={menus.name} className="menu-card-promo">
            <img src={menus.image} alt={menus.name} />
            <article className="menu-about-promo">
              <div className="menu-name-promo">
                <strong>{menus.name}</strong>
                {menus.p}
                <strong>{menus.price}</strong>
              </div>
              <div>
                <button onClick={() => addToCart(menus)}>
                  Agregar al carrito
                </button>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pizzas;
