
import React, { useState } from "react";
import "./Login.css";
import { loginUsuario, decodeToken } from "../../utils/usuario";

export default function Login({ onLogin, onClose, onShowRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Debes ingresar email y contraseña");
      return;
    }
    const token = loginUsuario(email, password);
    if (!token) {
      setError("Credenciales incorrectas");
      return;
    }
    const payload = decodeToken(token);
    onLogin({
      username: payload.nombre || payload.email,
      nombre: payload.nombre,
      email: payload.email,
      role: payload.role,
      token
    });
  };

  return (
    <div className="login-modal-bg">
      <div className="login-modal" onClick={e => e.stopPropagation()}>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoFocus
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {error && <div className="login-error">{error}</div>}
          <button type="submit">Ingresar</button>
        </form>
        <div className="login-register-row">
          <span className="login-register-text">
            ¿No tienes cuenta?{' '}
            <button type="button" className="login-register-link" onClick={onShowRegister}>
              Regístrate
            </button>
          </span>
        </div>
        <button className="login-close" onClick={onClose}>&times;</button>
      </div>
    </div>
  );
}
