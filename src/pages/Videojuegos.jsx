import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { videojuegos } from '../data/videojuegos';

/**
 * Página del catálogo de videojuegos
 * Permite filtrar por categoría y buscar por título
 * Gestión del carrito
 */
const Videojuegos = ({ onAgregarAlCarrito, carrito }) => {
    
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todas');
    const [busqueda, setBusqueda] = useState('');
    const [mensaje, setMensaje] = useState('');

    /**
     * Obtener todas las categorías únicas
     */
    const categorias = ['todas', ...new Set(videojuegos.map(v => v.categoria))];

    /**
     * Maneja el cambio de categoría
     */
    const handleCategoriaChange = (categoria) => {
        setCategoriaSeleccionada(categoria);
        setMensaje('');
        setBusqueda('');
    };

    /**
     * Maneja el cambio en el input de búsqueda
     */
    const handleBusquedaChange = (e) => {
        const valor = e.target.value;
        setBusqueda(valor);
        
        if (valor.trim() === '') {
            setMensaje('');
        }
    };

    /**
     * Maneja el envío del formulario de búsqueda
     */
    const handleBusquedaSubmit = (e) => {
        e.preventDefault();
        
        if (busqueda.trim() === '') {
            setMensaje('Por favor, ingresa un término de búsqueda.');
            return;
        }

        const resultados = productosFiltrados.length;
        
        if (resultados === 0) {
            setMensaje(`No se encontraron productos con "${busqueda}".`);
        } else {
            setMensaje(`Se encontraron ${resultados} producto(s).`);
        }
    };

    /**
     * Filtra productos por categoría y búsqueda por título
     */
    const productosFiltrados = videojuegos.filter(producto => {
        const coincideCategoria = categoriaSeleccionada === 'todas' || producto.categoria === categoriaSeleccionada;
        const coincideBusqueda = producto.titulo.toLowerCase().includes(busqueda.toLowerCase());
        return coincideCategoria && coincideBusqueda;
    });

    /**
     * Verifica si un producto está en el carrito
     */
    const estaEnCarrito = (productoId) => {
        return carrito.some(item => item.id === productoId);
    };

    /**
     * Agrega un producto al carrito y muestra un toast
     */
    const handleAgregar = (producto) => {
        onAgregarAlCarrito(producto);
        
        const toastElement = document.getElementById('toastCarrito');
        const toastBody = toastElement.querySelector('.toast-body');
        toastBody.textContent = `"${producto.titulo}" agregado al carrito`;
        toastElement.className = 'toast align-items-center text-bg-success border-0';
        
        const toast = new window.bootstrap.Toast(toastElement);
        toast.show();
    };

    return (
        <main>
            <section className="catalogo">
                <h2>Catálogo Videojuegos</h2>

                {/* Filtros por categoría */}
                <div className="container mb-4">
                    <div className="d-flex gap-2 flex-wrap justify-content-center mb-3">
                        {categorias.map(categoria => (
                            <button
                                key={categoria}
                                className={`btn ${
                                    categoriaSeleccionada === categoria
                                        ? 'btn-primary'
                                        : 'btn-outline-primary'
                                }`}
                                onClick={() => handleCategoriaChange(categoria)}
                            >
                                {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Formulario de búsqueda por título */}
                <div className="container mb-4">
                    <form onSubmit={handleBusquedaSubmit} className="d-flex" role="search">
                        <input 
                            type="search"
                            className="form-control me-2"
                            placeholder="Buscar por título..."
                            value={busqueda}
                            onChange={handleBusquedaChange}
                        />
                        <button type="submit" className="btn boton-producto">
                            Buscar
                        </button>
                    </form>
                    
                    {mensaje && (
                        <p className={`mt-2 ${productosFiltrados.length === 0 ? 'text-warning' : 'text-success'}`}>
                            {mensaje}
                        </p>
                    )}
                </div>

                {/* Listado de productos */}
                <div className="container">
                    <div className="row g-4">
                        {productosFiltrados.length > 0 ? (
                            productosFiltrados.map(producto => (
                                <ProductCard 
                                    key={producto.id}
                                    producto={producto}
                                    onAgregar={handleAgregar}
                                    productoEnCarrito={estaEnCarrito(producto.id)}
                                />
                            ))
                        ) : (
                            <div className="col-12 text-center">
                                <p className="text-muted">No se encontraron productos.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Videojuegos;