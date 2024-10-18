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
