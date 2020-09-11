const { Loan } = require("../models");

const createLoan = async function (req, res) {
  const body = req.body;

  try {
    await Loan.create({
      amount: body.amount,
      interestRate: body.interestRate,
      lengthOfLoan: body.lengthOfLoan,
      monthlyPayment: body.monthlyPayment,
    });
    res.status(201).send("Loan Added Successfully");
  } catch (err) {
    console.log("error", err);
    return res.status(504).send({ error: err.errors[0].message });
  }
};

const showLoan = async function (req, res) {
  const results = await Loan.findAll({
    where: {
      id: req.params.id,
    },
  });

  res.send(results);
};

const editLoan = async function (req, res) {
  const body = req.body;
  try {
    await Loan.update(
      {
        amount: body.amount,
        interestRate: body.interestRate,
        lengthOfLoan: body.lengthOfLoan,
        monthlyPayment: body.monthlyPayment,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.send(`Loan has been updated.`);
  } catch (err) {
    console.log("error", err);
    return res.status(504).send({
      error: err.errors[0].message,
    });
  }
};

module.exports = {
  createLoan,
  showLoan,
  editLoan,
};
