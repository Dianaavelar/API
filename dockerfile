FROM node
WORKDIR /app
COPY package*.json ./
COPY swagger.js ./
COPY swagger_output.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]