PM2 es un potente gestor de procesos para aplicaciones Node.js que te permite ejecutar, gestionar y monitorear tus aplicaciones en producción. Ya que has usado el comando `pm2 start app.js` para iniciar tu bot, aquí te doy los comandos esenciales para manejarlo, incluyendo cómo detenerlo, reiniciarlo y actualizarlo cuando hagas cambios en tu código.

### 1. **Iniciar la aplicación**
Ya lo has hecho con:
```bash
pm2 start app.js
```
Esto ejecuta tu archivo `app.js` como un proceso en segundo plano y le asigna un ID de proceso (PID). Si quieres asignarle un nombre específico al proceso, puedes usar:
```bash
pm2 start app.js --name mi-bot
```

### 2. **Ver procesos activos**
Para ver todos los procesos que PM2 está gestionando, usa:
```bash
pm2 list
```
Este comando te mostrará el estado, tiempo de actividad y uso de memoria de cada proceso.

### 3. **Detener la aplicación**
Si necesitas detener el bot (por ejemplo, para hacer cambios en el código), ejecuta:
```bash
pm2 stop app.js
```
O si nombraste el proceso:
```bash
pm2 stop mi-bot
```
También puedes detener el proceso usando su ID (que puedes ver con `pm2 list`):
```bash
pm2 stop <ID-del-proceso>
```

### 4. **Reiniciar la aplicación**
Una vez que hayas realizado cambios en `app.js` y quieras reiniciar el bot para aplicar los cambios, usa:
```bash
pm2 restart app.js
```
O si el proceso tiene un nombre:
```bash
pm2 restart mi-bot
```
Esto reiniciará la aplicación y cargará las actualizaciones del código.

### 5. **Recargar sin tiempo de inactividad**
PM2 también permite recargar la aplicación sin tiempo de inactividad (útil en entornos de producción). Para recargar la app sin interrumpirla, usa:
```bash
pm2 reload app.js
```
Esto asegurará que no se interrumpan las solicitudes durante la recarga.

### 6. **Ver los logs**
Para ver los logs en tiempo real de tu aplicación:
```bash
pm2 logs
```
Esto mostrará los mensajes de salida, como los de `console.log()`.

Si solo quieres ver los logs de una aplicación específica:
```bash
pm2 logs mi-bot
```

### 7. **Monitorear la aplicación**
Para monitorear el uso de recursos (CPU y memoria) en tiempo real:
```bash
pm2 monit
```

### 8. **Guardar la lista de procesos actual**
Si deseas que el bot se reinicie automáticamente tras un reinicio del sistema, guarda la lista de procesos:
```bash
pm2 save
```

### 9. **Iniciar PM2 al arrancar el sistema**
Para asegurarte de que PM2 se inicie automáticamente al encender el sistema, ejecuta:
```bash
pm2 startup
```
Sigue las instrucciones que PM2 te dará después de ejecutar este comando. Esto creará un servicio del sistema que iniciará PM2 y tus aplicaciones en cada arranque.

### 10. **Eliminar un proceso**
Si deseas eliminar por completo el bot de PM2:
```bash
pm2 delete app.js
```
O usando el nombre del proceso:
```bash
pm2 delete mi-bot
```

### 11. **Actualizar un proceso automáticamente**
Para mayor comodidad, puedes activar el modo `watch` de PM2, que reinicia automáticamente la app si detecta algún cambio en los archivos:
```bash
pm2 start app.js --watch
```

Este comando recargará el proceso automáticamente cuando edites `app.js` o cualquier archivo del directorio.

### 12. **Ver más información**
Para obtener detalles sobre un proceso específico:
```bash
pm2 show mi-bot
```

### 13. **Reiniciar todos los procesos**
Si necesitas reiniciar todos los procesos que PM2 está gestionando:
```bash
pm2 restart all
```

### Ejemplo de flujo completo:
1. Inicia tu bot:
   ```bash
   pm2 start app.js --name mi-bot
   ```

2. Realiza los cambios en `app.js`.

3. Reinicia el bot para aplicar los cambios:
   ```bash
   pm2 restart mi-bot
   ```

4. Si deseas que el bot se reinicie automáticamente tras un reinicio del sistema:
   ```bash
   pm2 save
   pm2 startup
   ```

Siguiendo estos pasos, podrás gestionar y controlar tu bot de manera efectiva utilizando PM2. Si necesitas más aclaraciones, ¡avísame!

Si vas a usar Ubuntu para trabajar con Node.js, hay varias herramientas y complementos que puedes instalar para mejorar tu experiencia de desarrollo. Aquí te dejo una lista de recomendaciones esenciales:

### 1. **NVM (Node Version Manager)** 
Para gestionar fácilmente varias versiones de Node.js. Ya lo has usado en Alpine, pero también es muy útil en Ubuntu. Te permite cambiar entre versiones sin problemas.

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```
Luego, instala la versión de Node.js que necesitas:
```sh
nvm install 18
nvm use 18
```

### 2. **npm (Node Package Manager)**
Viene integrado con Node.js, pero asegúrate de tener la última versión:
```sh
npm install -g npm
```
Te ayudará a gestionar dependencias y paquetes para tu proyecto de Node.js.

### 3. **Yarn**
Un administrador de paquetes alternativo a npm que es más rápido y eficiente en muchos casos:
```sh
npm install -g yarn
```

### 4. **PM2**
Es un administrador de procesos para Node.js, ideal para producción. Te ayuda a ejecutar aplicaciones en segundo plano, reiniciar automáticamente si fallan y manejar registros de manera eficiente.
```sh
npm install -g pm2
```
Para ejecutar tu aplicación:
```sh
pm2 start app.js
```

### 5. **nodemon**
Es muy útil para el desarrollo, ya que reinicia automáticamente tu aplicación cada vez que haces cambios en el código.
```sh
npm install -g nodemon
```
Para usarlo:
```sh
nodemon app.js
```

### 6. **Express.js (si trabajas con APIs o aplicaciones web)**
Un framework web ligero y flexible para crear APIs y aplicaciones.
```sh
npm install express --save
```

### 7. **MongoDB o MySQL**
Si necesitas una base de datos, MongoDB es una excelente opción NoSQL. Para instalar MongoDB en Ubuntu:
```sh
sudo apt install -y mongodb
```
Si prefieres bases de datos SQL, instala MySQL:
```sh
sudo apt install mysql-server
```

### 8. **Mongoose (para trabajar con MongoDB)**
Si utilizas MongoDB, Mongoose facilita el trabajo con la base de datos al proporcionar un esquema para modelar los datos.
```sh
npm install mongoose --save
```

### 9. **ESLint**
Para garantizar un código de calidad, ESLint analiza tu código en busca de errores de sintaxis y estilo.
```sh
npm install eslint --save-dev
```
Puedes configurarlo con:
```sh
npx eslint --init
```

### 10. **Webpack o Vite**
Son herramientas para empaquetar tus aplicaciones de JavaScript modernas. Webpack es más tradicional y robusto, mientras que Vite es más rápido y moderno.
Para Webpack:
```sh
npm install webpack webpack-cli --save-dev
```
Para Vite:
```sh
npm install vite --save-dev
```

### 11. **Postman o Insomnia**
Herramientas GUI para probar tus APIs. Son esenciales para asegurar que tus servicios funcionen correctamente.

### 12. **Docker**
Si necesitas contenerizar tus aplicaciones para que funcionen de manera consistente en diferentes entornos, instala Docker:
```sh
sudo apt install docker.io
```

### 13. **Git**
Control de versiones es crucial para cualquier proyecto. Si no lo tienes instalado:
```sh
sudo apt install git
```

### 14. **Build Tools**
En algunos casos, es posible que necesites herramientas para compilar dependencias de Node.js con código nativo, como `node-gyp`.
```sh
sudo apt install build-essential
```

### 15. **Redis (opcional)**
Si tu aplicación necesita un sistema de caché, puedes instalar Redis:
```sh
sudo apt install redis-server
```

Estas herramientas y complementos deberían cubrir la mayoría de tus necesidades de desarrollo con Node.js en Ubuntu, desde el desarrollo local hasta la producción
