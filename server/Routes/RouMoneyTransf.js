import express from "express";
import { ReadTrasfer, SendTransaction } from "../Supa/MoneyTrasf.js";
const router = express.Router();

router.post("/sendmoney", async (req, res) => {
  console.log("sendmon");
  try {
    console.log("inside try sendmoney");
    const { id, plusbool, amount, touser } = req.body;
    const sendTrans = await SendTransaction(id, plusbool, amount, touser);
    console.log("sendtrans", sendTrans);
    res.status(200).send(sendTrans);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.get("/gettransfer", async (req, res) => {
  console.log("gettrasfer");
  try {
    const RTransfer = await ReadTrasfer();
    console.log(RTransfer);

    res.status(200).send(RTransfer);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

export { router as TransfMoney };
