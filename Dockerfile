# base image
FROM node:13.8 as build

# set working directory
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json

# install dependencies
RUN npm install
RUN yarn install

# install app
COPY . /app/

# prepare for ~production~
RUN yarn build

# production environment
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# open TCP port for development server
EXPOSE 80

# start webserver
CMD ["nginx", "-g", "daemon off;"]
