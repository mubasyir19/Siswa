"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Siswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Siswa.init(
    {
      nama: DataTypes.STRING,
      kelas: DataTypes.STRING,
      jurusan: DataTypes.STRING,
      noTelp: DataTypes.STRING,
      arrive: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Siswa",
    }
  );
  return Siswa;
};
