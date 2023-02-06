FROM node:16 as build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine
COPY default.conf /etc/nginx/conf.d/
EXPOSE 4200
COPY --from=build /usr/src/app/dist/angular-frontend /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
