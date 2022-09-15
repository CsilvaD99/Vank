import express from "express";
const router = express.Router();

router.get("/getaccount", (req, res) => {
  console.log("/getaccount");
});

export { router as AccountRouter };
