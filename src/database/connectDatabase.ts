import sequelize from "./db";

// Função utilitária para testar a conexão com o banco
export const connectDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Conexão com o SQLite estabelecida com sucesso.');
        
        // Sincroniza os modelos com o banco de dados (Cria as tabelas se não existirem)
        // OBS: Em produção real, é recomendado usar Migrations em vez de .sync()
        await sequelize.sync({alter: true});
        console.log('✅ Tabelas sincronizadas.');
    } catch (error) {
        console.error('❌ Não foi possível conectar ao banco de dados:', error);
    }
};


