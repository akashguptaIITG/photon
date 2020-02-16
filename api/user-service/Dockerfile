FROM node:12-alpine3.11
WORKDIR /app/user-service
COPY package.json /app/user-service
RUN npm install
COPY . /app
EXPOSE 7001
# Launch application
CMD ["npm","start"]