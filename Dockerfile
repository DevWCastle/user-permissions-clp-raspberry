# Etapa 1: Build (Compila o TypeScript)
FROM node:24-alpine AS builder
WORKDIR /app

# Instala ferramentas necessárias para compilar módulos nativos C++ (sqlite3)
RUN apk add --no-cache python3 make g++

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Produção (Roda o JavaScript gerado)
FROM node:24-alpine
WORKDIR /app

# Instala ferramentas nativas para o npm install de produção do sqlite3
RUN apk add --no-cache python3 make g++

COPY package*.json ./
RUN npm install --omit=dev 

COPY --from=builder /app/dist ./dist

EXPOSE 4040
CMD ["npm", "start"]