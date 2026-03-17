# Proyecto Final - Gandini

Aplicación e-commerce desarrollada con React como entrega final del curso.

## Funcionalidades

* Listado de productos desde Firebase Firestore
* Filtrado por categorías
* Vista en detalle de cada producto
* Selector de cantidad con control de stock
* Carrito de compras con Context API
* Checkout con generación de orden
* Guardado de órdenes en Firestore
* Renderizado condicional (loading, carrito vacío, sin stock)

## Tecnologías utilizadas

* React
* React Router DOM
* Firebase / Firestore
* CSS

## Instalación

```bash
git clone https://github.com/matiasagandini/ProyectoFinalGandini.git
npm install
npm run dev
```

## Deploy

Aplicación online:
https://proyecto-final-gandini.vercel.app/

## Notas

* Los productos se obtienen desde Firebase Firestore
* Las órdenes de compra se almacenan en la colección "orders"
