

import React, { useState } from "react";
import "./Centro.css";
import ProductCard from "../Productos/ProductCard/ProductCard";
import DetalleProd from "../Modal/DetalleProd/DetalleProd";
import UserBar from "../UserBar/UserBar";

export default function Centro({ productos = [], mensajeError = "", onAddToCart, isLoggedIn, userName, userRole, onLoginClick, onLogoutClick, onShowProfile, onAddProd, onModProd }) {
  const [detalle, setDetalle] = useState(null);

  return (
    <div className="centro-content">
      <UserBar
        isLoggedIn={isLoggedIn}
        userName={userName}
        userRole={userRole}
        onLoginClick={onLoginClick}
        onLogoutClick={onLogoutClick}
        onShowProfile={onShowProfile}
        onAddProd={onAddProd}
        onModProd={onModProd}
      />
      {detalle ? (
        <DetalleProd producto={detalle} onClose={() => setDetalle(null)} onAddToCart={onAddToCart} />
      ) : (
        <div className="productos-grid">
          {mensajeError ? (
            <p style={{ color: 'red', textAlign: 'center', width: '100%', fontWeight: 'bold', fontSize: '1.1rem', margin: '2rem auto' }}>{mensajeError}</p>
          ) : productos.length === 0 ? (
            <p style={{ color: 'blue', textAlign: 'center', width: '100%', fontWeight: 'bold', fontSize: '1.1rem', margin: '2rem auto' }}>No se encontraron productos.</p>
          ) : (
            productos.map((producto) => (
              <ProductCard
                key={producto.id}
                id={producto.id}
                nombre={producto.nombre}
                descripcion={producto.descripcion}
                precio={producto.precio}
                onVerMas={() => setDetalle(producto)}
                onAddToCart={() => onAddToCart(producto)}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}
