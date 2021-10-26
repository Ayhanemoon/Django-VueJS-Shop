"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "JohnDoe",
          email: "john@gmail.com",
          password: "jd1234567",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "ayhan1",
          email: "ayhan@gmail.com",
          password: "as1234567",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "reza1",
          email: "reza@gmail.com",
          password: "rs1234567",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "ali1",
          email: "ali@gmail.com",
          password: "ab1234567",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Users', null, {});
  },
};
