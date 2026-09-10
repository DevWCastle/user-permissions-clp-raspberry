import { Model, DataTypes } from 'sequelize';
import sequelize from '../../database/db';

// 1. A classe declara os campos para o TypeScript reconhecer
export class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public access!: number;
}

// 2. O User.init configura as tabelas no banco para o Sequelize
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    access: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    sequelize,
    tableName: 'users',
  }
);

export default User;