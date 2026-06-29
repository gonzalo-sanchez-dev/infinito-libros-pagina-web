# Leer antes de subir

Esta carpeta contiene la versión corregida para presentar una propuesta de **eCommerce inicial** para Infinito Libros.

## Qué cambió respecto a la versión anterior

- Se reemplazó el mensaje de “catálogo consultivo” por “tienda online inicial”.
- Se agregó carrito de compras simulado.
- Se agregó checkout básico simulado con opción Mercado Pago Checkout Pro.
- Se reemplazó el criterio anterior de confirmación de disponibilidad por stock administrado manualmente por la librería.
- Se actualizó el presupuesto a **USD 1.200**.
- Se aclaró que pagos reales, pedidos persistentes, administración de stock y backend requieren implementación de producción.
- Se corrigieron textos que antes decían “sin carrito” o “sin pagos online”.

## Importante sobre GitHub Pages

GitHub Pages sirve para mostrar la demo y el presupuesto, pero no reemplaza un backend real de eCommerce.

Para un eCommerce operativo se debe implementar o contratar un entorno que permita:

- guardar pedidos;
- procesar pagos reales;
- proteger credenciales;
- consultar estados de pago;
- gestionar notificaciones y errores;
- administrar stock manualmente desde el entorno de producción.

## Estructura correcta

```text
index.html
styles.css
script.js
README.md
LEER_ANTES_DE_SUBIR.md
INSTRUCCIONES_GITHUB_PAGES.md
presupuesto_infinito_libros_catalogo_excel_precios.html
data/
  catalogo.json
plantillas/
  catalogo_libreria_ejemplo.csv
  actualizacion_precios_isbn.csv
```
