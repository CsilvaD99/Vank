import React from "react";
import { TextField, Button } from "@mui/material";

export default function Signup() {
  return (
    <div className="Signup">
      <form className="Signup">
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
        <TextField
          sx={{ width: { sm: 150, md: 400 } }}
          margin="normal"
          variant="standard"
          type="text"
          name="address"
          placeholder="Address"
        />
        <TextField
          sx={{ width: { sm: 150, md: 400 } }}
          margin="normal"
          variant="standard"
          type="text"
          name="phone"
          placeholder="Phone Number"
        />
        <Button variant="contained">Log In</Button>
        <Button variant="contained">Create Account</Button>
      </form>
    </div>
  );
}
