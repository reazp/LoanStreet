"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Loans",
      [
        {
          amount: 4564564.88,
          interestRate: 4.5,
          lengthOfLoan: 360,
          monthlyPayment: 4545.66,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: 111111111.88,
          interestRate: 2.5,
          lengthOfLoan: 160,
          monthlyPayment: 1545.66,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: 3333333.88,
          interestRate: 3.5,
          lengthOfLoan: 360,
          monthlyPayment: 3545.66,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: 222222.88,
          interestRate: 2.5,
          lengthOfLoan: 260,
          monthlyPayment: 2545.66,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
};
