import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  TextField,
  MenuItem,
} from "@mui/material";

export default function Mortgage() {
  return (
    <div>
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
        <InputLabel>Loan Type</InputLabel>
        <Select label="type">
          <MenuItem value={"House"}>House</MenuItem>
          <MenuItem value={"Car"}>Car</MenuItem>
          <MenuItem value={"Other"}>Other</MenuItem>
        </Select>
      </FormControl>
      <TextField
        sx={{ width: { sm: 150, md: 400 } }}
        margin="normal"
        variant="standard"
        type="text"
        name="amount"
        placeholder="Loan Amount"
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
        name="password"
        placeholder="Password"
      />
    </div>
  );
}
