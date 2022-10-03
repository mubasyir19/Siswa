"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Siswas",
      [
        {
          nama: "John Doe",
          kelas: "11 IPA 1",
          jurusan: "IPA",
          noTelp: "08745612389",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Hanin",
          kelas: "10 IPS 1",
          jurusan: "IPS",
          noTelp: "08798654123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Siswas", null, {});
  },
};
