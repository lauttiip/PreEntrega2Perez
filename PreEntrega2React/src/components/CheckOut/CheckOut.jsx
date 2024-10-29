import React, { useContext } from "react";
import { CartContext } from "../CartWidget/CartContext";

function CheckOut() {
  const { cart, removeFromCart, checkout,removeAllFromCart } = useContext(CartContext);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>
              <h3>{item.title}</h3>
              <p>Precio: ${item.price}</p>
              <p>Cantidad: {item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>Quitar</button>
            </div>
          ))}
          <button onClick={checkout}>Finalizar compra</button>
          <button onClick={() => removeAllFromCart()}>Vaciar Carrito</button>
        </div>
      )}
    </div>
  );
}

export default CheckOut;
