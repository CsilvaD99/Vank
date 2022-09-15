import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="Navbar">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/selle">
        Send Money
      </Link>
      <h1>Bank</h1>
      <Link className="link" to="/mortgage">
        Mortgage
      </Link>
      <Link className="link" to="/login">
        Sign In
      </Link>
    </div>
  );
}
