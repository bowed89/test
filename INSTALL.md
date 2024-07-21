# Instalación del Proyecto

Este documento proporciona instrucciones para configurar y ejecutar el proyecto tanto para el backend (Node.js) como para el frontend (Angular).

## Requisitos Previos

Antes de comenzar, asegurarse de tener instaladas las siguientes herramientas en el sistema:

- [Node.js](https://nodejs.org/) (versión recomendada: 16.20.2)
- [npm](https://www.npmjs.com/) (viene con Node.js)
- [Angular CLI](https://angular.io/cli) (versión: 14.0.6)
- [PgAdmin 4](https://www.pgadmin.org/download) (versión recomendada: 6.17)

## Instalación del Backend y Frontend 

1. **Clona el Repositorio**

   Clona el repositorio en tu máquina local:

   ```bash
   git clone https://github.com/bowed89/test.git

2. **Instalar dependencias**

   Entrar a las carpetas frontend y backend y con la terminal escribir:

   ```bash
   npm install

3. **Instalar la base de datos**

   - Dentro de la app PgAdmin conectarse localmente y dentro del Server Local click derecho y crear una Base de datos llamada 'test'.
   - Click derecho en la base de datos 'test', seleccionar Restore y elegir en Filename la carpeta clonada de github llamada database_pg.
   - Seleccionar el archivo 'test.backup' y click en el boton Restaurar.

4. **Credenciales .env en el Backend**
   PORT=4000
   JWT_SECRET=semilla 
   PG_CONNECTION_STRING=postgres://postgres:root@localhost:5432/test (postgres://nombreUsuario:password@servidor:puerto/nombreBaseDeDatos)
  
5. **Credenciales config.ts en el Frontend**
   export const API_URL = 'https://www.omdbapi.com/?apikey=1f36f955&s=';  (apikey personal '1f36f955')
   export const API_URL_IMD = 'https://www.omdbapi.com/?apikey=1f36f955&i=';
   export const API_BACKEND = 'http://localhost:4000'    (puerto 4000 por defecto o en el que nodejs compile)


6. **Correr proyecto Frontend**
   Dentro de la carpeta frontend escribir:

   ```bash
   ng serve --o

6. **Correr proyecto Backend**
   Dentro de la carpeta backend escribir:
   
   ```bash
   node index.js
  
  


