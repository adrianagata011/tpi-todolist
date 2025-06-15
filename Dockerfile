# Imagen base de Node.js
FROM node:18

# Carpeta de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos del proyecto
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Puerto que expone el contenedor
EXPOSE 3000

# Comando para iniciar la app
CMD ["node", "src/app.js"]
