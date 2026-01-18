
import React, { useState } from "react";
import imagenes from "../../../utils/imagenes";
import "./DetalleProd.css";

export default function DetalleProd({ producto, onClose, onAddToCart }) {
  const [imgIdx, setImgIdx] = useState(0);
  if (!producto) return null;
  // Buscar imágenes por id
  const imgObj = imagenes.find(img => img.id === producto.id);
  const imagenesArr = imgObj && imgObj.imagenes.length > 0 ? imgObj.imagenes : ["https://i.postimg.cc/HVBfy2YB/default.png"];
  const handlePrev = (e) => { e.stopPropagation(); setImgIdx(idx => (idx === 0 ? imagenesArr.length - 1 : idx - 1)); };
  const handleNext = (e) => { e.stopPropagation(); setImgIdx(idx => (idx === imagenesArr.length - 1 ? 0 : idx + 1)); };
  return (
    <div className="detalleprod-backdrop">
      <div className="detalleprod-modal">
        <div className="detalleprod-img-row">
          <img
            src={imagenesArr[imgIdx]}
            alt={producto.nombre}
            className="detalleprod-img"
            onError={e => {
              if (!e.target.src.endsWith('default.png')) {
                e.target.src = "https://i.postimg.cc/HVBfy2YB/default.png";
              }
            }}
          />
        </div>
        {imagenesArr.length > 1 && (
          <div className="detalleprod-img-controls">
            <button onClick={handlePrev} className="detalleprod-img-btn prev" aria-label="Anterior">&#8592;</button>
            <button onClick={handleNext} className="detalleprod-img-btn next" aria-label="Siguiente">&#8594;</button>
          </div>
        )}
        <h2 className="detalleprod-title">{producto.nombre}</h2>
        <p className="detalleprod-desc">{producto.descripcion}</p>
        <ul className="detalleprod-list">
          {producto.duracion && <li><b>Duración:</b> {producto.duracion}</li>}
          {producto.modalidad && <li><b>Modalidad:</b> {producto.modalidad}</li>}
          {producto.tipo && <li><b>Tipo:</b> {producto.tipo}</li>}
          {producto.marca && <li><b>Marca:</b> {producto.marca}</li>}
          <li><b>Incluye:</b> {producto.incluye}</li>
          {producto.garantia && <li><b>Garantía:</b> {producto.garantia}</li>}
          {producto.tipo === 'Físico' && (
            <li>
              <b>Stock:</b> {typeof producto.stock === 'number' ? (
                producto.stock > 0 ? (
                  <span className="detalleprod-stock"> {producto.stock} disponibles</span>
                ) : (
                  <span className="detalleprod-agotado"> Agotado</span>
                )
              ) : ' -'}
            </li>
          )}
        </ul>
        <div className="detalleprod-precio">${producto.precio.toLocaleString('es-CL')}</div>
        <div className="detalleprod-categoria">IVA Incluido</div>
        <button className="detalleprod-close" onClick={onClose} aria-label="Cerrar">&times;</button>
        <div className="detalleprod-btns">
          <button className="client-btn detalleprod-btn agregar" onClick={() => onAddToCart(producto)}>
            Agregar al carro
          </button>
        </div>
      </div>
    </div>
  );
}
