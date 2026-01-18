

import React from "react";
import imagenes from "../../../utils/imagenes";
import "./ProductCard.css";

export default function ProductCard({ id, nombre, descripcion, precio, onVerMas, onAddToCart }) {
  // Buscar la imagen principal por id
  const imgObj = imagenes.find(img => img.id === id);
  let imgSrc = '';
  if (imgObj && imgObj.imagenes.length > 0) {
    imgSrc = imgObj.imagenes[0];
  } else {
    imgSrc = "https://i.postimg.cc/HVBfy2YB/default.png";
  }
  return (
    <>
      <div className="producto-card">
        {imgSrc && (
          <img
            src={imgSrc}
            alt={nombre}
            className="producto-img"
            onError={e => {
              if (!e.target.src.endsWith('default.png')) {
                e.target.src = "https://i.postimg.cc/HVBfy2YB/default.png";
              }
            }}
          />
        )}
        <div className="producto-info">
          <h2 className="producto-titulo">{nombre}</h2>
          <p className="producto-desc">{descripcion}</p>
          <div className="producto-precio">${precio.toLocaleString('es-CL')}</div>
        </div>
        <div className="producto-botones">
          <button
            className="client-btn producto-btn agregar"
            onClick={() => onAddToCart({ id, nombre, descripcion, precio })}
          >
            Agregar al carro
          </button>
          <div className="producto-boton-vermas-wrapper">
            <button
              className="client-btn producto-btn ver-mas"
              onClick={onVerMas}
            >
              Ver más
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
