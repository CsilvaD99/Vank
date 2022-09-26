import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PTransactionCard from "./Trasactioncard";
import NTransactioncard from "./NTransactioncard";

export default function () {
  const TransaSelect = useSelector(
    (state) => state?.TransactionReducer?.transaction
  );
  const AccountSelect = useSelector(
    (state) => state?.userInfoReducer?.signininfo?.email
  );
  const dispatch = useDispatch();

  const GetTransactions = async (AccountSelect) => {
    console.log("TransSelector", AccountSelect);
    const body = { email: AccountSelect };
    const Transoptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    console.log("TransferBody", body);
    const getTUrl = "http://localhost:3002/transf/gettransfer";
    const fetchT = await fetch(getTUrl, Transoptions);
    const TJson = await fetchT.json();
    console.log("tJson", TJson);
    dispatch({ type: "SET_POS_TRANSA", payload: TJson });
    console.log("Transaselect", TransaSelect);
  };
  return (
    <div>
      <div className="Title">
        <h1>Transactions</h1>
      </div>
      <div className="Trow">
        <div className="column">
          <h2>Income</h2>
          {TransaSelect?.Positive?.map((Pmap) => (
            <PTransactionCard Pmap={Pmap} {...Pmap} />
          ))}
        </div>

        <div className="column">
          <h2>Sent</h2>
          {TransaSelect?.Negative?.map((Nmap) => (
            <NTransactioncard Nmap={Nmap} {...Nmap} />
          ))}
        </div>
      </div>
      <Button
        variant="contained"
        onClick={() => {
          GetTransactions(AccountSelect);
        }}
      >
        Transactions
      </Button>
    </div>
  );
}
