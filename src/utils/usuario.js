// usuario.js
// Simulación de usuarios y login con JWT para frontend



export const usuarios = [
  {
    id: 1,
    password: 'Prueba_123',
    role: 'cliente',
    email: 'cliente@demo.com',
    direccion: 'Av. Siempre Viva 123, Santiago',
    nombre: 'Juan Pérez',
    rut: '12.345.678-9',
  },
  {
    id: 2,
    password: 'Admin_123',
    role: 'admin',
    email: 'admin@demo.com',
    direccion: 'Oficina Central, Santiago',
    nombre: 'Miguel Cerda',
    rut: '11.111.111-1',
  }
];

// Agrega un nuevo usuario al array usuarios
export function addUsuario({ email, password, role, nombre, rut, direccion }) {
  // Evita duplicados por email
  if (usuarios.some(u => u.email === email)) return false;
  const nuevo = {
    id: usuarios.length ? Math.max(...usuarios.map(u => u.id)) + 1 : 1,
    email,
    password,
    role,
    nombre,
    rut,
    direccion
  };
  usuarios.push(nuevo);
  return true;
}

// Simula login: retorna un "token" stringificado si ok, null si error
export function loginUsuario(email, password) {
  const user = usuarios.find(u => u.email === email && u.password === password);
  if (!user) return null;
  // Simula un token como string plano (no seguro, solo demo)
  const token = btoa(JSON.stringify({
    id: user.id,
    role: user.role,
    email: user.email,
    direccion: user.direccion,
    nombre: user.nombre,
    rut: user.rut
  }));
  return token;
}

// Decodifica el "token" y retorna el payload (o null si inválido)
export function decodeToken(token) {
  try {
    return JSON.parse(atob(token));
  } catch {
    return null;
  }
}
