"use strict";

/** @type {import('sequelize-cli').Migration} */

const { USER_TABLE } = require("../models/users.models");
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(USER_TABLE, [
      {
        email: "jobs@email.com",
        password: "123456",
        role: "admin",
      },
      {
        email: "zuckember@email.com",
        password: "123456",
        role: "customer",
      },
      {
        email: "gosling@email.com",
        password: "123456",
        role: "client",
      },
      {
        email: "tolvart@email.com",
        password: "123456",
        role: "user",
      },
    ]);
  },
  async down(queryInterface) {
    return queryInterface.bulkDelete(USER_TABLE, null, {});
  },
};
