import express from "express";
import {
  FinalUserSignUp,
  GetUser,
  UserLogOut,
  UserSignIn,
} from "../Supa/User.js";
const router = express.Router();

router.post("/signupuser", async (req, res) => {
  const { email, password, role, firstName, lastName, address } = req.body;
  console.log("for signup", firstName, lastName, address);
  console.log("for auth", email, password, role);
  try {
    const awaitsignup = await FinalUserSignUp(
      email,
      password,
      role,
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
    console.log("before email");
    const signIN = await UserSignIn(email, password);
    console.log("past sign in function");
    console.log(password, email);
    res.status(200).send(signIN);
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
    console.log(error);
    res.status(400).send(error);
    return error;
  }
});
router.get("/logout", async (req, res) => {
  try {
    const loggingout = await UserLogOut();
    console.log("after the logout function");
    res.status(200).send(loggingout);
  } catch (error) {
    console.log(error);
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
