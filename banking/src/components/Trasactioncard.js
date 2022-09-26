import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function PTransactioncard(Pmap) {
  return (
    <div className="Card2">
      <h3>PTrasactioncard</h3>
      <h1>{Pmap.transfAmount}</h1>
    </div>
  );
}
