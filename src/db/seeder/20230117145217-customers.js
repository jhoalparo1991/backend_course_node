"use strict";

/** @type {import('sequelize-cli').Migration} */
const { CUSTOMER_TABLE } = require("../models/customer.models");
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(CUSTOMER_TABLE, [
      {
        name: "steve",
        lastname: "jobs",
        user_id: 1,
      },
      {
        name: "mark",
        lastname: "zuckember",
        user_id: 2,
      },
      {
        name: "james",
        lastname: "gosling",
        user_id: 3,
      },
      {
        name: "linux",
        lastname: "tolvart",
        user_id: 4,
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete(CUSTOMER_TABLE, null, {});
  },
};
