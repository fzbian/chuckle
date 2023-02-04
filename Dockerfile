FROM node:18
WORKDIR /app
COPY package.json .
RUN pnpm install
COPY . .
CMD [ "pnpm", "start" ]