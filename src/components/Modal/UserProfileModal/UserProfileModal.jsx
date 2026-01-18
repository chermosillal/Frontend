import React, { useState } from "react";
import "./UserProfileModal.css";

export default function UserProfileModal({ user, onSave, onClose }) {
  const [form, setForm] = useState({
    nombre: user.nombre || "",
    rut: user.rut || "",
    email: user.email || "",
    direccion: user.direccion || "",
    password: ""
  });
  const [msg, setMsg] = useState("");

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Simulación: cambia nombre, rut, email y dirección localmente
    onSave({ ...user, nombre: form.nombre, rut: form.rut, email: form.email, direccion: form.direccion });
    setMsg("Datos actualizados correctamente");
    setTimeout(onClose, 1200);
  };

  return (
    <div className="userprofile-modal-bg">
      <div className="userprofile-modal" onClick={e => e.stopPropagation()}>
        <h2>Mis datos</h2>
        <div style={{textAlign:'center', color:'#888', fontSize:'0.98em', marginBottom: '10px'}}>
          Nota: estos serán los datos de envío y facturación
        </div>
        <form onSubmit={handleSubmit}>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />
          <label>RUT:</label>
          <input
            type="text"
            name="rut"
            value={form.rut}
            onChange={handleChange}
            required
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <label>Dirección:</label>
          <input
            type="text"
            name="direccion"
            value={form.direccion}
            onChange={handleChange}
            required
          />
          <label>Contraseña:</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            autoComplete="new-password"
          />
          <button type="submit">Guardar cambios</button>
        </form>
        {msg && <div className="userprofile-msg">{msg}</div>}
        <button className="userprofile-close" onClick={onClose} title="Cerrar">&times;</button>
      </div>
    </div>
  );
}
