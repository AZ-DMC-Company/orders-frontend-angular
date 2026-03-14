# Stage 1: Build
FROM node:18-alpine AS build

WORKDIR /app

# Copiamos package.json y package-lock.json
COPY package*.json ./

# Instalamos dependencias
RUN npm install --legacy-peer-deps

# Copiamos el resto del proyecto
COPY . .

# Build Angular
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

COPY --from=build /app/dist/orders-frontend /usr/share/nginx/html

# Expose port 80
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]