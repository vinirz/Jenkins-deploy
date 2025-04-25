FROM node:18 AS builder
WORKDIR /app
COPY . .
COPY .env .env
RUN npm install
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app ./
ENV NODE_ENV=production
RUN npm install --omit=dev
EXPOSE 3000
CMD ["npm", "start"]
