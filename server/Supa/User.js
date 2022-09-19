import { supabase } from "./Supabase.js";

export const UserSignUpAuth = async (email, password, role) => {
  const { user, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    role: role,
  });
  if (error) {
    console.log(error);
    return error;
  }
  return user;
};
export const UserInfoSignUp = async (firstName, lastName, address) => {
  const { data, error } = await supabase
    .from("UserInfo")
    .insert({ firstName: firstName, lastName: lastName, address: address });
  if (error) {
    console.log("userinfoerror", error);
    return error;
  }
  return data;
};
export const UserSignIn = async (email, password) => {
  const { user, error } = supabase.auth.signIn({
    email: email,
    password: password,
  });
  if (error) {
    console.log("sign in", error);
    return error;
  }
  console.log("after the sign in error", user);
  return user;
};
export const UserLogOut = async () => {
  const { error } = await supabase.auth.signOut();
};
export const GetUser = async () => {
  const user = await supabase.auth.user();
  console.log("user", user);
  return user;
};
export const UserSignUp = async (firstName, lastName, address) => {
  const { data, error } = await supabase
    .from("UserInfo")
    .insert({ firstName: firstName, lastName: lastName, address: address });
  if (error) {
    console.log(error);
    return error;
  }
  return data;
};
export const FinalUserSignUp = async (
  email,
  password,
  role,
  firstName,
  lastName,
  address
) => {
  UserSignUpAuth(email, password, role);
  UserSignUp(firstName, lastName, address);
};
// export const GetUserInfo = async () => {
//   const { data: UserInfo, error } = await supabase.from("UserInfo").select();
// };
