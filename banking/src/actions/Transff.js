export const SendMoney = async (email, amount, plusminus, toemail) => {
  const body = { email, amount, plusminus, toemail };
  console.log("transfer create body", body);
  try {
    await fetch(`http://localhost:3002/transf/sendmoney`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    console.log("trasaction complete");
  } catch (error) {
    console.log(error);
  }
};
export const GetTransactions = async (email) => {
  const body = { email };
  console.log("email tranf body", body);
  try {
    await fetch(`http://localhost:3002/transf/gettransfer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    console.log("trasfercomplete");
  } catch (error) {
    console.log("trasfer error", error);
  }
};
export const UpdMoney = async (amount, email) => {
  console.log("amount,email", amount, email);
  const body = { amount: amount, email: email };
  try {
    await fetch("http://localhost:3002/user/updateamount", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    console.log("complete update amount", JSON.stringify(body));
  } catch (error) {
    console.log(error);
  }
};
