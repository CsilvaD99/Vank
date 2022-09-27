import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { AccountRouter } from "./Routes/RouBankAccount.js";
import { TransfMoney } from "./Routes/RouMoneyTransf.js";
import { UserRouter } from "./Routes/RouUser.js";
import { UserSignUp } from "./Supa/User.js";
dotenv.config();
const app = express();
const PORT = 3002;

app.use(express.json());
app.use(cors({ origin: `*`, methods: ["GET", "POST", "PUT", "DELETE"] }));
app.use("/acc", AccountRouter);
app.use("/transf", TransfMoney);
app.use("/user", UserRouter);

app.get("/api/", async (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, console.log(`listening on port ${PORT}`));
