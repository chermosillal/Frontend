// frontend/src/components/productos.js

const productos = [
  // 8 productos físicos (2 oferta, 2 sin stock)
  {
    id: 1,
    nombre: "Notebook Lenovo IdeaPad 3",
    descripcion: "Notebook 15.6'' FHD, Intel Core i5, 8GB RAM, 512GB SSD.",
    precio: 399990,
    marca: "Lenovo",
    incluye: "Notebook, cargador, manual",
    garantia: "1 año",
    stock: 3,
    oferta: 1,
    servicio: 0,
    no_fisico: 0,
    destacado: 1
  },
  {
    id: 2,
    nombre: "Mouse Logitech M280 Wireless",
    descripcion: "Mouse inalámbrico ergonómico, sensor óptico, 1000 DPI.",
    precio: 12990,
    marca: "Logitech",
    incluye: "Mouse, pila AA, receptor USB",
    garantia: "6 meses",
    stock: 0,
    oferta: 1,
    servicio: 0,
    no_fisico: 0,
    destacado: 0
  },
  {
    id: 3,
    nombre: "Teclado Mecánico Redragon Kumara",
    descripcion: "Teclado mecánico compacto, retroiluminado, switches Outemu Blue.",
    precio: 29990,
    marca: "Redragon",
    incluye: "Teclado, extractor de teclas, manual",
    garantia: "1 año",
    stock: 7,
    oferta: 0,
    servicio: 0,
    no_fisico: 0,
    destacado: 0
  },
  {
    id: 4,
    nombre: "Monitor Samsung 24'' FHD",
    descripcion: "Monitor LED 24 pulgadas, Full HD, HDMI, VGA.",
    precio: 109990,
    marca: "Samsung",
    incluye: "Monitor, cable HDMI, base",
    garantia: "2 años",
    stock: 0,
    oferta: 0,
    servicio: 0,
    no_fisico: 0,
    destacado: 1
  },
  {
    id: 5,
    nombre: "Impresora HP DeskJet 2720",
    descripcion: "Multifuncional inalámbrica, impresión, escaneo y copiado.",
    precio: 54990,
    marca: "HP",
    incluye: "Impresora, cartuchos, cable USB",
    garantia: "1 año",
    stock: 5,
    oferta: 0,
    servicio: 0,
    no_fisico: 0,
    destacado: 0
  },
  {
    id: 6,
    nombre: "Disco Duro Externo WD 1TB",
    descripcion: "Almacenamiento portátil USB 3.0, compatible con Windows y Mac.",
    precio: 49990,
    marca: "Western Digital",
    incluye: "Disco duro, cable USB",
    garantia: "2 años",
    stock: 2,
    oferta: 0,
    servicio: 0,
    no_fisico: 0,
    destacado: 1
  },
  {
    id: 7,
    nombre: "Tablet Huawei MatePad T10",
    descripcion: "Tablet 9.7'' HD, 2GB RAM, 32GB almacenamiento.",
    precio: 119990,
    marca: "Huawei",
    incluye: "Tablet, cargador, cable USB",
    garantia: "1 año",
    stock: 4,
    oferta: 0,
    servicio: 0,
    no_fisico: 0,
    destacado: 0
  },
  {
    id: 8,
    nombre: "Auriculares Sony WH-CH510",
    descripcion: "Auriculares inalámbricos Bluetooth, batería hasta 35h.",
    precio: 29990,
    marca: "Sony",
    incluye: "Auriculares, cable USB-C",
    garantia: "1 año",
    stock: 6,
    oferta: 0,
    servicio: 0,
    no_fisico: 0,
    destacado: 1
  },

  // 4 servicios (1 oferta)
  {
    id: 9,
    nombre: "Mantención de PC",
    descripcion: "Limpieza, optimización y revisión de equipos computacionales.",
    precio: 19990,
    incluye: "Limpieza interna, optimización de software, revisión de hardware",
    garantia: "1 mes de soporte",
    oferta: 1,
    servicio: 1,
    no_fisico: 1,
    destacado: 0
},
  {
    id: 10,
    nombre: "Desarrollo de Página Web",
    descripcion: "Sitio web profesional, responsive y autoadministrable.",
    precio: 249990,
    incluye: "Diseño personalizado, dominio .cl, hosting 1 año, soporte 3 meses",
    garantia: "3 meses de soporte",
    oferta: 0,
    servicio: 1,
    no_fisico: 1,
    destacado: 1
  },
  {
    id: 11,
    nombre: "Digitalización de Documentos",
    descripcion: "Escaneo y organización digital de documentos físicos.",
    precio: 39990,
    incluye: "Escaneo, organización en PDF, entrega digital",
    garantia: "Entrega garantizada",
    oferta: 0,
    servicio: 1,
    no_fisico: 1,
    destacado: 0
  },
  {
    id: 12,
    nombre: "Marketing Digital",
    descripcion: "Gestión de campañas en redes sociales y Google Ads.",
    precio: 99990,
    incluye: "Estrategia, diseño de piezas, informes de resultados",
    garantia: "1 mes de soporte",
    oferta: 0,
    servicio: 1,
    no_fisico: 1,
    destacado: 1
  },

  // 6 productos no físicos (2 oferta)
  {
    id: 13,
    nombre: "Licencia Windows 11 Pro",
    descripcion: "Licencia digital original para Windows 11 Pro.",
    precio: 59990,
    incluye: "Clave digital, instrucciones de activación",
    oferta: 1,
    servicio: 0,
    no_fisico: 1,
    destacado: 0
  },
  {
    id: 14,
    nombre: "Licencia Microsoft Office 365",
    descripcion: "Licencia digital anual para Office 365 (Word, Excel, PowerPoint, Outlook).",
    precio: 39990,
    incluye: "Clave digital, instrucciones de activación",
    oferta: 0,
    servicio: 0,
    no_fisico: 1,
    destacado: 1
  },
  {
    id: 15,
    nombre: "Curso Offline Programación",
    descripcion: "Curso grabado de programación desde cero, acceso offline.",
    precio: 29990,
    incluye: "Videos, material descargable, certificado",
    duracion: "2 meses",
    modalidad: "Offline",
    oferta: 1,
    servicio: 0,
    no_fisico: 1,
    destacado: 0
  },
  {
    id: 16,
    nombre: "Manual de Redes",
    descripcion: "Manual digital de redes informáticas, PDF descargable.",
    precio: 9990,
    incluye: "PDF, ejemplos prácticos",
    oferta: 0,
    servicio: 0,
    no_fisico: 1,
    destacado: 0
  },
  {
    id: 17,
    nombre: "Ebook Seguridad Informática",
    descripcion: "Libro digital sobre ciberseguridad y buenas prácticas.",
    precio: 14990,
    incluye: "PDF, recursos online",
    oferta: 0,
    servicio: 0,
    no_fisico: 1,
    destacado: 0
  },
  {
    id: 18,
    nombre: "Plantillas Excel para PyME",
    descripcion: "Pack de plantillas Excel para gestión de pequeñas empresas.",
    precio: 7990,
    incluye: "Archivos Excel, guía de uso",
    oferta: 1,
    servicio: 0,
    no_fisico: 1,
    destacado: 0
  }
];

export default productos;
