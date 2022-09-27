import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { LogInn, LogOutt } from "../actions/Sign";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SET_USER } from "../action-types/types";

export default function Login() {
  const dispatch = useDispatch();
  const LogInInfo = async (e) => {
    const loginfo = {
      email: e.target.form[0].value,
      password: e.target.form[2].value,
    };
    console.log(e);
    await LogInn(loginfo.email, loginfo.password);

    const Useroptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (!LogInn) {
      window.alert("Incorrect Email or Password");
    }
    const GetUserUrl = "http://localhost:3002/user/getuser";
    const fetchUser = await fetch(GetUserUrl, Useroptions);
    const UserJson = await fetchUser.json();

    dispatch({ type: SET_USER, payload: UserJson });

    if (!UserJson) {
      window.alert("Invalid Email or Password");
    }
    if (dispatch) {
      window.alert("Logged In");
    }
  };

  return (
    <div className="Signup">
      <form className="Login">
        <h3>Log In</h3>
        <TextField
          sx={{ width: { sm: 150, md: 400 } }}
          margin="normal"
          label="Email"
          variant="outlined"
          type="text"
          name="email"
          placeholder="Email"
        />
        <TextField
          sx={{ width: { sm: 150, md: 400 } }}
          margin="normal"
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="current-password"
        />

        <Link to="/signup">Not a Member? Sign Up</Link>
        <div className="TwoB">
          <Button
            variant="contained"
            onClick={() => {
              LogOutt();
            }}
          >
            Log out
          </Button>
          <Button
            variant="contained"
            onClick={(e) => {
              LogInInfo(e);
            }}
          >
            Log In
          </Button>
        </div>
      </form>
    </div>
  );
}
