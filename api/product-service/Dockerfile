FROM node:12-alpine3.11
WORKDIR /app/product-service
COPY package.json /app/product-service
RUN npm install
COPY . /app/product-service
EXPOSE 7002
# Launch application
CMD ["npm","start"]