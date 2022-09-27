import express from "express";
import { ReadTrasfer, SendTransaction } from "../Supa/MoneyTrasf.js";
const router = express.Router();

router.post("/sendmoney", async (req, res) => {
  console.log("sendmon");
  try {
    console.log("inside try sendmoney");
    const { email, amount, plusminus, toemail } = req.body;
    const sendTrans = await SendTransaction(email, amount, plusminus, toemail);
    console.log("sendtrans", sendTrans);
    res.status(200).send(sendTrans);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.post("/gettransfer", async (req, res) => {
  console.log("gettrasfer");
  try {
    const { email } = req.body;
    const RTransfer = await ReadTrasfer(email);
    console.log(RTransfer);

    res.status(200).send(RTransfer);
  } catch (error) {
    res.status(400).send(error);
  }
});

export { router as TransfMoney };
