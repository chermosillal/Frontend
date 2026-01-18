# ClickTeach Frontend

Sistema de e-commerce educativo desarrollado en React + Vite.

## Requisitos
- Node.js >= 18.x
- npm >= 9.x

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/clickteach-frontend.git
   cd clickteach-frontend
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```

## Uso en desarrollo

Inicia el servidor de desarrollo:
```bash
npm run dev
```
Abre tu navegador en [http://localhost:5173](http://localhost:5173) (o el puerto que indique la terminal).

## Scripts disponibles
- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Genera el build de producción en la carpeta `dist/`.
- `npm run preview`: Sirve el build de producción localmente para pruebas finales.
- `npm run lint`: Ejecuta ESLint para revisar la calidad del código.

## Estructura principal
- `src/components/`: Componentes de UI (productos, modales, header, etc.)
- `src/utils/`: Datos simulados (productos, usuarios, imágenes)
- `src/context/`: Contexto global del carrito
- `public/`: Archivos estáticos (sin imágenes, ya que se usan URLs externas)

## Datos de prueba
- Usuarios de prueba definidos en `src/utils/usuario.js`.
- Productos y sus imágenes definidos en `src/utils/productos.js` y `src/utils/imagenes.js`.

## Pruebas manuales
1. Buscar productos, aplicar filtros y ver resultados en tiempo real.
2. Agregar productos al carrito, modificar cantidades y simular compra.
3. Probar login y registro con los usuarios de prueba o crear nuevos.
4. Editar datos de usuario desde el modal de perfil.
5. Visualizar imágenes de productos (todas servidas desde URLs externas).

## Despliegue
1. Ejecuta `npm run build` para generar la carpeta `dist/`.
2. Sube el contenido de `dist/` a cualquier servidor estático (Netlify, Vercel, Nginx, etc.).

## Notas
- El sistema está preparado para integrarse con un backend real (Express, API REST, etc.).
- Las imágenes de productos están centralizadas en `src/utils/imagenes.js` y usan URLs públicas.
- Para migrar a backend, reemplaza los datos simulados por llamadas a API.

---

¡Contribuciones y sugerencias son bienvenidas!
