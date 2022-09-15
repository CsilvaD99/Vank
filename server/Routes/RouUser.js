import express from "express";
const router = express.Router();

router.get("/getuser", (req, res) => {
  const gotuser = "gotya";
  res.send(gotuser);
  console.log("got user");
});

export { router as UserRouter };
