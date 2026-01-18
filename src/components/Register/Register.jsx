
import React, { useState } from "react";
import "./Register.css";
import { addUsuario, loginUsuario, decodeToken } from "../../utils/usuario";

export default function Register({ onRegister, onClose }) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [nombre, setNombre] = useState("");
  const [rut, setRut] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");
  const [error, setError] = useState("");

  // Validación de email
  function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  // Validación simple de RUT chileno (formato y dígito verificador)
  function validarRut(rut) {
    rut = rut.replace(/\./g, '').replace(/-/g, '');
    if (!/^\d{7,8}[0-9kK]$/.test(rut)) return false;
    let cuerpo = rut.slice(0, -1);
    let dv = rut.slice(-1).toUpperCase();
    let suma = 0, multiplo = 2;
    for (let i = cuerpo.length - 1; i >= 0; i--) {
      suma += parseInt(cuerpo[i]) * multiplo;
      multiplo = multiplo < 7 ? multiplo + 1 : 2;
    }
    let dvEsperado = 11 - (suma % 11);
    dvEsperado = dvEsperado === 11 ? '0' : dvEsperado === 10 ? 'K' : dvEsperado.toString();
    return dv === dvEsperado;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !rut || !email || !direccion || !password || !confirm) {
      setError("Completa todos los campos");
      return;
    }
    if (!validarEmail(email)) {
      setError("El correo no es válido");
      return;
    }
    if (!validarRut(rut)) {
      setError("El RUT no es válido");
      return;
    }
    if (password !== confirm) {
      setError("Las contraseñas no coinciden");
      return;
    }
    // Agregar usuario al sistema simulado
    const ok = addUsuario({ email, password, role: "cliente", nombre, rut, direccion });
    if (!ok) {
      setError("El correo ya está registrado");
      return;
    }
    // Loguear automáticamente al usuario registrado
    const token = loginUsuario(email, password);
    let user = { email, role: "cliente", nombre, rut, direccion };
    if (token) {
      const payload = decodeToken(token);
      user = { ...user, token };
      if (payload) user = { ...user, ...payload };
    }
    onRegister(user);
  };

  return (
    <div className="register-modal-bg">
      <div className="register-modal" onClick={e => e.stopPropagation()}>
        <h2>Registrarse</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre completo"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            autoFocus
          />
          <input
            type="text"
            placeholder="RUT"
            value={rut}
            onChange={e => setRut(e.target.value)}
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Repetir contraseña"
            value={confirm}
            onChange={e => setConfirm(e.target.value)}
          />
          <input
            type="text"
            placeholder="Dirección"
            value={direccion}
            onChange={e => setDireccion(e.target.value)}
          />
          {error && <div className="register-error">{error}</div>}
          <button type="submit">Registrarse</button>
        </form>
        <button className="register-close" onClick={onClose}>&times;</button>
      </div>
    </div>
  );
}
