FROM node:22.12.0-alpine3.20 AS build-base

WORKDIR /app
COPY . .

RUN npm install --omit=dev
RUN npm install -g typescript tsc-alias

RUN npm run build

FROM node:22.12.0-alpine3.20 
COPY --from=build-base /app/dist /app
COPY --from=build-base /app/node_modules /app/node_modules

WORKDIR /app

CMD ["node", "index.js"]