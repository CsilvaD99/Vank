import React from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { SignnUp } from "../actions/Sign";

export default function Signup() {
  const SignUpInfo = async (e) => {
    const info = {
      email: e.target.form[0].value,
      password: e.target.form[2].value,
      firstName: e.target.form[6].value,
      lastName: e.target.form[8].value,
      role: e.target.form[10].value,
      address: e.target.form[12].value,
    };
    if (e.target.form[2].value !== e.target.form[4].value) {
      window.alert("Passwords do not match");
    } else {
      console.log("body", info);
      console.log(
        "before sending info",
        info.email,
        info.password,
        info.firstName,
        info.lastName,
        info.role,
        info.address
      );
      await SignnUp(
        info.email,
        info.password,
        info.firstName,
        info.lastName,
        info.role,
        info.address
      );
      if (SignnUp) {
        window.alert(
          `Welcome to Vank ${info.firstName} ${info.lastName}. Make Sure to Sign in`
        );
      }
    }
  };
  return (
    <div className="Signup">
      <form className="Login">
        <h3>Sign Up</h3>
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
        />
        <TextField
          sx={{ width: { sm: 150, md: 400 } }}
          margin="normal"
          label="Confirm Password"
          variant="outlined"
          type="password"
          name="passwordConfirm"
          placeholder="Confirm Password"
        />
        <TextField
          sx={{ width: { sm: 150, md: 400 } }}
          margin="normal"
          label="First Name"
          variant="outlined"
          type="text"
          name="firstName"
          placeholder="First Name"
        />
        <TextField
          sx={{ width: { sm: 150, md: 400 } }}
          margin="normal"
          label="Last Name"
          variant="outlined"
          type="text"
          name="lastName"
          placeholder="Last Name"
        />
        <FormControl>
          <InputLabel>Role</InputLabel>
          <Select label="type" sx={{ width: { sm: 200, md: 350 } }}>
            <MenuItem value={false}>Client</MenuItem>
            <MenuItem value={true}>Bank Teller</MenuItem>
          </Select>
        </FormControl>
        <TextField
          sx={{ width: { sm: 150, md: 400 } }}
          margin="normal"
          label="Address"
          variant="outlined"
          type="text"
          name="address"
          placeholder="Address"
        />
        <div className="TwoB">
          <Button
            variant="contained"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Log In
          </Button>
          <Button
            variant="contained"
            onClick={(e) => {
              SignUpInfo(e);
            }}
          >
            Create Account
          </Button>
        </div>
      </form>
    </div>
  );
}
