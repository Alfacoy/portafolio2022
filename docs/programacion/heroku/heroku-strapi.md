---
id: heroku-strapi   
title: Conectar heroku con strapi
sidebar_position: 3
---

:::info Documentación oficial (Inglés)
[Documentación oficial de Strapi](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/deployment/hosting-guides/heroku.html) 
:::

### El click
Me surgió la necesidad de revivir un proyecto antiguo llamado **ShareIt**.
Este no es más que una copia de [Linktree](https://linktr.ee/) en el cual uno puede agregar enlaces desde un portal de admin y esto se refleja en un frontend estático. 

Lo malo de ShareIt es que no posee algo similar, sino que para agregar o quitar enlaces uno tiene que tocar el código y deployarlo.

La intención es conseguir esto mediante la api de **Strapi** junto con la base de datos (**PostgreSQL**) que me provee **Heroku**.

### Instalando STRAPI en Heroku

#### [1] Instalar CLI de Heroku
En este enlace se puede elegir las diferentes versiones que tiene.

[Heroku Devcenter-CLI](https://devcenter.heroku.com/articles/heroku-cli)

#### [2] Logearse en Heroku
Abrimos la terminal e ingresamos lo siguiente.

```
heroku login
```

Esto nos abre una pestaña en el navegador donde podremos logearnos a Heroku.

#### [3] Creamos un nuevo proyecto
Si no es tu caso, podes avanzar al punto 4. 

Caso contrario ingresamos por terminal en la 
carpeta donde vamos a guardar nuestro proyecto lo siguiente:
```
npx create-strapi-app nombre-proyecto --quickstart
```
Esto nos va a crear un proyecto nuevo pero con una base de datos SQLite, luego tendremos que modificarlo. 

#### [4] Actualizar el .gitignore
Agregar al final del archivo .gitignore
```
package-lock.json
```

:::caution Investigar
No entiendo bien el porqué, pero al parecer es porque genera errores en heroku.
:::

#### [5] Iniciar Git y hacer commit del proyecto
``` sh
git init
git add .
git commit -m "Initial commit"
```

#### [6] Crear un proyecto en Heroku
Desde la ruta de nuestro proyecto escribimos en la terminal:
```
heroku create nombre-proyecto
```

Si no le ponemos el nombre del proyecto se genera un nombre random. ```heroku create```

:::tip Extra
Si ya tenes un proyecto de heroku creado, podrías usar el siguiente comando para conectarlo a tu proyecto local.
```
heroku git:remote -a nombre-de-aplicación-de-heroku
```
:::

A partir de acá ya tendríamos tanto heroku como nuestro proyecto de strapi conectados. Faltaría instalar PostgreSQL en el servidor.

### Instalando PostgreSQL
Recuerden que todos los pasos se hacen desde la carpeta raíz de nuestro proyecto.

#### [1] Agregar el addon
Para instalar la base de datos podemos hacerlo desde consola agregando simplemente:
```
heroku addons:create heroku-postgresql:hobby-dev
```

#### [2] Credenciales
Una vez instalado Postre en nuestro servidor podremos obtener las credenciales de esta para poder conectarnos desde nuestra app. 


Desde la terminal tendremos que escribir ```heroku config``` y nos debería retornar algo similar a esto.

```
postgres://ebitxebvixeeqd:dc59b16dedb3a1eef84d4999sb4baf@ec2-50-37-231-192.compute-2.amazonaws.com: 5432/d516fp1u21ph7b
```

La mejor manera de leer este choclo es así:

```
postgres:// USERNAME : PASSWORD @ HOST : PORT / DATABASE_NAME
```

**Resultado**
* _USERNAME_: ebitxebvixeeqd
* _PASSWORD_: dc59b16dedb3a1eef84d4999sb4baf
* _HOST_:ec2-50-37-231-192.compute-2.amazonaws.com
* _PORT_: 5432
* _DATABASE-NAME_: d516fp1u21ph7b

#### [3] Setear las variables de BD automáticamente
Strapi va a necesitar por cada conexión a base de datos su configuración (host, username,etc). 
De la URL que vimos en el punto 2, Strapi va a deconstruir de la manera que les mostré las variables de entorno usando pg-connection-string.

Heroku al parecer cada cierto tiempo cambia esta URL, por lo cual, lo mejor para automatizar este proceso es usar la variable de entorno **DATABASE_URL**. 

```
npm install pg-connection-string --save
```

:::caution Investigar
Tengo que investigar bien como utilizar la variable DATABASE_URL. Creo que en mi caso estoy pasando mal los datos.
:::

#### [4] Crear el archivo de configuración para producción
Dentro de la carpeta ```./config``` crear una nueva llamada ```env/production``` y dentro un archivo llamado ```database.js```. La ruta final sería algo similar a esta```.config/env/production/database.js```. Cuando corremos nuestra aplicación localmente no usamos esta ruta sino que utilizamos la de ```./config/database.js``` la cual podría estar seteada para ser usada con SQLite. 

:::info Atención
Strapi nos recomienda tener tanto en producción como en entorno local la misma base de datos.
:::

Dentro del archivo database.js en la carpeta de producción ingresamos este código:
```js
const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: config.host,
        port: config.port,
        database: config.database,
        username: config.user,
        password: config.password,
        ssl: {
          rejectUnauthorized: false,
        },
      },
      options: {
        ssl: true,
      },
    },
  },
});
```

:::caution Investigar
¿Qué es bookshelf?
:::

Luego tendremos que asegurarnos que Heroku utilice nuestro archivo nuevo con NODE_ENV desde la terminal.
```
heroku config:set NODE_ENV=production
```

#### [5] Agregar la configuración del servidor para producción
En la misma carpeta (```./config/env/production/```) agregar un nuevo archivo llamado ```server.js```. En este archivo solamente necesitaremos declarar la URL del dominio publico que nos provee Heroku. 

```js
module.exports = ({ env }) => ({
  url: env('NUESTRA_URL'),
});
```

También se necesita setear la variable de entorno en Heroku de tu URL. 
```
heroku config:set MY_HEROKU_URL=$(heroku info -s | grep web_url | cut -d= -f2)

```

:::caution Investigar
Esta última parte no la entendí. Recuerdo hacerlo, pero creo que me había dado error. Estaría bueno documentar el error y que hacer.

heroku config:set MY_HEROKU_URL=$(heroku info -s | grep web_url | cut -d= -f2)
:::

#### [6] PG Node Module
Si instalaste Strapi con PostgreSQL no pasa nada, pero caso contrario vamos a tener que instalar el módulo de ```pg```.

```
npm install pg --save
```

Cuando instalamos Strapi con el flag de --quickstart por defecto nos instala SQLite.

#### [7] Commitear los cambios
```
git add .
git commit -m "Update database config"
```

#### [8] Actualizar Yarn lockfile
Este paso esta en la guía de Strapi. Yo lo hice por las dudas, pero no sabría el por que.
Más vale prevenir jaja.

```
yarn install
```

#### [9] Commitear cambios
Igual que el paso anterior. Sospecho que algo hay con este archivo yarn.lock por lo que estaría bueno investigarlo.

```
git add yarn.lock
git commit -m "Update yarn lockfile"
```

:::caution Investigar
Revisar el uso que le da Heroku al archivo yarn.lock
:::

#### [10] Deployar
```
git push heroku HEAD:main
```

Esto puede durar unos minutos. Al final, se mostrará un log con la URL de nuestro proyecto.
Podemos clickear en él para abrirlo o mandarle un: 

```
heroku open
```

Si en este momento vemos una página de bienvenida de Strapi, arranca a festejar que hiciste bien todos los pasos.  Ahora lo que tendrías que hacer es logearte a la aplicación que acabamos de subir y comenzar a generar contenido.

Acordate que los datos que tengas en la base de datos local no se van a ver reflejados en la de producción.

![Strapi Welcome](./images/strapi-welcome.png)