# Etapa 1: Build (Compila o TypeScript)
FROM node:24-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Produção (Roda o JavaScript gerado)
FROM node:24-alpine
WORKDIR /app
COPY package*.json ./
# Instala apenas dependências de produção (ignora tsx, typescript, etc)
RUN npm install --omit=dev 
COPY --from=builder /app/dist ./dist

EXPOSE 4040
CMD ["npm", "start"]