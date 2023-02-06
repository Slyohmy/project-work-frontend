# Build stage
# FROM node:14 as build
# WORKDIR /app
# COPY . . 
# RUN npm install
# RUN npm run build

# # Production stage
# FROM nginx:stable-alpine
# COPY --from=build /app/dist/app /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

###


# FROM node:16 as build
# WORKDIR /usr/src/app
# COPY package.json package.json
# COPY . .
# RUN npm install
# RUN npm run build

# FROM nginx:alpine
# COPY --from=build /usr/src/app/dist /usr/share/nginx/html
# EXPOSE 4200
# CMD [ "nginx", "-g", "daemon off;" ]

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
