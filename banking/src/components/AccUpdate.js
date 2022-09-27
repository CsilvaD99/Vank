import React from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { R_BALANCE, MORE_INFO } from "../action-types/types";

export default function AccUpdate() {
  const distpatch = useDispatch();
  const AccountSelect = useSelector(
    (state) => state?.userInfoReducer?.signininfo?.email
  );
  const MSelect = useSelector((state) => state?.userInfoReducer?.moreinfo[0]);
  const MGetInfo = async (AccountSelect) => {
    distpatch({ type: R_BALANCE, payload: "" });
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
    distpatch({ type: MORE_INFO, payload: Mjson });
  };

  return (
    <div className="Card">
      <div>
        <p>Total Balance</p>

        <h1>${MSelect?.tamount}</h1>
        <Link to="/selle" className="Link2">
          Send Money
        </Link>
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
