import { Button, TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TO_USER } from "../action-types/types";
import { SendMoney, UpdMoney } from "../actions/Transff";

export default function Selle() {
  const Uselect = useSelector((state) => state?.userInfoReducer?.signininfo);
  const UUselect = useSelector((state) => state?.userInfoReducer?.moreinfo[0]);
  const Tselect = useSelector((state) => state?.userInfoReducer?.touser[0]);
  const dispatch = useDispatch();
  const SendMoneyInfo = async (e) => {
    console.log(e);
    const TransfInfo = {
      email: `${Uselect?.email}`,
      amount: e.target.form[3].value,
      plusbool: "true",
      toemail: e.target.form[0].value,
    };
    console.log(UUselect?.tamount);
    console.log(e.target.form[3].value);
    const balance = Number(UUselect?.tamount);
    const Sbalance = Number(e.target.form[2].value);
    if (balance <= Sbalance) {
      window.alert("Not Enough Funds");
    } else {
      console.log("TransfInfo", TransfInfo);
      await SendMoney(
        TransfInfo.email,
        TransfInfo.amount,
        TransfInfo.plusbool,
        TransfInfo.toemail
      );

      if (SendMoney) {
        const Umoney = UUselect?.tamount;
        const smoney = e.target.form[3].value;
        const subtracted = Number(Umoney) - Number(smoney);
        console.log(Umoney, smoney, subtracted);
        console.log(subtracted);
        const Nsubtracted = subtracted.toString();
        console.log(Nsubtracted);

        await UpdMoney(Nsubtracted, Uselect?.email);

        window.alert("Money Sent");
      }
    }
  };
  const EmailCheck = async (e) => {
    const email = e.target.form[0].value;
    const body = { email: email };
    const checkoptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    const checkurl = "http://localhost:3002/user/getotheruser";
    const fetchC = await fetch(checkurl, checkoptions);
    const CheckJson = await fetchC.json();
    const setdispatch = dispatch({ type: TO_USER, payload: CheckJson });
    if (setdispatch) {
      const tamount = Tselect?.tamount;
      const adda = e.target.form[3].value;
      const added = Number(tamount) + Number(adda);
      const Fadd = added.toString();
      await UpdMoney(Fadd, email);
    }
  };

  return (
    <div className="Signup">
      <form className="Login">
        <TextField
          sx={{ width: { sm: 150, md: 400 } }}
          margin="normal"
          label="Send to"
          variant="outlined"
          type="text"
          name="toemail"
          placeholder="Send to"
        />
        <div className="TwoB">
          <p>
            Currently Sending to:{Tselect?.firstName} {Tselect?.lastName}.
          </p>
        </div>
        <Button
          variant="contained"
          onClick={(e) => {
            EmailCheck(e);
          }}
        >
          Check Email
        </Button>

        <h3>Amount:</h3>
        <TextField
          sx={{ width: { sm: 150, md: 400 } }}
          margin="normal"
          label="$"
          variant="outlined"
          type="text"
          name="sendAmount"
          placeholder="$"
        />

        <Button
          variant="contained"
          onClick={(e) => {
            SendMoneyInfo(e);
          }}
        >
          Send
        </Button>
      </form>
    </div>
  );
}
