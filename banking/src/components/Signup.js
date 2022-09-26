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
  console.log("signup component");
  const SignUpInfo = async (e) => {
    const info = {
      email: e.target.form[0].value,
      password: e.target.form[1].value,
      firstName: e.target.form[3].value,
      lastName: e.target.form[4].value,
      role: e.target.form[5].value,
      address: e.target.form[7].value,
    };
    if (e.target.form[1].value !== e.target.form[2].value) {
      window.alert("Passwords do not match");
    }
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
      window.alert(`Welcome to Vank ${info.firstName} ${info.lastName}.`);
    }
  };
  return (
    <div className="Signup">
      <form className="Signup">
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
        />
        <TextField
          sx={{ width: { sm: 150, md: 400 } }}
          margin="normal"
          variant="standard"
          type="password"
          name="passwordConfirm"
          placeholder="Confirm Password"
        />
        <TextField
          sx={{ width: { sm: 150, md: 400 } }}
          margin="normal"
          variant="standard"
          type="text"
          name="firstName"
          placeholder="First Name"
        />
        <TextField
          sx={{ width: { sm: 150, md: 400 } }}
          margin="normal"
          variant="standard"
          type="text"
          name="lastName"
          placeholder="Last Name"
        />
        <FormControl>
          <InputLabel>Role</InputLabel>
          <Select label="type">
            <MenuItem value={false}>Client</MenuItem>
            <MenuItem value={true}>Bank Teller</MenuItem>
          </Select>
        </FormControl>
        <TextField
          sx={{ width: { sm: 150, md: 400 } }}
          margin="normal"
          variant="standard"
          type="text"
          name="address"
          placeholder="Address"
        />

        <Button
          variant="contained"
          onClick={() => {
            window.location.href = "/login";
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
      </form>
    </div>
  );
}
