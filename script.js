// Mockup estático para librería con eCommerce inicial simulado.
// Para cambiar el número, editar esta constante con código de país y área, sin + ni espacios.
const WHATSAPP_NUMBER = "5493510000000";
const CATALOG_JSON_PATH = "data/catalogo.json";
const STORAGE_KEY = "infinito_libros_catalogo_importado_v2";
const CART_STORAGE_KEY = "infinito_libros_carrito_v1";

const SAMPLE_PRODUCTS = [
  {
    "id": "el-jardin-de-las-paginas",
    "title": "El jardín de las páginas",
    "author": "Clara Montes",
    "category": "Novela",
    "price": 18500,
    "featured": true,
    "description": "Una novela cálida sobre segundas oportunidades, lecturas compartidas y pequeños encuentros que cambian el rumbo de una vida.",
    "image": "",
    "isbn": "9789500000001"
  },
  {
    "id": "cuentos-para-la-siesta",
    "title": "Cuentos para la siesta",
    "author": "Mateo Ríos",
    "category": "Infantil",
    "price": 9200,
    "featured": true,
    "description": "Historias breves para primeros lectores, con personajes entrañables y aventuras pensadas para leer en familia.",
    "image": "",
    "isbn": "9789500000002"
  },
  {
    "id": "matematica-practica-5",
    "title": "Matemática práctica 5",
    "author": "Equipo Aula Clara",
    "category": "Escolar",
    "price": 13600,
    "featured": false,
    "description": "Material de apoyo escolar con ejercicios progresivos, explicaciones simples y actividades de repaso.",
    "image": "",
    "isbn": "9789500000003"
  },
  {
    "id": "agenda-verde-2027",
    "title": "Agenda Verde 2027",
    "author": "Papelería Botánica",
    "category": "Agenda / Papelería",
    "price": 11200,
    "featured": true,
    "description": "Agenda semanal de tapa dura, interior claro y diseño sobrio para organizar estudio, trabajo y vida diaria.",
    "image": "",
    "isbn": "9789500000004"
  },
  {
    "id": "habitos-en-calma",
    "title": "Hábitos en calma",
    "author": "Lucía Benítez",
    "category": "Autoayuda",
    "price": 15700,
    "featured": false,
    "description": "Una guía práctica para ordenar rutinas, mejorar la concentración y construir hábitos sostenibles.",
    "image": "",
    "isbn": "9789500000005"
  },
  {
    "id": "orgullo-y-prejuicio",
    "title": "Orgullo y prejuicio",
    "author": "Jane Austen",
    "category": "Clásicos",
    "price": 14900,
    "featured": true,
    "description": "Edición de bolsillo de uno de los grandes clásicos de la literatura inglesa, ideal para coleccionar o regalar.",
    "image": "",
    "isbn": "9789500000006"
  },
  {
    "id": "la-casa-del-faro",
    "title": "La casa del faro",
    "author": "Emilia Costa",
    "category": "Novedades",
    "price": 20100,
    "featured": true,
    "description": "Una historia contemporánea con misterio, vínculos familiares y paisajes costeros.",
    "image": "",
    "isbn": "9789500000007"
  },
  {
    "id": "lecturas-para-un-domingo",
    "title": "Lecturas para un domingo",
    "author": "Varios autores",
    "category": "Recomendados",
    "price": 17500,
    "featured": true,
    "description": "Selección de relatos recomendados por la librería para quienes buscan una lectura breve y memorable.",
    "image": "",
    "isbn": "9789500000008"
  },
  {
    "id": "animales-del-bosque",
    "title": "Animales del bosque",
    "author": "Paula Naranjo",
    "category": "Infantil",
    "price": 8300,
    "featured": false,
    "description": "Libro ilustrado para descubrir animales, colores y pequeñas historias de la naturaleza.",
    "image": "",
    "isbn": "9789500000009"
  },
  {
    "id": "cuaderno-punteado-oliva",
    "title": "Cuaderno punteado oliva",
    "author": "Línea Papel Norte",
    "category": "Agenda / Papelería",
    "price": 6200,
    "featured": false,
    "description": "Cuaderno de tapa flexible con hojas punteadas para notas, ideas, listas y planificación.",
    "image": "",
    "isbn": "9789500000010"
  },
  {
    "id": "lengua-y-literatura-2",
    "title": "Lengua y Literatura 2",
    "author": "Equipo Escolar Sur",
    "category": "Escolar",
    "price": 16800,
    "featured": false,
    "description": "Manual escolar con actividades de comprensión lectora, producción escrita y análisis de textos.",
    "image": "",
    "isbn": "9789500000011"
  },
  {
    "id": "el-oficio-de-leer",
    "title": "El oficio de leer",
    "author": "Daniel Ferrer",
    "category": "Recomendados",
    "price": 14200,
    "featured": false,
    "description": "Ensayos breves sobre libros, librerías y el placer de leer con atención.",
    "image": "",
    "isbn": "9789500000012"
  },
  {
    "id": "las-cartas-del-invierno-13",
    "title": "Las cartas del invierno",
    "author": "Marina Soler",
    "category": "Novela",
    "price": 21700,
    "featured": false,
    "description": "Producto de ejemplo para la categoría novela. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000013"
  },
  {
    "id": "pequeos-planetas-14",
    "title": "Pequeños planetas",
    "author": "Nicolás Mora",
    "category": "Infantil",
    "price": 8900,
    "featured": false,
    "description": "Producto de ejemplo para la categoría infantil. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000014"
  },
  {
    "id": "ciencias-naturales-4-15",
    "title": "Ciencias naturales 4",
    "author": "Equipo Aula Clara",
    "category": "Escolar",
    "price": 15850,
    "featured": false,
    "description": "Producto de ejemplo para la categoría escolar. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000015"
  },
  {
    "id": "planner-acadmico-crema-16",
    "title": "Planner académico crema",
    "author": "Papel Norte",
    "category": "Agenda / Papelería",
    "price": 8200,
    "featured": false,
    "description": "Producto de ejemplo para la categoría agenda / papelería. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000016"
  },
  {
    "id": "respirar-mejor-17",
    "title": "Respirar mejor",
    "author": "Irene Vidal",
    "category": "Autoayuda",
    "price": 17850,
    "featured": false,
    "description": "Producto de ejemplo para la categoría autoayuda. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000017"
  },
  {
    "id": "el-retrato-de-dorian-gray-18",
    "title": "El retrato de Dorian Gray",
    "author": "Oscar Wilde",
    "category": "Clásicos",
    "price": 16300,
    "featured": false,
    "description": "Producto de ejemplo para la categoría clásicos. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000018"
  },
  {
    "id": "la-librera-de-la-esquina-19",
    "title": "La librería de la esquina",
    "author": "Clara Méndez",
    "category": "Novedades",
    "price": 23650,
    "featured": false,
    "description": "Producto de ejemplo para la categoría novedades. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000019"
  },
  {
    "id": "historias-para-regalar-20",
    "title": "Historias para regalar",
    "author": "Varios autores",
    "category": "Recomendados",
    "price": 20700,
    "featured": false,
    "description": "Producto de ejemplo para la categoría recomendados. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000020"
  },
  {
    "id": "la-estacin-de-los-trenes-21",
    "title": "La estación de los trenes",
    "author": "Federico Lamas",
    "category": "Novela",
    "price": 17800,
    "featured": false,
    "description": "Producto de ejemplo para la categoría novela. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000021"
  },
  {
    "id": "mi-primer-diccionario-visual-22",
    "title": "Mi primer diccionario visual",
    "author": "Equipo Infantil",
    "category": "Infantil",
    "price": 9550,
    "featured": true,
    "description": "Producto de ejemplo para la categoría infantil. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000022"
  },
  {
    "id": "geografa-argentina-1-23",
    "title": "Geografía argentina 1",
    "author": "Aula Mapas",
    "category": "Escolar",
    "price": 16500,
    "featured": false,
    "description": "Producto de ejemplo para la categoría escolar. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000023"
  },
  {
    "id": "set-de-resaltadores-pastel-24",
    "title": "Set de resaltadores pastel",
    "author": "Línea Papel Norte",
    "category": "Agenda / Papelería",
    "price": 8850,
    "featured": false,
    "description": "Producto de ejemplo para la categoría agenda / papelería. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000024"
  },
  {
    "id": "ordenar-la-mente-25",
    "title": "Ordenar la mente",
    "author": "Bruno Salvatierra",
    "category": "Autoayuda",
    "price": 18500,
    "featured": false,
    "description": "Producto de ejemplo para la categoría autoayuda. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000025"
  },
  {
    "id": "don-quijote-de-la-mancha-26",
    "title": "Don Quijote de la Mancha",
    "author": "Miguel de Cervantes",
    "category": "Clásicos",
    "price": 16950,
    "featured": false,
    "description": "Producto de ejemplo para la categoría clásicos. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000026"
  },
  {
    "id": "el-rumor-del-ro-27",
    "title": "El rumor del río",
    "author": "Valentina Prado",
    "category": "Novedades",
    "price": 24300,
    "featured": false,
    "description": "Producto de ejemplo para la categoría novedades. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000027"
  },
  {
    "id": "lectores-curiosos-28",
    "title": "Lectores curiosos",
    "author": "Varios autores",
    "category": "Recomendados",
    "price": 16800,
    "featured": false,
    "description": "Producto de ejemplo para la categoría recomendados. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000028"
  },
  {
    "id": "una-taza-de-tinta-29",
    "title": "Una taza de tinta",
    "author": "Sofía Ledesma",
    "category": "Novela",
    "price": 18450,
    "featured": false,
    "description": "Producto de ejemplo para la categoría novela. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000029"
  },
  {
    "id": "dragones-de-bolsillo-30",
    "title": "Dragones de bolsillo",
    "author": "Agustín Valle",
    "category": "Infantil",
    "price": 10200,
    "featured": false,
    "description": "Producto de ejemplo para la categoría infantil. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000030"
  },
  {
    "id": "historia-moderna-3-31",
    "title": "Historia moderna 3",
    "author": "Equipo Escolar Sur",
    "category": "Escolar",
    "price": 17150,
    "featured": false,
    "description": "Producto de ejemplo para la categoría escolar. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000031"
  },
  {
    "id": "block-artstico-a4-32",
    "title": "Block artístico A4",
    "author": "Papel Norte",
    "category": "Agenda / Papelería",
    "price": 9500,
    "featured": false,
    "description": "Producto de ejemplo para la categoría agenda / papelería. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000032"
  },
  {
    "id": "decidir-con-claridad-33",
    "title": "Decidir con claridad",
    "author": "Marta Pellegrini",
    "category": "Autoayuda",
    "price": 19150,
    "featured": true,
    "description": "Producto de ejemplo para la categoría autoayuda. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000033"
  },
  {
    "id": "crimen-y-castigo-34",
    "title": "Crimen y castigo",
    "author": "Fiódor Dostoievski",
    "category": "Clásicos",
    "price": 17600,
    "featured": false,
    "description": "Producto de ejemplo para la categoría clásicos. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000034"
  },
  {
    "id": "la-noche-de-los-mapas-35",
    "title": "La noche de los mapas",
    "author": "Lorenzo Villar",
    "category": "Novedades",
    "price": 20400,
    "featured": false,
    "description": "Producto de ejemplo para la categoría novedades. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000035"
  },
  {
    "id": "libros-que-abrazan-36",
    "title": "Libros que abrazan",
    "author": "Varios autores",
    "category": "Recomendados",
    "price": 17450,
    "featured": false,
    "description": "Producto de ejemplo para la categoría recomendados. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000036"
  },
  {
    "id": "el-silencio-de-las-hojas-37",
    "title": "El silencio de las hojas",
    "author": "Laura Quiroga",
    "category": "Novela",
    "price": 19100,
    "featured": false,
    "description": "Producto de ejemplo para la categoría novela. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000037"
  },
  {
    "id": "aventuras-en-la-plaza-38",
    "title": "Aventuras en la plaza",
    "author": "Camila Borda",
    "category": "Infantil",
    "price": 10850,
    "featured": false,
    "description": "Producto de ejemplo para la categoría infantil. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000038"
  },
  {
    "id": "ingls-inicial-39",
    "title": "Inglés inicial",
    "author": "Equipo Aula Clara",
    "category": "Escolar",
    "price": 17800,
    "featured": false,
    "description": "Producto de ejemplo para la categoría escolar. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000039"
  },
  {
    "id": "carpeta-con-elstico-verde-40",
    "title": "Carpeta con elástico verde",
    "author": "Línea Papel Norte",
    "category": "Agenda / Papelería",
    "price": 10150,
    "featured": false,
    "description": "Producto de ejemplo para la categoría agenda / papelería. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000040"
  },
  {
    "id": "rutinas-posibles-41",
    "title": "Rutinas posibles",
    "author": "Julián Araujo",
    "category": "Autoayuda",
    "price": 19800,
    "featured": false,
    "description": "Producto de ejemplo para la categoría autoayuda. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000041"
  },
  {
    "id": "frankenstein-42",
    "title": "Frankenstein",
    "author": "Mary Shelley",
    "category": "Clásicos",
    "price": 13700,
    "featured": false,
    "description": "Producto de ejemplo para la categoría clásicos. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000042"
  },
  {
    "id": "el-verano-de-julia-43",
    "title": "El verano de Julia",
    "author": "Ana Paredes",
    "category": "Novedades",
    "price": 21050,
    "featured": false,
    "description": "Producto de ejemplo para la categoría novedades. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000043"
  },
  {
    "id": "mesa-de-recomendados-44",
    "title": "Mesa de recomendados",
    "author": "Varios autores",
    "category": "Recomendados",
    "price": 18100,
    "featured": true,
    "description": "Producto de ejemplo para la categoría recomendados. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000044"
  },
  {
    "id": "la-biblioteca-secreta-45",
    "title": "La biblioteca secreta",
    "author": "Tomás Aguirre",
    "category": "Novela",
    "price": 19750,
    "featured": false,
    "description": "Producto de ejemplo para la categoría novela. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000045"
  },
  {
    "id": "el-gran-libro-de-colores-46",
    "title": "El gran libro de colores",
    "author": "Micaela Torres",
    "category": "Infantil",
    "price": 11500,
    "featured": false,
    "description": "Producto de ejemplo para la categoría infantil. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000046"
  },
  {
    "id": "fsica-bsica-47",
    "title": "Física básica",
    "author": "Equipo Escolar Sur",
    "category": "Escolar",
    "price": 18450,
    "featured": false,
    "description": "Producto de ejemplo para la categoría escolar. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000047"
  },
  {
    "id": "agenda-diaria-beige-48",
    "title": "Agenda diaria beige",
    "author": "Papel Norte",
    "category": "Agenda / Papelería",
    "price": 10800,
    "featured": false,
    "description": "Producto de ejemplo para la categoría agenda / papelería. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000048"
  },
  {
    "id": "pequeos-cambios-49",
    "title": "Pequeños cambios",
    "author": "Renata Campos",
    "category": "Autoayuda",
    "price": 15900,
    "featured": false,
    "description": "Producto de ejemplo para la categoría autoayuda. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000049"
  },
  {
    "id": "mujercitas-50",
    "title": "Mujercitas",
    "author": "Louisa May Alcott",
    "category": "Clásicos",
    "price": 14350,
    "featured": false,
    "description": "Producto de ejemplo para la categoría clásicos. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000050"
  },
  {
    "id": "el-cuaderno-azul-51",
    "title": "El cuaderno azul",
    "author": "Martina Núñez",
    "category": "Novedades",
    "price": 21700,
    "featured": false,
    "description": "Producto de ejemplo para la categoría novedades. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000051"
  },
  {
    "id": "lecturas-de-otoo-52",
    "title": "Lecturas de otoño",
    "author": "Varios autores",
    "category": "Recomendados",
    "price": 18750,
    "featured": false,
    "description": "Producto de ejemplo para la categoría recomendados. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000052"
  },
  {
    "id": "la-promesa-del-nogal-53",
    "title": "La promesa del nogal",
    "author": "Elena Márquez",
    "category": "Novela",
    "price": 20400,
    "featured": false,
    "description": "Producto de ejemplo para la categoría novela. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000053"
  },
  {
    "id": "mi-primer-atlas-54",
    "title": "Mi primer atlas",
    "author": "Equipo Infantil",
    "category": "Infantil",
    "price": 12150,
    "featured": false,
    "description": "Producto de ejemplo para la categoría infantil. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000054"
  },
  {
    "id": "qumica-para-secundaria-55",
    "title": "Química para secundaria",
    "author": "Aula Clara",
    "category": "Escolar",
    "price": 19100,
    "featured": true,
    "description": "Producto de ejemplo para la categoría escolar. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000055"
  },
  {
    "id": "marcadores-finos-x12-56",
    "title": "Marcadores finos x12",
    "author": "Línea Papel Norte",
    "category": "Agenda / Papelería",
    "price": 6900,
    "featured": false,
    "description": "Producto de ejemplo para la categoría agenda / papelería. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000056"
  },
  {
    "id": "tiempo-para-m-57",
    "title": "Tiempo para mí",
    "author": "Claudia Ortiz",
    "category": "Autoayuda",
    "price": 16550,
    "featured": false,
    "description": "Producto de ejemplo para la categoría autoayuda. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000057"
  },
  {
    "id": "la-odisea-58",
    "title": "La Odisea",
    "author": "Homero",
    "category": "Clásicos",
    "price": 15000,
    "featured": false,
    "description": "Producto de ejemplo para la categoría clásicos. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000058"
  },
  {
    "id": "el-caf-de-los-libros-59",
    "title": "El café de los libros",
    "author": "Pablo Medina",
    "category": "Novedades",
    "price": 22350,
    "featured": false,
    "description": "Producto de ejemplo para la categoría novedades. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000059"
  },
  {
    "id": "elegidos-de-la-semana-60",
    "title": "Elegidos de la semana",
    "author": "Varios autores",
    "category": "Recomendados",
    "price": 19400,
    "featured": false,
    "description": "Producto de ejemplo para la categoría recomendados. Descripción breve pensada para mostrar la ficha consultiva del catálogo.",
    "image": "",
    "isbn": "9789500000060"
  }
];

let products = [];
let filteredProducts = [];
let currentPage = 1;
let itemsPerPage = 25;
let activeCategory = "Todos";
let catalogSourceLabel = "Catálogo demo";
let cart = [];

const state = {
  search: "",
  sort: "featured"
};

const els = {};

document.addEventListener("DOMContentLoaded", async () => {
  cacheElements();
  bindEvents();
  setupWhatsAppLinks();
  setupRouter();
  loadCart();
  await loadInitialCatalog();
  renderAll();
  renderCart();
});

function cacheElements() {
  els.navToggle = document.querySelector(".nav-toggle");
  els.mainNav = document.querySelector(".main-nav");
  els.routeLinks = document.querySelectorAll("[data-route-link]");
  els.views = document.querySelectorAll("[data-route]");
  els.featuredGrid = document.getElementById("featuredGrid");
  els.homeCategories = document.getElementById("homeCategories");
  els.catalogGrid = document.getElementById("catalogGrid");
  els.pagination = document.getElementById("pagination");
  els.searchInput = document.getElementById("searchInput");
  els.categoryFilter = document.getElementById("categoryFilter");
  els.sortSelect = document.getElementById("sortSelect");
  els.pageSizeSelect = document.getElementById("pageSizeSelect");
  els.resultsCount = document.getElementById("resultsCount");
  els.catalogSource = document.getElementById("catalogSource");
  els.emptyState = document.getElementById("emptyState");
  els.catalogFile = document.getElementById("catalogFile");
  els.importStatus = document.getElementById("importStatus");
  els.downloadJsonBtn = document.getElementById("downloadJsonBtn");
  els.resetCatalogBtn = document.getElementById("resetCatalogBtn");
  els.priceFile = document.getElementById("priceFile");
  els.downloadPriceTemplateBtn = document.getElementById("downloadPriceTemplateBtn");
  els.priceUpdateStatus = document.getElementById("priceUpdateStatus");
  els.modal = document.getElementById("productModal");
  els.modalContent = document.getElementById("modalContent");
  els.year = document.getElementById("year");
  els.mockForm = document.getElementById("mockForm");
  els.formStatus = document.getElementById("formStatus");
  els.cartButton = document.getElementById("cartButton");
  els.cartCount = document.getElementById("cartCount");
  els.cartDrawer = document.getElementById("cartDrawer");
  els.cartItems = document.getElementById("cartItems");
  els.cartEmpty = document.getElementById("cartEmpty");
  els.cartTotal = document.getElementById("cartTotal");
  els.checkoutForm = document.getElementById("checkoutForm");
  els.checkoutStatus = document.getElementById("checkoutStatus");
}


function bindEvents() {
  els.year.textContent = new Date().getFullYear();

  els.navToggle?.addEventListener("click", () => {
    const isOpen = els.mainNav.classList.toggle("is-open");
    els.navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  els.cartButton?.addEventListener("click", openCart);

  els.searchInput.addEventListener("input", () => {
    state.search = els.searchInput.value.trim().toLowerCase();
    currentPage = 1;
    renderCatalog();
  });

  els.categoryFilter.addEventListener("change", () => {
    activeCategory = els.categoryFilter.value;
    currentPage = 1;
    renderCatalog();
  });

  els.sortSelect.addEventListener("change", () => {
    state.sort = els.sortSelect.value;
    currentPage = 1;
    renderCatalog();
  });

  els.pageSizeSelect.addEventListener("change", () => {
    itemsPerPage = Number(els.pageSizeSelect.value) || 25;
    currentPage = 1;
    renderCatalog();
  });

  els.catalogFile.addEventListener("change", handleFileInput);
  els.downloadJsonBtn.addEventListener("click", downloadCurrentCatalog);
  els.resetCatalogBtn.addEventListener("click", resetCatalog);
  els.priceFile?.addEventListener("change", handlePriceUpdateInput);
  els.downloadPriceTemplateBtn?.addEventListener("click", downloadPriceTemplate);

  document.addEventListener("click", (event) => {
    const detailButton = event.target.closest("[data-product-detail]");
    if (detailButton) {
      openProductDetail(detailButton.dataset.productDetail);
    }

    const addCartButton = event.target.closest("[data-add-cart]");
    if (addCartButton) {
      addToCart(addCartButton.dataset.addCart);
    }

    const removeCartButton = event.target.closest("[data-cart-remove]");
    if (removeCartButton) {
      removeFromCart(removeCartButton.dataset.cartRemove);
    }

    const increaseCartButton = event.target.closest("[data-cart-increase]");
    if (increaseCartButton) {
      changeCartQuantity(increaseCartButton.dataset.cartIncrease, 1);
    }

    const decreaseCartButton = event.target.closest("[data-cart-decrease]");
    if (decreaseCartButton) {
      changeCartQuantity(decreaseCartButton.dataset.cartDecrease, -1);
    }

    if (event.target.matches("[data-cart-close]")) {
      closeCart();
    }

    const categoryCard = event.target.closest("[data-category-open]");
    if (categoryCard) {
      activeCategory = categoryCard.dataset.categoryOpen;
      window.location.hash = "catalogo";
      setTimeout(() => {
        els.categoryFilter.value = activeCategory;
        currentPage = 1;
        renderCatalog();
      }, 0);
    }

    if (event.target.matches("[data-close-modal]")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
      closeCart();
    }
  });

  els.mockForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    els.formStatus.textContent = "Consulta simulada. En la versión final se conectaría a WhatsApp o a un formulario real si se cotiza aparte.";
  });

  els.checkoutForm?.addEventListener("submit", handleCheckoutSubmit);
}


function setupWhatsAppLinks() {
  const message = "Hola, quisiera hacer una consulta sobre libros y productos de la librería.";
  const href = buildWhatsAppUrl(message);
  ["homeWhatsapp", "contactWhatsapp", "floatingWhatsapp"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.href = href;
  });
}

function setupRouter() {
  window.addEventListener("hashchange", renderRoute);
  renderRoute();
}

function renderRoute() {
  const route = (window.location.hash || "#inicio").replace("#", "");
  const safeRoute = ["inicio", "catalogo", "presupuesto", "contacto"].includes(route) ? route : "inicio";

  els.views.forEach((view) => view.classList.toggle("is-active", view.dataset.route === safeRoute));
  els.routeLinks.forEach((link) => link.classList.toggle("is-active", link.dataset.routeLink === safeRoute));
  els.mainNav?.classList.remove("is-open");
  els.navToggle?.setAttribute("aria-expanded", "false");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

async function loadInitialCatalog() {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (stored) {
    try {
      products = sanitizeProducts(JSON.parse(stored));
      catalogSourceLabel = "Catálogo importado en este navegador";
      return;
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  try {
    const response = await fetch(CATALOG_JSON_PATH, { cache: "no-store" });
    if (!response.ok) throw new Error("No se pudo cargar data/catalogo.json");
    products = sanitizeProducts(await response.json());
    catalogSourceLabel = "data/catalogo.json";
  } catch {
    products = sanitizeProducts(SAMPLE_PRODUCTS);
    catalogSourceLabel = "Catálogo demo embebido";
  }
}

function renderAll() {
  renderCategoryFilter();
  renderHome();
  renderCatalog();
}

function renderHome() {
  const featured = products.filter((p) => p.featured).slice(0, 4);
  const fallback = products.slice(0, 4);
  els.featuredGrid.innerHTML = (featured.length ? featured : fallback).map(renderProductCard).join("");

  const counts = getCategoryCounts();
  els.homeCategories.innerHTML = Object.entries(counts)
    .slice(0, 8)
    .map(([category, count]) => `
      <button class="category-card" type="button" data-category-open="${escapeAttr(category)}">
        <span>${String(count).padStart(2, "0")}</span>
        <h3>${escapeHTML(category)}</h3>
        <p>Ver productos de esta categoría</p>
      </button>
    `)
    .join("");
}

function renderCatalog() {
  filteredProducts = getFilteredProducts();

  const total = filteredProducts.length;
  const totalPages = Math.max(1, Math.ceil(total / itemsPerPage));
  currentPage = Math.min(currentPage, totalPages);

  const start = total === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const end = Math.min(currentPage * itemsPerPage, total);
  const pageProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  els.catalogGrid.innerHTML = pageProducts.map(renderProductCard).join("");
  els.emptyState.hidden = total !== 0;
  els.resultsCount.textContent = total
    ? `Mostrando ${start}-${end} de ${total.toLocaleString("es-AR")} productos`
    : "No hay productos para mostrar";
  els.catalogSource.textContent = catalogSourceLabel;

  renderPagination(totalPages);
}

function renderCategoryFilter() {
  const categories = ["Todos", ...Object.keys(getCategoryCounts()).sort((a, b) => a.localeCompare(b, "es"))];
  els.categoryFilter.innerHTML = categories.map((category) => `<option value="${escapeAttr(category)}">${escapeHTML(category)}</option>`).join("");
  els.categoryFilter.value = activeCategory;
}

function getFilteredProducts() {
  const term = state.search;

  let result = products.filter((product) => {
    const matchesCategory = activeCategory === "Todos" || product.category === activeCategory;
    const searchable = `${product.title} ${product.author} ${product.category}`.toLowerCase();
    const matchesSearch = !term || searchable.includes(term);
    return matchesCategory && matchesSearch;
  });

  result = [...result].sort((a, b) => {
    if (state.sort === "title-asc") return a.title.localeCompare(b.title, "es");
    if (state.sort === "price-asc") return a.price - b.price;
    if (state.sort === "price-desc") return b.price - a.price;

    if (a.featured !== b.featured) return Number(b.featured) - Number(a.featured);
    return a.title.localeCompare(b.title, "es");
  });

  return result;
}

function renderProductCard(product) {
  return `
    <article class="product-card">
      <div class="product-cover-wrap">
        ${renderCover(product)}
      </div>
      <div class="product-body">
        <div class="product-kicker">${escapeHTML(product.category)}</div>
        <h3 class="product-title">${escapeHTML(product.title)}</h3>
        <div class="product-author">${escapeHTML(product.author || "Autor no especificado")}</div>
        <div class="product-stock ${product.stock === 0 ? "is-out" : ""}">${escapeHTML(getStockLabel(product))}</div>
        <div class="product-price">${formatCurrency(product.price)}</div>
        <div class="product-actions">
          <button class="btn btn-light" type="button" data-product-detail="${escapeAttr(product.id)}">Ver detalle</button>
          <button class="btn btn-secondary" type="button" data-add-cart="${escapeAttr(product.id)}">Agregar</button>
        </div>
      </div>
    </article>
  `;
}

function renderCover(product) {
  if (product.image) {
    return `<img class="product-cover" src="${escapeAttr(product.image)}" alt="Portada de ${escapeAttr(product.title)}" loading="lazy" />`;
  }

  return `
    <div class="book-cover cover-${categoryClass(product.category)}">
      <span>${escapeHTML(product.category)}</span>
      <strong>${escapeHTML(product.title)}</strong>
      <small>${escapeHTML(product.author || "Librería")}</small>
    </div>
  `;
}

function openProductDetail(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  els.modalContent.innerHTML = `
    <div class="product-detail">
      <div>${renderCover(product)}</div>
      <div class="detail-content">
        <p class="eyebrow">${escapeHTML(product.category)}</p>
        <h2>${escapeHTML(product.title)}</h2>
        <p class="detail-author">Autor: ${escapeHTML(product.author || "Autor no especificado")}</p>
        <p class="detail-description">${escapeHTML(product.description || "Descripción no disponible. Consultá a la librería para más información.")}</p>

        <div class="detail-meta">
          <div>
            <span>Precio orientativo</span>
            <strong>${formatCurrency(product.price)}</strong>
          </div>
          <div>
            <span>Stock</span>
            <strong>${escapeHTML(getStockLabel(product))}</strong>
          </div>
          <div>
            <span>ISBN</span>
            <strong>${escapeHTML(product.isbn || "No informado")}</strong>
          </div>
        </div>

        <div class="notice">
          Este mockup muestra un flujo inicial de compra. El stock se plantea como dato publicado y administrado manualmente por la librería.
        </div>

        <div class="detail-actions">
          <button class="btn btn-primary" type="button" data-add-cart="${escapeAttr(product.id)}">Agregar al carrito</button>
          <a class="btn btn-light" href="${buildProductWhatsAppUrl(product)}" target="_blank" rel="noopener">Consultar por WhatsApp</a>
        </div>
      </div>
    </div>
  `;

  els.modal.classList.add("is-open");
  els.modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  els.modal.classList.remove("is-open");
  els.modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function renderPagination(totalPages) {
  if (totalPages <= 1) {
    els.pagination.innerHTML = "";
    return;
  }

  const pages = getPaginationRange(currentPage, totalPages);
  const prevDisabled = currentPage === 1 ? "disabled" : "";
  const nextDisabled = currentPage === totalPages ? "disabled" : "";

  els.pagination.innerHTML = `
    <button type="button" ${prevDisabled} data-page="${currentPage - 1}">‹</button>
    ${pages.map((page) => {
      if (page === "...") return `<span class="ellipsis">…</span>`;
      return `<button type="button" class="${page === currentPage ? "is-active" : ""}" data-page="${page}">${page}</button>`;
    }).join("")}
    <button type="button" ${nextDisabled} data-page="${currentPage + 1}">›</button>
  `;

  els.pagination.querySelectorAll("[data-page]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextPage = Number(button.dataset.page);
      if (!nextPage || nextPage < 1 || nextPage > totalPages) return;
      currentPage = nextPage;
      renderCatalog();
      document.querySelector("[data-route='catalogo']").scrollIntoView({ behavior: "smooth" });
    });
  });
}

function getPaginationRange(page, totalPages) {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const range = [1];
  const left = Math.max(2, page - 1);
  const right = Math.min(totalPages - 1, page + 1);

  if (left > 2) range.push("...");
  for (let i = left; i <= right; i += 1) range.push(i);
  if (right < totalPages - 1) range.push("...");
  range.push(totalPages);

  return range;
}

async function handleFileInput(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  setImportStatus(`Leyendo ${file.name}...`);

  try {
    let rows = [];

    if (file.name.toLowerCase().endsWith(".xlsx")) {
      rows = await parseXlsxFile(file);
    } else if (file.name.toLowerCase().endsWith(".json")) {
      rows = await parseJsonFile(file);
    } else {
      rows = parseCsv(await file.text());
    }

    const imported = normalizeCatalogRows(rows);

    if (!imported.length) {
      throw new Error("El archivo no contiene productos válidos. Verificá las columnas de la plantilla.");
    }

    products = sanitizeProducts(imported);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    catalogSourceLabel = `Importado desde ${file.name}`;
    activeCategory = "Todos";
    currentPage = 1;
    state.search = "";
    els.searchInput.value = "";
    renderCategoryFilter();
    renderHome();
    renderCatalog();

    setImportStatus(`Catálogo actualizado: ${products.length.toLocaleString("es-AR")} productos importados desde ${file.name}.`);
  } catch (error) {
    console.error(error);
    setImportStatus(error.message || "No se pudo importar el archivo.", true);
  } finally {
    event.target.value = "";
  }
}

async function parseJsonFile(file) {
  const content = await file.text();
  const parsed = JSON.parse(content);
  if (Array.isArray(parsed)) return parsed;
  if (Array.isArray(parsed.products)) return parsed.products;
  throw new Error("El JSON debe ser un array de productos o contener una propiedad products.");
}

function normalizeCatalogRows(rows) {
  if (!Array.isArray(rows) || !rows.length) return [];

  if (rows[0] && typeof rows[0] === "object" && !Array.isArray(rows[0]) && "title" in rows[0]) {
    return rows;
  }

  const [headers, ...dataRows] = rows;
  const headerMap = headers.map(normalizeHeader);

  return dataRows
    .map((row, index) => {
      const obj = {};

      headerMap.forEach((header, columnIndex) => {
        const value = Array.isArray(row) ? row[columnIndex] : row?.[headers[columnIndex]];
        if (header) obj[header] = value;
      });

      const title = cleanText(obj.title);
      if (!title) return null;

      const author = cleanText(obj.author);
      const isbn = cleanText(obj.isbn);
      const category = cleanText(obj.category) || "Sin categoría";
      const price = parsePrice(obj.price);
      const stock = parseStock(obj.stock);
      const description = cleanText(obj.description);
      const image = cleanText(obj.image);
      const featured = parseBoolean(obj.featured);

      return {
        id: makeProductId(title, author, index),
        title,
        author,
        isbn,
        category,
        price,
        stock,
        description,
        image,
        featured
      };
    })
    .filter(Boolean);
}

function normalizeHeader(header) {
  const value = cleanText(header)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim();

  const map = {
    "titulo": "title",
    "título": "title",
    "nombre": "title",
    "producto": "title",
    "libro": "title",
    "isbn": "isbn",
    "codigo isbn": "isbn",
    "código isbn": "isbn",
    "cod isbn": "isbn",
    "isbn13": "isbn",
    "isbn 13": "isbn",
    "autor": "author",
    "categoria": "category",
    "categoría": "category",
    "rubro": "category",
    "precio": "price",
    "importe": "price",
    "stock": "stock",
    "cantidad": "stock",
    "existencia": "stock",
    "disponibilidad": "stock",
    "descripcion": "description",
    "descripción": "description",
    "detalle": "description",
    "imagen": "image",
    "url imagen": "image",
    "portada": "image",
    "destacado": "featured",
    "destacados": "featured"
  };

  return map[value] || "";
}

function sanitizeProducts(input) {
  return (Array.isArray(input) ? input : [])
    .map((item, index) => {
      const title = cleanText(item.title || item.Titulo || item.titulo);
      if (!title) return null;

      const author = cleanText(item.author || item.Autor || item.autor);
      const isbn = cleanText(item.isbn || item.ISBN || item.Isbn);
      const category = cleanText(item.category || item.Categoria || item.categoria) || "Sin categoría";

      return {
        id: cleanText(item.id) || makeProductId(title, author, index),
        title,
        author,
        isbn,
        category,
        price: parsePrice(item.price ?? item.Precio ?? item.precio),
        stock: parseStock(item.stock ?? item.Stock ?? item.cantidad ?? item.Cantidad ?? item.existencia ?? item.Existencia),
        featured: parseBoolean(item.featured ?? item.Destacado ?? item.destacado),
        description: cleanText(item.description || item.Descripcion || item.descripcion),
        image: cleanText(item.image || item.Imagen || item.imagen)
      };
    })
    .filter(Boolean);
}

function parseCsv(text) {
  const rows = [];
  const delimiter = detectDelimiter(text);
  let current = "";
  let row = [];
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"' && inQuotes && next === '"') {
      current += '"';
      i += 1;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === delimiter && !inQuotes) {
      row.push(current.trim());
      current = "";
    } else if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") i += 1;
      row.push(current.trim());
      if (row.some((cell) => cell !== "")) rows.push(row);
      row = [];
      current = "";
    } else {
      current += char;
    }
  }

  row.push(current.trim());
  if (row.some((cell) => cell !== "")) rows.push(row);

  return rows;
}

function detectDelimiter(text) {
  const firstLine = text.split(/\r?\n/).find(Boolean) || "";
  const semicolons = (firstLine.match(/;/g) || []).length;
  const commas = (firstLine.match(/,/g) || []).length;
  return semicolons > commas ? ";" : ",";
}

async function parseXlsxFile(file) {
  if (!("DecompressionStream" in window)) {
    throw new Error("Este navegador no soporta lectura directa de .xlsx sin librerías externas. Probá con Chrome/Edge actualizado o exportá el Excel como CSV.");
  }

  const buffer = await file.arrayBuffer();
  const entries = await unzipXlsx(buffer);

  const sharedStrings = entries["xl/sharedStrings.xml"]
    ? parseSharedStrings(decodeText(entries["xl/sharedStrings.xml"]))
    : [];

  const sheetName = Object.keys(entries)
    .filter((name) => /^xl\/worksheets\/sheet\d+\.xml$/.test(name))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))[0];

  if (!sheetName) {
    throw new Error("No se encontró una hoja válida dentro del archivo Excel.");
  }

  return parseWorksheet(decodeText(entries[sheetName]), sharedStrings);
}

async function unzipXlsx(buffer) {
  const view = new DataView(buffer);
  const eocdOffset = findEndOfCentralDirectory(view);

  if (eocdOffset < 0) throw new Error("Archivo .xlsx inválido o dañado.");

  const totalEntries = view.getUint16(eocdOffset + 10, true);
  let centralOffset = view.getUint32(eocdOffset + 16, true);
  const entries = {};

  for (let i = 0; i < totalEntries; i += 1) {
    if (view.getUint32(centralOffset, true) !== 0x02014b50) {
      throw new Error("No se pudo leer el índice interno del Excel.");
    }

    const compression = view.getUint16(centralOffset + 10, true);
    const compressedSize = view.getUint32(centralOffset + 20, true);
    const fileNameLength = view.getUint16(centralOffset + 28, true);
    const extraLength = view.getUint16(centralOffset + 30, true);
    const commentLength = view.getUint16(centralOffset + 32, true);
    const localHeaderOffset = view.getUint32(centralOffset + 42, true);

    const fileName = decodeText(buffer.slice(centralOffset + 46, centralOffset + 46 + fileNameLength));

    const localNameLength = view.getUint16(localHeaderOffset + 26, true);
    const localExtraLength = view.getUint16(localHeaderOffset + 28, true);
    const dataStart = localHeaderOffset + 30 + localNameLength + localExtraLength;
    const compressedData = buffer.slice(dataStart, dataStart + compressedSize);

    if (compression === 0) {
      entries[fileName] = compressedData;
    } else if (compression === 8) {
      entries[fileName] = await inflateRaw(compressedData);
    }

    centralOffset += 46 + fileNameLength + extraLength + commentLength;
  }

  return entries;
}

function findEndOfCentralDirectory(view) {
  const min = Math.max(0, view.byteLength - 65557);
  for (let i = view.byteLength - 22; i >= min; i -= 1) {
    if (view.getUint32(i, true) === 0x06054b50) return i;
  }
  return -1;
}

async function inflateRaw(data) {
  try {
    const stream = new Blob([data]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
    return await new Response(stream).arrayBuffer();
  } catch {
    const stream = new Blob([data]).stream().pipeThrough(new DecompressionStream("deflate"));
    return await new Response(stream).arrayBuffer();
  }
}

function parseSharedStrings(xmlText) {
  const xml = parseXml(xmlText);
  return [...xml.getElementsByTagName("si")].map((si) => {
    return [...si.getElementsByTagName("t")].map((t) => t.textContent || "").join("");
  });
}

function parseWorksheet(xmlText, sharedStrings) {
  const xml = parseXml(xmlText);
  const rows = [...xml.getElementsByTagName("row")];

  return rows.map((row) => {
    const cells = [...row.getElementsByTagName("c")];
    const values = [];

    cells.forEach((cell, fallbackIndex) => {
      const ref = cell.getAttribute("r") || "";
      const colIndex = ref ? columnLettersToIndex(ref.replace(/\d+/g, "")) : fallbackIndex;
      values[colIndex] = readCellValue(cell, sharedStrings);
    });

    return values.map((value) => value ?? "");
  }).filter((row) => row.some((cell) => cleanText(cell) !== ""));
}

function readCellValue(cell, sharedStrings) {
  const type = cell.getAttribute("t");
  const valueNode = cell.getElementsByTagName("v")[0];

  if (type === "inlineStr") {
    const inline = cell.getElementsByTagName("is")[0];
    return inline ? inline.textContent : "";
  }

  const raw = valueNode ? valueNode.textContent : "";

  if (type === "s") return sharedStrings[Number(raw)] || "";
  if (type === "b") return raw === "1" ? "SI" : "NO";
  return raw;
}

function parseXml(xmlText) {
  const xml = new DOMParser().parseFromString(xmlText, "application/xml");
  const error = xml.querySelector("parsererror");
  if (error) throw new Error("No se pudo interpretar el XML interno del Excel.");
  return xml;
}

function columnLettersToIndex(letters) {
  return letters.split("").reduce((acc, letter) => acc * 26 + letter.charCodeAt(0) - 64, 0) - 1;
}


async function handlePriceUpdateInput(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  setPriceUpdateStatus(`Leyendo ${file.name}...`);

  try {
    let rows = [];

    if (file.name.toLowerCase().endsWith(".xlsx")) {
      rows = await parseXlsxFile(file);
    } else if (file.name.toLowerCase().endsWith(".json")) {
      rows = await parseJsonFile(file);
    } else {
      rows = parseCsv(await file.text());
    }

    const updates = normalizePriceRows(rows);
    if (!updates.length) {
      throw new Error("El archivo no contiene filas válidas. Verificá que tenga columnas ISBN y Precio.");
    }

    const indexByIsbn = new Map();
    products.forEach((product, index) => {
      const key = normalizeIsbn(product.isbn);
      if (!key) return;
      if (!indexByIsbn.has(key)) indexByIsbn.set(key, []);
      indexByIsbn.get(key).push(index);
    });

    let updated = 0;
    let notFound = 0;
    let duplicated = 0;
    let invalid = 0;

    updates.forEach((item) => {
      const key = normalizeIsbn(item.isbn);
      if (!key || !Number.isFinite(item.price) || item.price <= 0) {
        invalid += 1;
        return;
      }

      const matches = indexByIsbn.get(key) || [];
      if (!matches.length) {
        notFound += 1;
        return;
      }

      if (matches.length > 1) {
        duplicated += 1;
        return;
      }

      products[matches[0]].price = item.price;
      updated += 1;
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    catalogSourceLabel = `Precios actualizados desde ${file.name}`;
    currentPage = 1;
    renderHome();
    renderCatalog();

    setPriceUpdateStatus(
      `Actualización finalizada: ${updated} precios actualizados, ${notFound} ISBN no encontrados, ${duplicated} ISBN duplicados y ${invalid} filas inválidas.`
    );
  } catch (error) {
    console.error(error);
    setPriceUpdateStatus(error.message || "No se pudo actualizar la planilla de precios.", true);
  } finally {
    event.target.value = "";
  }
}

function normalizePriceRows(rows) {
  if (!Array.isArray(rows) || !rows.length) return [];

  if (rows[0] && typeof rows[0] === "object" && !Array.isArray(rows[0])) {
    return rows
      .map((row) => ({
        isbn: cleanText(row.isbn || row.ISBN || row.Isbn),
        price: parsePrice(row.price ?? row.Precio ?? row.precio)
      }))
      .filter((row) => row.isbn || row.price);
  }

  const [headers, ...dataRows] = rows;
  const headerMap = headers.map(normalizeHeader);
  const isbnIndex = headerMap.indexOf("isbn");
  const priceIndex = headerMap.indexOf("price");

  if (isbnIndex < 0 || priceIndex < 0) {
    throw new Error("La planilla debe contener columnas ISBN y Precio.");
  }

  return dataRows
    .map((row) => ({
      isbn: cleanText(row[isbnIndex]),
      price: parsePrice(row[priceIndex])
    }))
    .filter((row) => row.isbn || row.price);
}

function downloadPriceTemplate() {
  const csv = [
    ["ISBN", "Precio"],
    ["9789500000001", "18500"],
    ["9789500000002", "9200"]
  ];

  const content = csv.map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(";")).join("\n");
  const blob = new Blob([content], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "actualizacion_precios_isbn.csv";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  setPriceUpdateStatus("Plantilla CSV de actualización de precios generada.");
}

function setPriceUpdateStatus(message, isError = false) {
  if (!els.priceUpdateStatus) return;
  els.priceUpdateStatus.textContent = message;
  els.priceUpdateStatus.classList.toggle("error", isError);
}

function downloadCurrentCatalog() {
  const blob = new Blob([JSON.stringify(products, null, 2)], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "catalogo.json";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  setImportStatus("Archivo catalogo.json generado. Para publicar el catálogo, subilo reemplazando data/catalogo.json en el hosting.");
}

async function resetCatalog() {
  localStorage.removeItem(STORAGE_KEY);
  products = sanitizeProducts(SAMPLE_PRODUCTS);
  catalogSourceLabel = "Catálogo demo restaurado";
  activeCategory = "Todos";
  currentPage = 1;
  state.search = "";
  els.searchInput.value = "";
  renderCategoryFilter();
  renderHome();
  renderCatalog();
  setImportStatus("Se restauró el catálogo demo embebido.");
}

function setImportStatus(message, isError = false) {
  els.importStatus.textContent = message;
  els.importStatus.classList.toggle("error", isError);
}


function loadCart() {
  try {
    const stored = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || "[]");
    cart = Array.isArray(stored) ? stored.filter((item) => item && item.id && item.quantity > 0) : [];
  } catch {
    cart = [];
    localStorage.removeItem(CART_STORAGE_KEY);
  }
}

function saveCart() {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }

  saveCart();
  renderCart();
  openCart();
  setCheckoutStatus(`Agregaste "${product.title}" al carrito.`);
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  saveCart();
  renderCart();
}

function changeCartQuantity(productId, delta) {
  const item = cart.find((cartItem) => cartItem.id === productId);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }
  saveCart();
  renderCart();
}

function getCartLines() {
  return cart
    .map((item) => {
      const product = products.find((p) => p.id === item.id);
      if (!product) return null;
      return { product, quantity: item.quantity, subtotal: (product.price || 0) * item.quantity };
    })
    .filter(Boolean);
}

function getCartTotal() {
  return getCartLines().reduce((acc, line) => acc + line.subtotal, 0);
}

function getCartQuantity() {
  return cart.reduce((acc, item) => acc + item.quantity, 0);
}

function renderCart() {
  if (!els.cartCount || !els.cartItems || !els.cartTotal || !els.cartEmpty) return;

  const lines = getCartLines();
  const quantity = getCartQuantity();
  els.cartCount.textContent = String(quantity);
  els.cartButton?.classList.toggle("has-items", quantity > 0);

  els.cartEmpty.hidden = lines.length !== 0;
  els.cartItems.innerHTML = lines.map(({ product, quantity, subtotal }) => `
    <article class="cart-item">
      <div class="cart-item-info">
        <strong>${escapeHTML(product.title)}</strong>
        <span>${escapeHTML(product.author || "Autor no especificado")}</span>
        <small>${formatCurrency(product.price)} c/u</small>
      </div>
      <div class="cart-qty">
        <button type="button" data-cart-decrease="${escapeAttr(product.id)}" aria-label="Restar unidad">−</button>
        <span>${quantity}</span>
        <button type="button" data-cart-increase="${escapeAttr(product.id)}" aria-label="Sumar unidad">+</button>
      </div>
      <div class="cart-item-total">${formatCurrency(subtotal)}</div>
      <button class="cart-remove" type="button" data-cart-remove="${escapeAttr(product.id)}">Quitar</button>
    </article>
  `).join("");

  els.cartTotal.textContent = formatCurrency(getCartTotal());
}

function openCart() {
  if (!els.cartDrawer) return;
  els.cartDrawer.classList.add("is-open");
  els.cartDrawer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  if (!els.cartDrawer) return;
  els.cartDrawer.classList.remove("is-open");
  els.cartDrawer.setAttribute("aria-hidden", "true");
  if (!els.modal?.classList.contains("is-open")) document.body.style.overflow = "";
}

function handleCheckoutSubmit(event) {
  event.preventDefault();
  const lines = getCartLines();
  if (!lines.length) {
    setCheckoutStatus("Agregá al menos un producto antes de generar el pedido.", true);
    return;
  }

  const name = cleanText(document.getElementById("checkoutName")?.value);
  const phone = cleanText(document.getElementById("checkoutPhone")?.value);
  const delivery = document.getElementById("checkoutDelivery")?.value || "Retiro en local";
  const payment = document.getElementById("checkoutPayment")?.value || "Mercado Pago Checkout Pro";
  const orderCode = `IL-${Date.now().toString().slice(-6)}`;
  const itemsText = lines.map(({ product, quantity, subtotal }) => `• ${quantity} x ${product.title} - ${formatCurrency(subtotal)}`).join("\n");
  const total = formatCurrency(getCartTotal());
  const message = `Pedido simulado ${orderCode}\nCliente: ${name}\nTeléfono: ${phone}\nEntrega: ${delivery}\nPago: ${payment}\n\nProductos:\n${itemsText}\n\nTotal estimado: ${total}\n\nPedido generado desde la tienda online. Stock administrado manualmente por la librería.`;
  const whatsappUrl = buildWhatsAppUrl(message);

  setCheckoutStatus(`Pedido ${orderCode} generado. En producción, este pedido se guardaría y el pago se procesaría con Mercado Pago Checkout Pro. `, false, whatsappUrl);
}

function setCheckoutStatus(message, isError = false, whatsappUrl = "") {
  if (!els.checkoutStatus) return;
  els.checkoutStatus.classList.toggle("error", isError);
  if (whatsappUrl) {
    els.checkoutStatus.innerHTML = `${escapeHTML(message)}<a href="${escapeAttr(whatsappUrl)}" target="_blank" rel="noopener">Enviar pedido por WhatsApp</a>`;
  } else {
    els.checkoutStatus.textContent = message;
  }
}

function getCategoryCounts() {
  return products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, {});
}

function normalizeIsbn(value) {
  return cleanText(value).replace(/[^0-9Xx]/g, "").toUpperCase();
}

function parseBoolean(value) {
  const normalized = cleanText(value).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return ["si", "sí", "true", "1", "x", "destacado", "yes"].includes(normalized);
}

function parseStock(value) {
  if (value === null || value === undefined || value === "") return null;
  const parsed = Number(cleanText(value).replace(/[^\d.-]/g, ""));
  if (!Number.isFinite(parsed) || parsed < 0) return null;
  return Math.floor(parsed);
}

function getStockLabel(product) {
  if (!product || product.stock === null || product.stock === undefined) return "Stock administrado";
  if (product.stock <= 0) return "Sin stock";
  if (product.stock === 1) return "1 disponible";
  return `${product.stock} disponibles`;
}

function parsePrice(value) {
  if (typeof value === "number") return value;
  const raw = cleanText(value);
  if (!raw) return 0;

  let clean = raw.replace(/[^\d,.-]/g, "");

  if (clean.includes(",") && clean.includes(".")) {
    clean = clean.replace(/\./g, "").replace(",", ".");
  } else if (clean.includes(",")) {
    clean = clean.replace(",", ".");
  }

  const parsed = Number(clean);
  return Number.isFinite(parsed) ? parsed : 0;
}

function cleanText(value) {
  return String(value ?? "").trim();
}

function makeProductId(title, author, index) {
  const slug = `${title}-${author || "producto"}-${index + 1}`
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  return slug || `producto-${index + 1}`;
}

function categoryClass(category) {
  return cleanText(category)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\/|\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-") || "general";
}

function formatCurrency(value) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0
  }).format(value || 0);
}

function buildProductWhatsAppUrl(product) {
  const isbnText = product.isbn ? ` (ISBN ${product.isbn})` : "";
  const message = `Hola, quisiera consultar por "${product.title}"${product.author ? ` de ${product.author}` : ""}${isbnText}.`;
  return buildWhatsAppUrl(message);
}

function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function escapeHTML(value) {
  return cleanText(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttr(value) {
  return escapeHTML(value);
}
