# Instrucciones para GitHub Pages

Subir el contenido de esta carpeta al repositorio, no el ZIP comprimido.

## Archivos de raíz

```text
index.html
styles.css
script.js
README.md
LEER_ANTES_DE_SUBIR.md
INSTRUCCIONES_GITHUB_PAGES.md
presupuesto_infinito_libros_catalogo_excel_precios.html
```

## Carpetas necesarias

```text
data/catalogo.json
plantillas/catalogo_libreria_ejemplo.csv
plantillas/actualizacion_precios_isbn.csv
```

## Validación antes de publicar

Abrir `index.html` en GitHub y confirmar que la primera línea sea:

```html
<!DOCTYPE html>
```

Abrir `README.md` y confirmar que la primera línea sea:

```md
# Infinito Libros - Demo eCommerce inicial con presupuesto integrado
```

Abrir `data/catalogo.json` y confirmar que sea un JSON, no CSV.

## Aclaración de alcance

Esta demo corre en GitHub Pages y muestra carrito + checkout en modo simulado. Para una tienda real, se debe implementar backend, base de datos, persistencia de pedidos, conexión segura con Mercado Pago Checkout Pro y gestión operativa posterior.
