import { supabase } from "./Supabase.js";

export const UserSignUpAuth = async (email, password) => {
  const { user, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  if (error) {
    console.log(error);
    return error;
  }
  return user;
};
export const UserInfoSignUp = async (firstName, lastName, address, role) => {
  if (role === "true") {
    role = true;
  }
  if (role === "false") {
    role = false;
  }
  console.log(role);
  const { data, error } = await supabase.from("UserInfo").insert({
    firstName: firstName,
    lastName: lastName,
    address: address,
    modRole: role,
  });
  if (error) {
    console.log("userinfoerror", error);
    return error;
  }
  return data;
};
export const UserSignIn = async (email, password) => {
  const { user, error } = await supabase.auth.signIn({
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
export const SelectuserName = async (email) => {
  const { data: UserInfo, error } = await supabase
    .from("UserInfo")
    .select("firstName,lastName,tamount")
    .eq("email", `${email}`);
  if (error) {
    console.log(error);
    return error;
  }
  console.log(UserInfo);
  return UserInfo;
};
export const UpdateAmount = async (amount, email) => {
  const { data, error } = await supabase
    .from("UserInfo")
    .update({ tamount: `${amount}` })
    .eq("email", `${email}`);
  if (error) {
    console.log(error);
    return error;
  }
  return data;
};

export const UserSignUp = async (firstName, lastName, address, email) => {
  const { data, error } = await supabase.from("UserInfo").insert({
    firstName: firstName,
    lastName: lastName,
    address: address,
    tamount: "100",
    email: email,
  });
  if (error) {
    console.log(error);
    return error;
  }
  return data;
};
export const FinalUserSignUp = async (
  email,
  password,
  firstName,
  lastName,
  address
) => {
  UserSignUpAuth(email, password);
  UserSignUp(firstName, lastName, address, email);
};

export const UserMore = async (email) => {
  const { data: UserInfo, error } = await supabase
    .from("UserInfo")
    .select("*")
    .eq(`email`, `${email}`);
  if (error) {
    console.log(error);
    return error;
  }
  return UserInfo;
};

// export const GetUserInfo = async () => {
//   const { data: UserInfo, error } = await supabase.from("UserInfo").select();
// };
