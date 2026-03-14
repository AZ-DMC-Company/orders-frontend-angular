# Stage 1: Build
FROM node:18-alpine AS build
WORKDIR /app

# Copiar package.json primero para cache de dependencias
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copiar resto del proyecto
COPY . .

# Ejecutar build usando la configuración "production"
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine
COPY --from=build /app/dist/orders-frontend /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]