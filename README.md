## Getting Started

Iniciar el servidor:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Features

- Home page que consume el servicio de peliculas y las muestra en el apartado 'Movies'.
- Componente 'Movie' reutilizable que contiene la información básica de la pelicula, así como un boton play que redirecciona al detalle de la pelicula, tambien incluye un botón para poder agregar a la watch list.
- Componente watch list muestra las peliculas agregadas en la parte superior de home page.
- Pagina detalle con la información relevante y ordenada para su lectura.

### Detalles técnicos

- Se usó React con el framework Next.js
- Los componentes están divididos en presentacionales y controladores, donde se separa toda la lógica de las peticiones y el comportamiento de los componentes visuales.
- Se contempló la reutilización de los componentes pertinentes.
- Todos los componentes de UI están hechos con vanilla css y Javascript.
- Las rutas son dinámicas.

### Contemplaciones

- Debido al tiempo que pude dedicarle, prioricé las funcionalidades más importantes y que reflejan mis skills, por lo mismo no atendí el tema de lazy loading, los filtros o los test.
- Debido a la naturaleza del proyecto no consideré necesario usar un manejador de estados como Redux.
