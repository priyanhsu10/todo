FROM node:alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . ./

RUN npm run build

# deployment to nginx

FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx","-g","daemon off;"]