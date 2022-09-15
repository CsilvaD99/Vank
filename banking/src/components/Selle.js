import { Button, TextField } from "@mui/material";
import React from "react";

export default function Selle() {
  return (
    <div className="Card">
      <TextField
        sx={{ width: { sm: 150, md: 400 } }}
        margin="normal"
        variant="standard"
        type="text"
        name="sendAmount"
        placeholder="$"
      />

      <Button variant="contained">Send</Button>
    </div>
  );
}
