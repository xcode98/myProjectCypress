# Usa una imagen de node como base
FROM node:18.19.1-alpine3.19

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos del proyecto al directorio de trabajo del contenedor
COPY . .

# Instala Cypress y otras dependencias necesarias
RUN npm install cypress

# Instala Cypress nuevamente para garantizar que esté correctamente en el caché
RUN npx cypress install

# Ejecuta las pruebas de Cypress
CMD ["npx", "cypress", "run"]