const { Model, DataTypes, Sequelize } = require("sequelize");

const USER_TABLE = "users";

const usersSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
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
  role: {
    type: DataTypes.ENUM("admin", "user", "seller", "customer"),
    allowNull: false,
    defaultValue: "user",
  },
  createdAt: {
    type: DataTypes.DATE,
    field: "created_at",
    defaultValue: DataTypes.NOW,
  },
};

class User extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: "User",
      timestamps: false,
    };
  }
}

module.exports = {
  User,
  USER_TABLE,
  usersSchema,
};
