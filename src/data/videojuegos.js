// Importar imágenes
import imgRotr from '/img/rotr.jpg';
import imgTkrb from '/img/tkrbwarriors.jpg';
import imgMeikoi from '/img/meikoi.jpg';
import imgWwht from '/img/wwht.jpg';
import imgHkw from '/img/hkw.jpg';

export const videojuegos = [
    {
        id: 1,
        titulo: "Rise of the Ronin",
        categoria: "RPG",
        imagen: imgRotr,
        alt: "Caratula Rise of the Ronin",
        info: "Disponible para Playstation 5 y PC.",
        descripcion: "Un RPG de mundo abierto ambientado en el período Bakumatsu, donde los jugadores asumen el papel de un ronin que forja su propio destino.",
        precioNormal: 69990,
        precioOferta: 59990,
        enOferta: true
    },
    {
        id: 2,
        titulo: "Touken Ranbu Warriors",
        categoria: "Acción",
        imagen: imgTkrb,
        alt: "Caratula Touken Ranbu Warriors",
        info: "Disponible para Nintendo Switch y PC.",
        descripcion: "Un juego de acción, fruto de la colaboración con el juego de simulación Touken Ranbu ONLINE. Protege la historia junto a estas espadas encarnadas.",
        precioNormal: 49990,
        precioOferta: 39990,
        enOferta: true
    },
    {
        id: 3,
        titulo: "Meiji Tokyo Renka Full Moon",
        categoria: "Novela visual",
        imagen: imgMeikoi,
        alt: "Caratula Meiji Tokyo Renka Full Moon",
        info: "Disponible para Nintendo Switch y PC.",
        descripcion: "Novela visual de romance histórico y fantasía otome. Viaja en el tiempo a la era Meiji en Japón.",
        precioNormal: 29990,
        precioOferta: 29990,
        enOferta: false
    },
    {
        id: 4,
        titulo: "We were here together",
        categoria: "Puzzle",
        imagen: imgWwht,
        alt: "Caratula We were here together",
        info: "Disponible para Playstation 4, Playstation 5, Nintendo Switch, Xbox y PC.",
        descripcion: "Un juego de aventuras cooperativo en primera persona con elementos de puzles.",
        precioNormal: 19990,
        precioOferta: 19990,
        enOferta: false
    },
    {
        id: 5,
        titulo: "Hakuoki: Kyoto Winds",
        categoria: "Novela visual",
        imagen: imgHkw,
        alt: "Caratula Hakuoki: Kyoto Winds",
        info: "Disponible para Nintendo Switch y PC.",
        descripcion: "Una novela visual ambientada en el Japón del período Bakumatsu.",
        precioNormal: 34990,
        precioOferta: 34990,
        enOferta: false
    }
];