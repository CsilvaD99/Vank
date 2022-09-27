import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function PTransactioncard(Pmap) {
  return (
    <div className="Card2">
      <h1 className="Income">+ ${Pmap.transfAmount}</h1>
      <h3 className="Income">Sent From: {Pmap.email}</h3>
    </div>
  );
}
