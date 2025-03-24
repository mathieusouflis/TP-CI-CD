FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 3000

ENV DB_HOST=localhost
ENV DB_PORT=27017
ENV DB_DATABASE=my_project_db
ENV PORT=3000

CMD ["node", "app.js"]