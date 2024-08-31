# Use a imagem oficial do Node.js
FROM node:18-alpine

# Define o diretório de trabalho
WORKDIR /app

# Copia o package.json e package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código
COPY . .

# Gera o cliente Prisma
RUN npx prisma generate

# Roda as migrações do Prisma
RUN npx prisma migrate deploy

# Expõe a porta que o servidor vai usar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
