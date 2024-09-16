FROM node:22-alpine3.19
WORKDIR /app
ENV port=3000
ENV host=0.0.0.0
EXPOSE 3000
COPY . .
RUN npm install
RUN rm -rf /tmp/nitro/worker-*
CMD ["npm", "run", "dev"]
