import express from "express";
import {
  FinalUserSignUp,
  GetUser,
  SelectuserName,
  UpdateAmount,
  UserLogOut,
  UserMore,
  UserSignIn,
} from "../Supa/User.js";
const router = express.Router();

router.post("/signupuser", async (req, res) => {
  console.log("req.body", req.body);
  const { email, password, firstName, lastName, address } = req.body;
  console.log("for signup", firstName, lastName, address);
  console.log("for auth", email, password);
  try {
    const awaitsignup = await FinalUserSignUp(
      email,
      password,
      firstName,
      lastName,
      address
    );
    res.status(200).send(awaitsignup);
  } catch (error) {
    res.status(400).send(error);
  }
});
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const signIN = await UserSignIn(email, password);
    res.status(200).send(signIN);
  } catch (error) {
    res.status(400).send(error);
    return error;
  }
});
router.post("/updateamount", async (req, res) => {
  try {
    const { amount, email } = req.body;
    const Uamount = await UpdateAmount(amount, email);
    res.status(200).send(Uamount);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/getuser", async (req, res) => {
  try {
    const gettinguser = await GetUser();
    res.status(200).send(gettinguser);
    return gettinguser;
  } catch (error) {
    res.status(400).send(error);
    return error;
  }
});
router.get("/logout", async (req, res) => {
  try {
    const loggingout = await UserLogOut();
    res.status(200).send(loggingout);
  } catch (error) {
    res.status(400).send(error);
  }
});
router.post("/getotheruser", async (req, res) => {
  const { email } = req.body;
  try {
    const GotherUse = await SelectuserName(email);
    res.status(200).send(GotherUse);
  } catch (error) {
    res.status(400).send(error);
  }
});
router.post("/moreuserinfo", async (req, res) => {
  try {
    const { email } = req.body;
    const Minfo = await UserMore(email);
    res.status(200).send(Minfo);
  } catch (error) {
    res.status(400).send(error);
  }
});

// router.post("/getuser", async (req, res) => {
//   const { email, password, role, firstName, lastName, address } = req.body;
//   console.log("for signup", firstName, lastName, address);
//   console.log("for auth", email, password, role);
//   try {
//     const signupauth = await UserSignUpAuth(email, password, role);
//     res.sendStatus(200).send(signupauth);
//     try {
//       const signup = await UserSignUp(firstName, lastName, address);
//       res.status(200).send(signup);
//     } catch (error) {
//       res.status(400).send(error);
//     }
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

export { router as UserRouter };
