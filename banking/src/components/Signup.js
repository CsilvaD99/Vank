import React from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

export default function Signup() {
  console.log("signup component");

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
          type="text"
          name="password"
          placeholder="Password"
        />
        <TextField
          sx={{ width: { sm: 150, md: 400 } }}
          margin="normal"
          variant="standard"
          type="text"
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
            <MenuItem value={"client"}>Client</MenuItem>
            <MenuItem value={"teller"}>Bank Teller</MenuItem>
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
        <Button variant="contained">Create Account</Button>
      </form>
    </div>
  );
}
