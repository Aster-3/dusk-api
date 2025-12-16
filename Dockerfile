FROM node:lts-alpine3.22
WORKDIR /app
COPY package.json* .
RUN npm install
CMD ["npm", "run", "dev"]