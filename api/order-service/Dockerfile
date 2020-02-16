FROM node:12-alpine3.11
WORKDIR /app/order-service
COPY package.json /app/order-service
RUN npm install
COPY . /app/order-service
EXPOSE 7003
# Launch application
CMD ["npm","start"]