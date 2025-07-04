# 1. Stufe: Build-Phase
FROM node:22.17.0 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# 2. Stufe: Bereitstellung
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/AngularBaseProject /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
