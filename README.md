# Servidor de recepción de eventos de Ataque del proyecto: TOSS-TOtal-System-Shield-TOSHI

Powered by: <a href="http://gisai.upm.es/en/home/" target="_blank"><img src="http://gisai.upm.es/wp-content/uploads/logo_gisai_v2.png" height="120"></a>

Características:

  - Proyecto que ofrece un API para la visualización de los eventos de ataque que son enviados con el módulo de detección de ataques.
  - Basado en Node.js, visualización en tiempo real gracias a la librería Socket.io

### Installation

Se requiere la instalación de los siguientes paquetes software:
-  [Node.js](https://nodejs.org/) v10+ y NPM

En la carpera raiz del proyecto ejecutar:
```sh
$ npm install -g nodemon
$ npm install
$ set DEBUG=toss-server:* & npm start
```
El servidor arrancará en locahost:3000

Visitar la página http://localhost:3000 para visualizar en tiempo real todos los eventos que el servidor va recibiendo.

Para probar el envío de eventos de ataque se recomienda una herramienta como Postman. Se debe realizar una petición POST a http://localhost:3000 con un mensaje JSON de la forma:

```json
{
    "address" : "123.123.123.123",
    "port" : "54321",
    "protocol" : "tcp/udp/icmp",
    "confidence" : "0.875",
    "class" : "ddos_syn/ddos_synack/otro_tipo_de_ataque...."
}
```

Una vez realizado el envío, debe haber aparecido una nueva entrada en la página http://localhost:3000 abierta.

### To Do

1. Integración con módulo de detección de ataques


License
----


**All rights reserved**
