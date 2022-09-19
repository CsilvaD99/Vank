import { supabase } from "./Supabase.js";

export const SendTransaction = async (id, plusbool, amount, touser) => {
  const { data, error } = await supabase.from("Transactions").insert([
    {
      userid: id,
      PlusMinus: plusbool,
      transfAmount: amount,
      toAccount: touser,
    },
  ]);
  if (error) {
    console.log(error);
    return error;
  }
};
export const ReadTrasfer = async () => {
  const { data: Transactions, error } = await supabase
    .from("Transactions")
    .select(
      "id",
      "userid",
      "PlusMinus",
      "transfAmount",
      "toAccount",
      "created_at"
    );
  return Transactions;
  if (error) {
    console.log(error);
    return error;
  }
};
