export const SendMoney = async (email, amount, plusminus, toemail) => {
  const body = { email, amount, plusminus, toemail };

  await fetch(`http://localhost:3002/transf/sendmoney`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export const GetTransactions = async (email) => {
  const body = { email };

  await fetch(`http://localhost:3002/transf/gettransfer`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};
export const UpdMoney = async (amount, email) => {
  console.log("amount,email", amount, email);
  const body = { amount: amount, email: email };

  await fetch("http://localhost:3002/user/updateamount", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};
