FROM node:12-alpine
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 7004
# Launch application
CMD ["npm","start"]