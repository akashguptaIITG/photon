FROM node:12-alpine3.11
WORKDIR /app/cart-service
COPY package.json /app/cart-service
RUN npm install
COPY . /app/cart-service
EXPOSE 7004
# Launch application
CMD ["npm","start"]