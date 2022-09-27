import { supabase } from "./Supabase.js";

export const SelectAccount = async () => {
  const { data: Account, error } = await supabase.from("Account").select();
  if (error) {
    return error;
  }
};
export const UpdateAccount = async () => {
  const { data, error } = await supabase
    .from("Account")
    .update({ money: money });
};
