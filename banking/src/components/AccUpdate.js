import React from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function AccUpdate() {
  const distpatch = useDispatch();
  const AccountSelect = useSelector(
    (state) => state?.userInfoReducer?.signininfo?.email
  );
  const MSelect = useSelector((state) => state?.userInfoReducer?.moreinfo[0]);
  const MGetInfo = async (AccountSelect) => {
    console.log("Minfo", AccountSelect);
    const body = { email: AccountSelect };
    const Moptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    const Murl = "http://localhost:3002/user/moreuserinfo";
    const mfetch = await fetch(Murl, Moptions);
    const Mjson = await mfetch.json();
    console.log(Mjson);
    distpatch({ type: "MORE_INFO", payload: Mjson });
  };

  console.log(AccountSelect);
  return (
    <div className="Card">
      <div>
        <p>Total Balance</p>

        <h1>${MSelect?.tamount}</h1>
        <Link to="/selle">Send Money</Link>
      </div>

      <Button
        variant="contained"
        onClick={() => {
          MGetInfo(AccountSelect);
        }}
      >
        Get Account
      </Button>
    </div>
  );
}
