import { idText } from "typescript";
import { supabase } from "./Supabase";

export const SendTransaction = async () => {
  const { data, error } = await supabase.from("Transactions").insert([
    {
      userid: id,
      PlusMinus: plusbool,
      transfAmound: amount,
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
  if (error) {
    console.log(error);
    return error;
  }
};
