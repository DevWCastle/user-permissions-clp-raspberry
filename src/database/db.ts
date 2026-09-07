import { Sequelize } from 'sequelize';
import path from 'path';

// Define o caminho onde o arquivo do banco de dados será salvo.
// __dirname aponta para a pasta atual (src), então '../database.sqlite' 
// salvará o arquivo na raiz do seu projeto.
const storagePath = path.resolve(__dirname, './database.sqlite');

// Configura e inicializa a instância do Sequelize
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: storagePath,
    logging: false, // Defina como `console.log` caso queira ver as queries SQL geradas no terminal
});

sequelize
  .sync()
  .then(() => {
    console.log("✅ Banco de dados sincronizado com o Sequelize.");

  })
  .catch((err) => {
    console.error("Erro ao sincronizar com o banco:", err);
});

export default sequelize;
