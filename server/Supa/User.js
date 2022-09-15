import { supabase } from "./Supabase";

export const UserSignUp = async (email, password, role, phone) => {
  const { user, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    role: role,
    phone: phone,
  });
  if (error) {
    console.log(error);
    return error;
  }
};
export const UserInfoSignUp = async (firstName, lastName, address) => {
  const { data, error } = await supabase
    .from("UserInfo")
    .insert({ firstName: firstName, lastName: lastName, address: address });
  if (error) {
    console.log("userinfoerror", error);
    return error;
  }
};
export const UserSignIn = async (email, password) => {
  const { user, error } = supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) {
    console.log("sign in", error);
    return error;
  }
};
export const UserLogOut = async () => {
  const { error } = await supabase.auth.signOut();
};
export const GetUser = async () => {
  const user = await supabase.auth.user();
};
// export const GetUserInfo = async () => {
//   const { data: UserInfo, error } = await supabase.from("UserInfo").select();
// };
