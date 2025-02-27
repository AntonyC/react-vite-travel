# Step1: Pull node to build project
FROM node:22 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install pnpm -g
RUN pnpm install
COPY tsconfig*.json ./
COPY public public/
COPY src src/
COPY index.html ./
COPY vite.config.ts ./
RUN npm run build

# Step2: Pull nginx and copy source to it
FROM nginx:alpine
COPY --from=build /app/dist/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


