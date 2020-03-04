# base image
FROM node:13.8

# set working directory
WORKDIR /app

# install app
COPY . /app/

# install dependencies
RUN npm install
RUN yarn install

# prepare for ~production~
RUN yarn build

# open TCP port for development server
EXPOSE 3000

# start app
CMD ["yarn", "start"]
