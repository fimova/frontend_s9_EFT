# EFT - Frontend I

El proyecto consiste en una tienda en línea de videojuegos y accesorios gaming desarrollada
con **React, Bootstrap 5, y JavaScript**. En este se demuestra manejo de componentes reutilizables,
gestión de estado, integración de APIs externas y se intenta integrar buenas prácticas de desarrollo web.

## 1. Acceso al sitio

**[Abrir Videojuegos Mibu](https://fimova.github.io/frontend_s9_EFT/)**

## 2. Características Principales

### 2.1 Catálogo de productos
- **Videojuegos:**  incluye categorías de RPG, Acción, Novelas visuales y Puzzle
- **Accesorios:** incluye categoría de Controles, Audio y Periféricos
- **Filtrado dinámico** por categoría y búsqueda por título
- Visualización de precios con ofertas destacadas
- Stock visual mediante estado del botón ("Agregar" vs "En carrito")

### 2.2 Carrito de compras
- Agregar/eliminar productos
- Modificar cantidades
- Subtotales automáticos
- Persistencia en **localStorage**
- Interfaz lateral (offcanvas) no intrusiva
- Validación de carrito vacío

### 2.3 Carga dinámica de datos
- **Fetch API** a Pokémon API (con AbortController)
- Estado de carga con spinner
- Manejo de errores
- Transformación automática de datos externos

### 2.4 Formulario de contacto
- Validación en tiempo real
- Campos requeridos: nombre, email, mensaje
- Mensajes de error/éxito visuales
- Formato de email validado

### 2.5 Diseño responsivo
- Adaptable a móviles, tablets y escritorio
- Navbar colapsable en dispositivos pequeños
- Grid flexible con Bootstrap 5
- Accesibilidad WCAG básica

## 3. Tecnologías utilizadas

| Tecnología | Uso |
|-----------|-----|
| **React** | Componentes funcionales, hooks (useState, useEffect) |
| **Vite** | Build tool y dev server |
| **Bootstrap 5** | Responsividad y componentes |
| **JavaScript** | Lógica de negocio, manipulación del DOM |
| **HTML5** | Estructura semántica |
| **CSS** | Estilos personalizados, variables, animaciones |
| **React Router** | Navegación entre páginas |
| **Pokémon API** | Datos externos para sección Recomendados |

## 4. Estructura del proyecto 

```text
C:\
├───assets
├───components
├───data
├───hooks
├───pages
├───styles
└───utils
```
## 5. Instalación y uso local

### 5.1 Requisitos
- Node.js 
- npm 

### 5.2 Pasos de Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/fimova/frontend_s9_EFT.git
cd frontend_s9_EFT

# 2. Instalar dependencias
npm install

# 3. Ejecutar en modo desarrollo
npm run dev

# 4. Abrir en el navegador
# La consola mostrará: http://localhost:5173/frontend_s9_EFT/
```

### 5.3 Comandos necesarios

```bash
npm run dev        # Inicia servidor de desarrollo
npm run build      # Compila el proyecto a carpeta /docs
npm run preview    # Previsualiza el build localmente
```

## 6. Resolución de problemas

### 6.1 Imagenes no se ven

- Verificar que las imágenes estén en public/img/
- Comprobar que los imports estén correctos: import img from '/img/nombre.jpg'

### 6.2 Carrito no persiste

- Abrir DevTools → Application → Local Storage
- Busca carritoMibu
- Verificar que el localStorage no esté deshabilitado

### 6.3 API (Pokemon) lenta

- El timeout es de 10 segundos
- Si tarda más de eso, se cancela automáticamente
- Recargar la página para reintentar

## 7. Notas de desarrollo

- Los estilos usan CSS puro + Bootstrap, sin librerías adicionales
- El carrito persiste en localStorage automáticamente
- Las categorías se generan dinámicamente desde los datos

## 8. Oportunidades de mejora futuras

- **Toast controlado por React:** Reemplazar manipulación directa del DOM (window.bootstrap) 
por estado React y componentes controlados para mejorar accesibilidad y pruebas.
- **Context API para Toast:** Implementar Context para centralizar la lógica de notificaciones.
- **Pruebas automatizadas:** Agregar tests unitarios.
- **Internacionalización (i18n):** Soportar múltiples idiomas.