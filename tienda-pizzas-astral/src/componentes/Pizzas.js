import "../estilos/Pizzas.css";
import americana from "../img/americana.png";
import hawaiana from "../img/hawaiana2.png";
import quesos from "../img/6quesos.png";
import peperoni from "../img/peperoni.png";
import continentale from "../img/continental.png";
import vegetariana from "../img/vegetariana.png";
import hot from "../img/hotchicken.png";
import bbq from "../img/bbq.png";


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
      name: "Americana",
      image: americana,
      price: "S/20",
      p: "Queso Mozarella, Salsa de Tomate y Jamon Americano.",
    },
    {
      name: "Hawaiana",
      image: hawaiana,
      price: "S/24",
      p: "Queso Mozarella, Salsa de Tomate, Jamon y Pina.",
    },
    {
      name: "6 Quesos",
      image: quesos,
      price: "S/25",
      p: "6 Quesos, Salsa de Tomare, Oregao y Tomate.",
    },
    {
      name: "Peperoni",
      image: peperoni,
      price: "S/20",
      p: "Queso Mozarella, Pepperoni y Salsa de Tomate.",
    },
    {
      name: "Continentalle",
      image: continentale,
      price: "S/24",
      p: "Queso Mozarella, Jamon, Salsa de Tomate, Champiniones y Cebolla.",
    },
    {
      name: "Vegetariana",
      image: vegetariana,
      price: "S/22",
      p: "Cebolla Blanca, Champinones, Pimiento, Aceitunas Verdes.",
    },
    {
      name: "HotChicken",
      image: hot,
      price: "S/29",
      p: "Pollo, champiñones, tomate, jalapeños picantes y salsa ranch.",
    },
    {
      name: "Chicken BBQ",
      image: bbq,
      price: "S/30",
      p: "Salsa barbacoa, Pollo a la parrilla, Tocino y Cebolla Blanca.",
    },
  ];

//////

  return (
    <div id="menu">
      <div className="titulo">
        <h1>PIZZAS</h1>
        <p>Te mostramos las mejores pizzas hechas con los mejores ingredientes.</p>
      </div>

      <div className="menu-cards">
        {menu.map((menus) => (
          <div key={menus.name} className="menu-card">
            <img src={menus.image} alt={menus.name} />
            <article className="menu-about">
              <div className="menu-name">
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
