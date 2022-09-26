import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";

export default function Mortgage() {
  return (
    <div>
      <TextField
        sx={{ width: { sm: 150, md: 400 } }}
        margin="normal"
        variant="standard"
        type="text"
        name="password"
        placeholder=" New Address"
      />

      <Button></Button>
    </div>
  );
}
