# base image
FROM node:latest

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY . /app/

# install and cache app dependencies
COPY package.json /app/package.json
#RUN npm install --silent
RUN npm install
#RUN npm install react-scripts@3.0.1 -g --silent
RUN yarn build

EXPOSE 3000

# start app
CMD ["yarn", "start"]
