require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const cors = require("cors");
const morgan = require("morgan");
const usersRouter = require("./routes/usersRouter");
const pollsRouter = require("./routes/pollsRouter");
const optionRouter = require("./routes/optionsRouters");

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/users", usersRouter);
app.use("/polls", pollsRouter);
app.use("/options", optionRouter);

app.listen(PORT, () => {
  console.log(`listening port ${PORT}`);
});
