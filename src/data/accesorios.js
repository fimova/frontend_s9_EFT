// Importar imágenes
import imgRotr from '/img/rotr.jpg';
import imgTkrb from '/img/tkrbwarriors.jpg';
import imgMeikoi from '/img/meikoi.jpg';

export const accesorios = [
    {
        id: 6,
        titulo: "Control Pro Mibu",
        categoria: "Controles",
        imagen: imgRotr,
        alt: "Control Pro Mibu",
        info: "Compatible con PC, PS5 y Nintendo Switch.",
        descripcion: "Control inalámbrico de última generación con vibración HD y batería de larga duración.",
        precioNormal: 29990,
        precioOferta: 24990,
        enOferta: true
    },
    {
        id: 7,
        titulo: "Auriculares Gaming Mibu",
        categoria: "Audio",
        imagen: imgTkrb,
        alt: "Auriculares Gaming Mibu",
        info: "Sonido envolvente 7.1 virtual.",
        descripcion: "Auriculares con micrófono retráctil y almohadillas de memoria para sesiones largas de juego.",
        precioNormal: 39990,
        precioOferta: 34990,
        enOferta: true
    },
    {
        id: 8,
        titulo: "Teclado Mecánico RGB",
        categoria: "Periféricos",
        imagen: imgMeikoi,
        alt: "Teclado Mecánico RGB",
        info: "Switches mecánicos red, iluminación RGB personalizable.",
        descripcion: "Teclado gaming con teclas programables y reposamuñecas magnético desmontable.",
        precioNormal: 49990,
        precioOferta: 49990,
        enOferta: false
    }
];