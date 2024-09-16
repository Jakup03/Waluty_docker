FROM node:22-alpine3.19
WORKDIR /app
ENV port=3001
ENV host=0.0.0.0
EXPOSE 3001
COPY . .
RUN npm install express mongoose cors
RUN rm -rf /tmp/nitro/worker-*
CMD ["node", "server.js"]
