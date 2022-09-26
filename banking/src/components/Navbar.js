import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="Navbar">
      <Link className="link" to="/home">
        Home
      </Link>
      <Link className="link" to="/selle">
        Send Money
      </Link>
      <h1>Bank</h1>
      <Link className="link" to="/signup">
        Sign up
      </Link>
      <Link className="link" to="/">
        Sign In
      </Link>
    </div>
  );
}
