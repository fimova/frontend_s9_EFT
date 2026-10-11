import { formatearPrecio, obtenerPrecioEfectivo, calcularSubtotal } from '../utils/formatters';

/**
 * Componente para renderizar una fila individual del carrito
 * Separa la lógica de cada item para mayor claridad y modularidad
 */
const CartItem = ({ item, onDisminuir, onAgregar, onEliminar }) => {

    const precio = obtenerPrecioEfectivo(item);
    const subtotal = calcularSubtotal(precio, item.cantidad);

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <strong>{item.titulo}</strong>
                <br />
                <small className="text-muted">
                    ${formatearPrecio(precio)} x {item.cantidad}
                </small>
            </div>

            <div className="d-flex align-items-center gap-2">
                {/* Subtotal del producto */}
                <span className="badge bg-primary rounded-pill">
                    ${formatearPrecio(subtotal)}
                </span>

                {/* Botones para modificar cantidad */}
                <div className="btn-group btn-group-sm">
                    <button
                        className="btn btn-outline-secondary"
                        onClick={() => onDisminuir(item.id)}
                        title="Disminuir cantidad"
                    >
                        −
                    </button>
                    <button
                        className="btn btn-outline-secondary"
                        onClick={() => onAgregar(item)}
                        title="Aumentar cantidad"
                    >
                        +
                    </button>
                </div>

                {/* Botón eliminar */}
                <button
                    className="btn btn-sm btn-danger btn-eliminar"
                    onClick={() => onEliminar(item.id)}
                    title="Eliminar producto"
                >
                    ✕
                </button>
            </div>
        </li>
    );
};

export default CartItem;