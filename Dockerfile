FROM node:lts-alpine

RUN npm install -g http-server

WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app
RUN npm run build
EXPOSE 8080
CMD [ "http-server", "dist", "run", "serve" ]



# FROM node:lts-alpine

# RUN npm install -g http-server

# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# # RUN npm run build
# COPY . .
# EXPOSE 8080
# CMD ["npm", "run", "serve" ]

# FROM node:lts-alpine

# WORKDIR /app

# ENV PATH /app/node_modules/.bin:$PATH
# RUN npm install -g npm@9.8.1

# COPY package*.json /app/

# RUN npm install

# COPY . /app

# CMD ["npm", "run", "http-server" ]
# CMD npm run serve