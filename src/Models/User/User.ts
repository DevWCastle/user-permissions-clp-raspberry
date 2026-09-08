import { DataTypes } from 'sequelize';
import sequelize from '../../database/db'; // Importa a conexão que você já criou

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false, // Não permite ficar em branco
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Impede que dois usuários tenham o mesmo email
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'users' // Define o nome da tabela no banco de dados
});

export default User;