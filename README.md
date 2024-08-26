# Prisma com MariaDB usando Docker

Este guia ajudará a configurar o Prisma com MariaDB usando Docker.

## Passo 1: Crie `docker-compose.yml`

No `docker-compose.yml`, coloque as seguintes configurações abaixo no serviço do banco de dados:

```yaml
services:
  db:
    image: mariadb:latest
    restart: always
    container_name: prisma-mariadb
    ports:
      - '3306:3306'
    environment:
      MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}
      MYSQL_DATABASE: ${MYSQL_DATABASE}
      MYSQL_USER: ${MYSQL_USER}
      MYSQL_PASSWORD: ${MYSQL_PASSWORD}
    volumes:
      - mariadb_data:/var/lib/mysql

volumes:
  mariadb_data:
```

## Passo 2: Crie o arquivo `.env`
No `.env` use as configurações abaixo. Na DATABASE_URL, substitua os campos ${} pelo valor das variáveis. O `.env` não substitue, por padrão, os valores das variáveis.

```
MYSQL_ROOT_PASSWORD=
MYSQL_DATABASE=
MYSQL_USER=
MYSQL_PASSWORD=
MYSQL_PORT=

DATABASE_URL="mysql://${MYSQL_USER}:${MYSQL_ROOT_PASSWORD}@127.0.0.1:${MYSQL_PORT}/${MYSQL_DATABASE}"
```


## Passo 3: Inicie o container Docker
Rode o comando abaixo no terminal:
```
docker-compose up
```
## Passo 4: Garanta os privilégios para o usuário
Acesse o container do banco MariaDB e garanta os privilégios necessários para o usuário.
```
docker exec -it prisma-mariadb mariadb -u root -p
```

Digite a senha do root (igual a do .env), e rode os comandos abaixo substituindo os ${} pelos valores do .env
```
GRANT ALL PRIVILEGES ON *.* TO '${MYSQL_USER}'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```
Saia do terminal do MariaDB:
```
exit
```

## Passo 5: Acesse o container que está rodando o Node.Js
Após assegurar que o banco está rodando e acessível, use os comando abaixo:
```
docker exec -it <nome do container> /bin/sh (Linux)
docker exec -it <nome do container> sh (Windows)
```

## Passo 5: Rode os comandos do Prisma
Após assegurar que o banco está rodando e acessível, use os comando abaixo:

```
npx prisma migrate dev --name init
```