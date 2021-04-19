# Pokemon

El enlace del proyecto subido en:
https://sad-wilson-96e7b0.netlify.app/
Cuando lo subí a Netlify me generó problemas al recargar la página en las rutas, toca chequearlo pero en local funciona muy bien. Si puedo ahora lo subo a mi hosting.

El repositorio es:
https://github.com/andreslara501/pokemon

Acerca de las tecnologías usadas:
El proyecto fue interesante por el manejo de las API de Pokemón, al final tocó usar 1 API más para acceder a las fotos de los Pokemón, pero está bien.

En primera parte usé Vue router que es muy bueno para poder interactuar y hacer animaciones básicas de transición y mantener un orden a la hora de manejar las diferentes secciones.

En la segunda parte utilicé VUEX con algo de Localstorage, esto me permite tener una persistencia desde el patrón que usa VUEX.

También usé AXIOS para poder traer las consultas de las APIs y no contaminar el código, que es una práctica muy común.

Usé una estructura donde separé los componentes representacionales, esto con el fin de ser más fácil el mantenimiento, dejando los componentes principales en casi la raíz.

Para el Loading, usé una animación de una Pokebola moviéndose, con el fin de que el usuario sepa que se está descargando los datos. Adicional le di un delay a propósito para que no fuera tan rápido la carga de los datos.

En ese punto, hice que descargara directamente toda la info del Json, son más de 1.700 Pókemons, si no estoy mal pero los descargó de una. Esto con el fin de almacenarlo en el Localstorage solo una vez (el almacenamiento queda sobrando por bastante)
y cuando el VUEX trae los datos, no tiene que volver a hacer la consulta al API principal, ahora tiempo y transferencia de datos.

Utilicé Vuetify para lo demás, es un framework muy liviano que permite hacer cosas geniales.

Se trató de seguir al 100% el diseño, ya por algunos pixels pero todo para mí quedó perfecto.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
