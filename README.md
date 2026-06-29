# Infinito Libros - Demo eCommerce inicial con presupuesto integrado

Demo estática navegable para GitHub Pages.

Esta versión actualiza el alcance anterior de catálogo consultivo y lo presenta como una propuesta de **eCommerce inicial** con:

- tienda online navegable;
- catálogo con buscador, filtros y paginación;
- carga masiva inicial desde Excel, CSV o JSON;
- actualización de precios por ISBN;
- carrito de compras simulado;
- checkout básico simulado;
- stock básico administrado manualmente;
- integración contemplada con Mercado Pago Checkout Pro;
- presupuesto integrado por USD 1.200;
- versión imprimible del presupuesto.

## Aclaración importante

GitHub Pages permite publicar una demo estática, pero no ejecuta backend propio.

Por eso, en esta demo el carrito y el checkout funcionan de forma visual/simulada en el navegador. En una implementación real de eCommerce se debe agregar o contratar un entorno que permita:

- guardar pedidos en una base de datos;
- procesar pagos con Mercado Pago Checkout Pro;
- proteger credenciales privadas;
- administrar estados de pedidos;
- administrar stock de forma manual o, en una etapa futura, sincronizarlo con otros sistemas;
- manejar confirmaciones, errores y notificaciones.

## Archivos que deben quedar en la raíz del repositorio

- `index.html`: página principal. Debe empezar con `<!DOCTYPE html>`.
- `styles.css`: estilos visuales.
- `script.js`: navegación, catálogo, importador, actualizador de precios, stock manual, carrito y checkout simulado con opción Mercado Pago Checkout Pro.
- `presupuesto_infinito_libros_catalogo_excel_precios.html`: presupuesto imprimible actualizado a eCommerce inicial.
- `README.md`: este archivo.

## Carpetas necesarias

- `data/catalogo.json`: catálogo publicado por defecto. La ruta debe existir exactamente así.
- `plantillas/`: archivos CSV de ejemplo para probar carga masiva y actualización de precios.

## Publicación en GitHub Pages

1. Borrar del repositorio cualquier archivo subido por error, especialmente:
   - `catalogo (1).json`
   - `catalogo.json` en la raíz
   - cualquier `index.html` que muestre texto tipo `ISBN;Titulo;Autor...`
   - cualquier `README.md` que contenga código HTML del presupuesto
2. Subir estos archivos respetando nombres y carpetas.
3. Verificar que `index.html` esté en la raíz del repositorio, no dentro de otra carpeta.
4. Verificar que exista `data/catalogo.json`.
5. Verificar que exista `plantillas/` con los CSV de ejemplo.
6. En GitHub Pages, publicar desde `main` / raíz (`/root`).
7. Esperar que GitHub Pages termine el deployment.
8. Abrir la URL publicada y forzar recarga con `Ctrl + F5`.

## Comprobación rápida

- Si la página muestra `ISBN;Titulo;Autor...`, el archivo `index.html` está mal y fue reemplazado por un CSV.
- Si GitHub muestra el presupuesto dentro del README, el archivo `README.md` está mal y fue reemplazado por un HTML.
- Si el catálogo no carga desde archivo publicado, falta la carpeta `data` o falta `data/catalogo.json`.
