

import React, { useState } from 'react';
import productosData from './utils/productos';
import { usuarios } from './utils/usuario';
import Header from './components/Header/Header';
import { CartProvider } from './context/CartContext';
import CartContext from './context/CartContextDef';
import CartModal from './components/Modal/CartModal/CartModal';
import CheckoutModal from './components/Modal/CheckoutModal/CheckoutModal';
import SuccessModal from './components/Modal/SuccessModal/SuccessModal';
import BuscadorNavbar from './components/BuscadorNavbar/BuscadorNavbar';
import Centro from './components/Centro/Centro';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import './App.css';
import UserProfileModal from './components/Modal/UserProfileModal/UserProfileModal';

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [filtros, setFiltros] = useState({});
  const [showCart, setShowCart] = useState(false);
  const [productosFiltrados, setProductosFiltrados] = useState(productosData.filter(p => p.destacado === 1));
  const [mensajeError, setMensajeError] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [usuario, setUsuario] = useState(null);
  const [showRegister, setShowRegister] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [numeroOrden, setNumeroOrden] = useState(null);

  const handleBuscar = () => {
    // Si no hay palabra de búsqueda y se selecciona una categoría, mostrar error
    const algunaCategoria = filtros.oferta || filtros.servicio || filtros.producto || filtros.online || filtros.todos;
    if (algunaCategoria && !busqueda.trim()) {
      setMensajeError("Debes ingresar una palabra para buscar.");
      setProductosFiltrados([]);
      return;
    }
    setMensajeError("");
    let resultado = productosData;
    // Filtrar por categorías
    if (filtros.todos) {
      // Si está seleccionado 'todos', no filtrar por ninguna categoría específica
    } else {
      if (filtros.oferta) resultado = resultado.filter(p => p.oferta === 1);
      if (filtros.servicio) resultado = resultado.filter(p => p.servicio === 1);
      if (filtros.producto) resultado = resultado.filter(p => p.no_fisico === 0);
      if (filtros.online) resultado = resultado.filter(p => p.no_fisico === 1);
    }
    // Si hay palabra de búsqueda, filtrar por nombre o descripción
    if (busqueda.trim()) {
      const palabra = busqueda.trim().toLowerCase();
      resultado = resultado.filter(p =>
        p.nombre.toLowerCase().includes(palabra) ||
        p.descripcion.toLowerCase().includes(palabra)
      );
    }
    // Si no hay filtros ni búsqueda, mostrar destacados
    if (!algunaCategoria && !busqueda.trim()) {
      resultado = productosData.filter(p => p.destacado === 1);
    }
    setProductosFiltrados(resultado);
  };

  return (
    <CartProvider>
      <CartContext.Consumer>
        {({ cart, addToCart, removeFromCart, clearCart }) => (
          <div className="app-container">
            <Header onCartClick={() => setShowCart(true)} cartCount={cart.reduce((sum, item) => sum + item.cantidad, 0)} />
            <BuscadorNavbar
              busqueda={busqueda}
              setBusqueda={setBusqueda}
              filtros={filtros}
              setFiltros={setFiltros}
              onBuscar={handleBuscar}
            />
            <Centro
              productos={productosFiltrados}
              mensajeError={mensajeError}
              onAddToCart={addToCart}
              isLoggedIn={!!usuario}
              userName={usuario ? (usuario.nombre || usuario.username || usuario.email) : ""}
              userRole={usuario ? usuario.role : ""}
              onLoginClick={() => setShowLogin(true)}
              onLogoutClick={() => setUsuario(null)}
              onShowProfile={() => {
                // Buscar el usuario actualizado en usuarios.js si existe
                if (usuario && usuario.email) {
                  const actualizado = usuarios.find(u => u.email === usuario.email);
                  if (actualizado) setUsuario({ ...usuario, ...actualizado });
                }
                setShowProfile(true);
              }}
              onAddProd={() => { /* lógica para agregar producto */ }}
              onModProd={() => { /* lógica para modificar producto */ }}
            />
            {showProfile && usuario && (
              <UserProfileModal
                user={usuario}
                onSave={nuevo => { setUsuario(nuevo); setShowProfile(false); }}
                onClose={() => setShowProfile(false)}
              />
            )}
            <Footer />
            {showCart && (
              <CartModal
                cart={cart}
                onClose={() => setShowCart(false)}
                onAdd={id => addToCart(cart.find(item => item.id === id))}
                onRemove={id => removeFromCart(id)}
                onDelete={() => clearCart()}
                isLoggedIn={!!usuario}
                onLoginClick={() => setShowLogin(true)}
                onBuy={() => {
                  setShowCart(false);
                  setTimeout(() => setShowCheckout(true), 200);
                }}
              />
            )}
            {showCheckout && (
              <CheckoutModal
                direccion={usuario?.direccion}
                onCancel={() => setShowCheckout(false)}
                onConfirm={() => {
                  setShowCheckout(false);
                  // Simular número de orden y mostrar modal de éxito
                  const numero = Math.floor(Math.random() * 900000 + 100000);
                  setNumeroOrden(numero);
                  setShowSuccess(true);
                  clearCart();
                }}
              />
            )}
            {showSuccess && (
              <SuccessModal
                numeroOrden={numeroOrden}
                onClose={() => setShowSuccess(false)}
              />
            )}
            {showLogin && (
              <Login
                onLogin={user => { setUsuario(user); setShowLogin(false); }}
                onClose={() => setShowLogin(false)}
                onShowRegister={() => { setShowLogin(false); setShowRegister(true); }}
              />
            )}
            {showRegister && (
              <Register
                onRegister={user => { setUsuario(user); setShowRegister(false); }}
                onClose={() => setShowRegister(false)}
              />
            )}
          </div>
        )}
      </CartContext.Consumer>
    </CartProvider>
  );
}

export default App;
