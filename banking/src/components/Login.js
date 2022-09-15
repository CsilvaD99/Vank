import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Signup from "./Signup";

export default function Login() {
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
          type="text"
          name="password"
          placeholder="Password"
        />

        <Button
          onClick={() => {
            <Signup />;
          }}
          variant="contained"
        >
          Sign up
        </Button>
        <Button variant="contained">Log In</Button>
      </form>
    </div>
  );
}
