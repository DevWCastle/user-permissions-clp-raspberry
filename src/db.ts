import { Sequelize } from 'sequelize';
import path from 'path';

// Define o caminho onde o arquivo do banco de dados será salvo.
// __dirname aponta para a pasta atual (src), então '../database.sqlite' 
// salvará o arquivo na raiz do seu projeto.
const storagePath = path.resolve(__dirname, '../database.sqlite');

// Configura e inicializa a instância do Sequelize
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: storagePath,
    logging: false, // Defina como `console.log` caso queira ver as queries SQL geradas no terminal
});

// Função utilitária para testar a conexão com o banco
export const connectDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Conexão com o SQLite estabelecida com sucesso.');
        
        // Sincroniza os modelos com o banco de dados (Cria as tabelas se não existirem)
        // OBS: Em produção real, é recomendado usar Migrations em vez de .sync()
        await sequelize.sync();
        console.log('✅ Tabelas sincronizadas.');
    } catch (error) {
        console.error('❌ Não foi possível conectar ao banco de dados:', error);
    }
};

export default sequelize;
