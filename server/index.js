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
const router = express.Router();

reouter.use(express.json());
router.use(cors({ origin: `*`, methods: ["GET", "POST", "PUT", "DELETE"] }));
router.use("/acc", AccountRouter);
router.use("/transf", TransfMoney);
router.use("/user", UserRouter);

router.get("/", async (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, console.log(`listening on port ${PORT}`));

export { router as router };
