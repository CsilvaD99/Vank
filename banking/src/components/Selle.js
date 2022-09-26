import { Button, TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SendMoney, UpdMoney } from "../actions/Transff";

export default function Selle() {
  const Uselect = useSelector((state) => state?.userInfoReducer?.signininfo);
  const tselect = useSelector((state) => state?.userInfoReducer?.touser[0]);
  const UUselect = useSelector((state) => state?.userInfoReducer?.moreinfo[0]);
  const Tselect = useSelector((state) => state?.userInfoReducer?.touser[0]);
  const dispatch = useDispatch();
  const SendMoneyInfo = async (e) => {
    console.log(e);
    const TransfInfo = {
      email: `${Uselect?.email}`,
      amount: e.target.form[2].value,
      plusbool: "true",
      toemail: e.target.form[0].value,
    };
    if (UUselect?.tamount <= TransfInfo.amount) {
      window.alert("Not Enough Funds");
    }
    console.log("TransfInfo", TransfInfo);
    await SendMoney(
      TransfInfo.email,
      TransfInfo.amount,
      TransfInfo.plusbool,
      TransfInfo.toemail
    );

    if (SendMoney) {
      const Umoney = UUselect?.tamount;
      const smoney = e.target.form[2].value;
      const subtracted = Number(Umoney) - Number(smoney);
      console.log(Umoney, smoney, subtracted);
      console.log(subtracted);
      Number.toString(subtracted);
      console.log(subtracted);
      await UpdMoney(subtracted, Uselect?.email);

      window.alert("Money Sent");
    }
  };
  const EmailCheck = async (e) => {
    console.log("E", e);
    console.log("e.target", e.target.form[0].value);
    const email = e.target.form[0].value;
    const body = { email: email };
    const checkoptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    console.log("checkbody", body);
    const checkurl = "http://localhost:3002/user/getotheruser";
    const fetchC = await fetch(checkurl, checkoptions);
    const CheckJson = await fetchC.json();
    console.log("checkjson", await CheckJson);
    const setdispatch = dispatch({ type: "TO_USER", payload: CheckJson });
    if (setdispatch) {
      const tamount = tselect?.tamount;
      const adda = e.target.form[2].value;
      const added = Number(tamount) + Number(adda);
      await UpdMoney(added, email);
    }
  };

  return (
    <div className="Card">
      <form>
        <div>
          <TextField
            sx={{ width: { sm: 150, md: 400 } }}
            margin="normal"
            variant="standard"
            type="text"
            name="toemail"
            placeholder="toemail"
          />
          <p>
            Currently Sending to:{Tselect?.firstName} {Tselect?.lastName}.
          </p>
          <Button
            variant="contained"
            onClick={(e) => {
              EmailCheck(e);
            }}
          >
            Check Email
          </Button>
        </div>
        <div>
          <h3>Amount:</h3>
          <TextField
            sx={{ width: { sm: 150, md: 400 } }}
            margin="normal"
            variant="standard"
            type="text"
            name="sendAmount"
            placeholder="$"
          />
        </div>

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
