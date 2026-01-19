# ClickTeach Frontend


# Hito2 del proyecto final FullStack
# Ecommerce Clicktech

Repositorio: [https://github.com/chermosillal/Frontend](https://github.com/chermosillal/Frontend)

---

## Descripción
Este proyecto corresponde al primer hito del proyecto final FullStack: un sistema de e-commerce llamado Clicktech, desarrollado con React y Vite, usando únicamente CSS nativo para los estilos.

## Tecnologías utilizadas
- **React** + **Vite** para el desarrollo frontend.
- **CSS nativo** (sin frameworks ni librerías externas de estilos).

## Instalación y uso
1. Clona el repositorio:
   ```bash
   git clone https://github.com/chermosillal/Frontend.git
   cd Frontend
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abre tu navegador en [http://localhost:5173](http://localhost:5173)

## Acceso y usuarios de prueba
Puedes acceder al sistema usando los siguientes usuarios de prueba:

- **Cliente**
  - Email: cliente@demo.com
  - Contraseña: Prueba_123

- **Administrador**
  - Email: admin@demo.com
  - Contraseña: Admin_123

También puedes registrar nuevos usuarios desde la interfaz.

## Estructura principal
- `src/components/`: Componentes de UI (productos, modales, header, etc.)
- `src/utils/`: Datos simulados (productos, usuarios, imágenes)
- `src/context/`: Contexto global del carrito

## Notas
- Todas las imágenes de productos se sirven desde URLs externas (Postimg), centralizadas en `src/utils/imagenes.js`.
- El sistema está preparado para integrarse con un backend real en el futuro.

---
¡Contribuciones y sugerencias son bienvenidas!
- Las imágenes de productos están centralizadas en `src/utils/imagenes.js` y usan URLs públicas.
