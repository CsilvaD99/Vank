import express from "express";
const router = express.Router();

router.get("/sendmoney", (req, res) => {
  console.log("sendmon");
});
export { router as TransfMoney };
