import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { transformarPokemonAProducto } from '../utils/formatters';

/**
 * Página de productos recomendados
 * Carga datos dinámicamente usando Fetch API con AbortController
 * Se escogió una API de Pokémon para ejemplificar
 */
const Recomendados = ({ onAgregarAlCarrito, carrito }) => {

    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    /**
     * Verifica si un producto está en el carrito
     */
    const estaEnCarrito = (productoId) => {
        return carrito.some(item => item.id === productoId);
    };

    /**
     * Cargar productos desde API con AbortController
     * Previene fugas de memoria y estados inconsistentes
     */
    useEffect(() => {
        // Crear AbortController para poder cancelar la solicitud
        const abortController = new AbortController();
        const timeoutId = setTimeout(() => {
            abortController.abort();
        }, 10000); // Timeout de 10 segundos

        const cargarProductos = async () => {
            try {
                setCargando(true);
                setError(null);

                // Cargar 6 Pokémon aleatorios solo para hacerlo más dinámico
                const promesas = [];
                for (let i = 0; i < 6; i++) {
                    const randomId = Math.floor(Math.random() * 150) + 1;
                    promesas.push(
                        fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`, {
                            signal: abortController.signal
                        }).then(res => res.json())
                    );
                }

                const pokemones = await Promise.all(promesas);

                // Transformar usando la utilidad
                const productosTransformados = pokemones.map((pokemon, index) =>
                    transformarPokemonAProducto(pokemon, index)
                );

                setProductos(productosTransformados);
            } catch (err) {
                // No mostrar error si fue abortado (componente desmontado)
                if (err.name !== 'AbortError') {
                    console.error('Error:', err);
                    setError('No pudimos cargar los productos recomendados. Intenta más tarde.');
                }
            } finally {
                setCargando(false);
            }
        };

        cargarProductos();

        // Cleanup: cancelar solicitud si el componente se desmonta
        return () => {
            abortController.abort();
            clearTimeout(timeoutId);
        };
    }, []);

    /**
     * Agrega un producto al carrito y muestra un toast
     */
    const handleAgregar = (producto) => {
        onAgregarAlCarrito(producto);

        const toastElement = document.getElementById('toastCarrito');
        if (toastElement) {
            const toastBody = toastElement.querySelector('.toast-body');
            toastBody.textContent = `"${producto.titulo}" agregado al carrito`;
            toastElement.className = 'toast align-items-center text-bg-success border-0';

            const toast = new window.bootstrap.Toast(toastElement);
            toast.show();
        }
    };

    return (
        <main>
            <section className="catalogo">
                <h2>Pokémon Recomendados</h2>
                <p className="text-muted text-center mb-4">
                    Figuras coleccionables cargadas dinámicamente desde la API de Pokémon
                </p>

                {/* Renderizado condicional: Cargando */}
                {cargando && (
                    <div className="container text-center py-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Cargando...</span>
                        </div>
                        <p className="mt-3">Cargando Pokémon recomendados...</p>
                    </div>
                )}

                {/* Renderizado condicional: Error */}
                {error && (
                    <div className="container">
                        <div className="alert alert-danger text-center" role="alert">
                            {error}
                        </div>
                    </div>
                )}

                {/* Renderizado condicional: Productos cargados */}
                {!cargando && !error && (
                    <div className="container">
                        <div className="row g-4">
                            {productos.map(producto => (
                                <ProductCard
                                    key={producto.id}
                                    producto={producto}
                                    onAgregar={handleAgregar}
                                    productoEnCarrito={estaEnCarrito(producto.id)}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </section>
        </main>
    );
};

export default Recomendados;