/**
 * Utilidades para formatear y transformar datos
 */

/**
 * Formatea un número como precio en pesos chilenos
 * @param {number} precio - El precio a formatear
 * @returns {string} Precio formateado (ej: "29.990")
 */
export const formatearPrecio = (precio) => {
    return precio.toLocaleString('es-CL');
};

/**
 * Calcula el subtotal de un producto
 * @param {number} precio - Precio unitario
 * @param {number} cantidad - Cantidad de unidades
 * @returns {number} Subtotal
 */
export const calcularSubtotal = (precio, cantidad) => {
    return precio * cantidad;
};

/**
 * Obtiene el precio efectivo de un producto (considera oferta)
 * @param {Object} producto - Objeto del producto
 * @returns {number} Precio efectivo
 */
export const obtenerPrecioEfectivo = (producto) => {
    return producto.enOferta ? producto.precioOferta : producto.precioNormal;
};

/**
 * Transforma datos de Pokémon API al formato de producto
 * @param {Object} pokemon - Datos del Pokémon desde la API
 * @param {number} index - Índice para generar ID único
 * @returns {Object} Producto transformado
 */
export const transformarPokemonAProducto = (pokemon, index) => {
    const precioNormal = Math.floor(Math.random() * 50000) + 20000;
    const precioOferta = Math.floor(precioNormal * 0.8);

    return {
        id: 200 + index,
        titulo: `${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} Figure`,
        imagen: pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default,
        alt: pokemon.name,
        titleImagen: `${pokemon.name} - Figura coleccionable`,
        info: `Tipo: ${pokemon.types.map(t => t.type.name).join(', ')}`,
        descripcion: `Figura coleccionable oficial de ${pokemon.name}. Altura: ${pokemon.height / 10}m, Peso: ${pokemon.weight / 10}kg. Stock limitado.`,
        precioNormal: precioNormal,
        precioOferta: precioOferta,
        enOferta: Math.random() > 0.5
    };
};