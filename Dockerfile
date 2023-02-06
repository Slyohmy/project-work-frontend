FROM node:16 as build
WORKDIR /src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine
COPY default.conf /etc/nginx/conf.d/
EXPOSE 4200
COPY --from=build /src/app/dist/angular-frontend /share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
