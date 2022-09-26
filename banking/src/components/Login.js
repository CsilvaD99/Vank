import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { LogInn, LogOutt } from "../actions/Sign";
import { useDispatch, useSelector } from "react-redux";
import userInfoReducer from "../reducers/UserReducer";

export default function Login() {
  const UserSelect = useSelector((state) => state?.userInfoReducer?.signininfo);
  const dispatch = useDispatch();
  const LogInInfo = async (e) => {
    const loginfo = {
      email: e.target.form[0].value,
      password: e.target.form[1].value,
    };
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
    const GetUserUrl =
      "https://nimble-druid-24ce06.netlify.app/api/user/getuser";
    const fetchUser = await fetch(GetUserUrl, Useroptions);
    const UserJson = await fetchUser.json();
    console.log("userjson", UserJson);

    dispatch({ type: "SET_USER", payload: UserJson });
    // if (UserSelect. === "authenticated") {
    //   window.location.href = "/";
    // }
    // if ((UserSelect.aud = "authenticated")) {
    //   window.location.href = "/";
    // }
    if (!UserJson) {
      window.alert("Invalid Email or Password");
    }
    if (dispatch) {
      window.alert("Logged In");
    }
    console.log(fetchUser);
  };

  return (
    <div className="Login">
      <form className="Login">
        <TextField
          sx={{ width: { sm: 150, md: 400 } }}
          margin="normal"
          variant="standard"
          type="text"
          name="email"
          placeholder="Email"
        />
        <TextField
          sx={{ width: { sm: 150, md: 400 } }}
          margin="normal"
          variant="standard"
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="current-password"
        />

        <Button
          onClick={() => {
            window.location.href = "/signup";
          }}
          variant="contained"
        >
          Sign up
        </Button>
        <Button
          variant="contained"
          onClick={(e) => {
            LogInInfo(e);
          }}
        >
          Log In
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            LogOutt();
          }}
        >
          Log out
        </Button>
      </form>
    </div>
  );
}
