## INSTALAR DEPENDENCIAS
    npm i -D @types/node typescript
    npm i -D ts-node
    npm i express cors
    npm i -D @types/express @types/cors
    
    npm install sqlite3
    npm install -D @types/sqlite3
    
    npm install bcryptjs jsonwebtoken
    npm install -D @types/bcryptjs @types/jsonwebtoken

 ## TS CONFIG
    "rootDir": "./src"
    "outDir": "./dist"

## PARA CRIAR A IMAGEM DO DOCKER
    docker build -t api-clp .

## PARA DAR RUN NA NOVA IMG NA PORTA ESCOLHIDA

   
    docker build -t api-clp .
    docker stop clp-backend
    docker rm clp-backend
    docker run -d -p 4040:4040 -v sqlite_data:/app/database.sqlite --name clp-backend api-clp