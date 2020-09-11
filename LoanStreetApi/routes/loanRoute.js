const express = require("express");
const router = express.Router();

const loanController = require("../controllers/loanController");

router.post("/new", loanController.createLoan);
router.get("/:id", loanController.showLoan);
router.put("/:id", loanController.editLoan);

module.exports = router;
