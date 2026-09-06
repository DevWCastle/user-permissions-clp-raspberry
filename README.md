## INSTALAR DEPENDENCIAS
    npm i -D @types/node typescript
    npm i -D ts-node
    npm i express cors
    npm i -D @types/express @types/cors


 ## TS CONFIG
    "rootDir": "./src"
    "outDir": "./dist"

## PARA CRIAR A IMAGEM DO DOCKER
    docker build -t api-clp .

## PARA DAR RUN NA NOVA IMG NA PORTA ESCOLHIDA

    docker run -d -p 4040:4040 --name clp-backend api-clp  