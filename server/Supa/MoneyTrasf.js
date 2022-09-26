import { supabase } from "./Supabase.js";

export const SendTransaction = async (email, amount, plusminus, toemail) => {
  const { data, error } = await supabase.from("Transactions").insert([
    {
      email: email,
      transfAmount: amount,
      PlusMinus: plusminus,
      toEmail: toemail,
    },
  ]);
  if (error) {
    console.log(error);
    return error;
  }
  return data;
};
export const ReadTrasfer = async (email) => {
  const Negative = await ReadNTrasfer(email);
  const Positive = await ReadPTrasfer(email);
  const AllTransactions = await { Positive: Positive, Negative: Negative };
  // .select(`id,email,transfAmount,toEmail`);

  return AllTransactions;
};
export const ReadNTrasfer = async (email) => {
  const { data: Transactions, error } = await supabase
    .from("Transactions")
    .select("*")
    .eq("email", `${email}`);

  // .select(`id,email,transfAmount,toEmail`);

  if (error) {
    console.log(error);
    return error;
  }
  const NegTransactions = Transactions;
  return NegTransactions;
};
export const ReadPTrasfer = async (email) => {
  const { data: Transactions, error } = await supabase
    .from("Transactions")
    .select("*")
    .eq("toEmail", `${email}`);

  // .select(`id,email,transfAmount,toEmail`);

  if (error) {
    console.log(error);
    return error;
  }
  const PosTransactions = Transactions;
  return PosTransactions;
};

// export const TransactioninfoTo = async () => {

// }
// export const TransactioninfoFrom = async()=> {

// }
