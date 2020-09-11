const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const loanRouter = require("./routes/loanRoute");
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send("Loan Street API is working");
});

app.use("/loans", loanRouter);

const port = process.env.PORT || 3010;
app.listen(port, () => {
  console.log(`server started on ${port}`);
});
