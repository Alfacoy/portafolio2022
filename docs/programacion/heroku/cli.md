---
id: cli
title: CLI
sidebar_position: 2
---

:::info Documentación oficial
[CLI Heroku](https://devcenter.heroku.com/articles/heroku-cli)
:::

#### heroku login
Es un comando básico para poder usar Heroku desde nuestro terminal.

Este directamente nos abre una pestaña en el navegador y desde ahí completamos el acceso.
```
heroku login 
```

En caso de que queramos iniciar sesión sin ir al navegador basta con agregar un flag al final.
```
heroku login -i
```

#### heroku create
Para crear un nuevo proyecto con un nombre random.
```
heroku create
```

En caso de que necesitemos poner un nombre puntual basta con agregarlo.
```
heroku create <nombre del proyecto>
```

#### heroku ps
Para saber las horas libres que nos quedan en nuestras apps del tier gratuito.
```
heroku ps -a <nombre del proyecto>
```