// src/Context/CartContext.js
import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Función para añadir un producto al carrito
  const addToCart = (product, quantity) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      
      // Verificar si el producto ya existe en el carrito
      if (existingProduct) {
        // Calcular la cantidad total si se añade el producto de nuevo
        const totalQuantity = existingProduct.quantity + quantity;
        
        // Si la cantidad total supera el stock, no añadir más
        if (totalQuantity > product.stock) {
          alert(`No se pueden añadir más de ${product.stock} unidades de este producto.`);
          return prevCart;
        }
        
        // Actualizar la cantidad si está dentro del límite de stock
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: totalQuantity }
            : item
        );
      } else {
        // Si el producto no está en el carrito, añadirlo si no supera el stock
        if (quantity > product.stock) {
          alert(`No se pueden añadir más de ${product.stock} unidades de este producto.`);
          return prevCart;
        }
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = productId => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };
  const removeAllFromCart = ()=> {
    setCart([]);
  };


  // Función para vaciar el carrito al hacer checkout
  const checkout = () => {
    setCart([]);
    alert("Compra realizada exitosamente.");
  };

  // Obtener el total de artículos en el carrito
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, checkout, totalItems,removeAllFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
