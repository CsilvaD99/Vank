import express from "express";
import { SelectAccount, UpdateAccount } from "../Supa/BankAccount.js";
const router = express.Router();

router.post("/getaccount", async (req, res) => {
  const { type, money } = req.body;
  try {
    const account = await SelectAccount(type, money);
    res.status(200).send(account);
  } catch (error) {
    res.status(400).send(error);
  }
});
router.post("/updateaccount", async (req, res) => {
  const { money } = req.body;
  try {
    const updateaccount = await UpdateAccount(money);
    res.status(200).send(updateaccount);
  } catch (error) {
    res.status(400).send(error);
  }
});

export { router as AccountRouter };
