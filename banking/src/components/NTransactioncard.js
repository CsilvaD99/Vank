import React from "react";

export default function NTransactioncard(Nmap) {
  return (
    <div className="Card2">
      <h1 className="Sent">- ${Nmap.transfAmount}</h1>
      <h3 className="Sent">Sent To: {Nmap.toEmail} </h3>
    </div>
  );
}
