export const SignnUp = async (
  email,
  password,
  firstName,
  lastName,
  role,
  address
) => {
  console.log("info.", email, password, firstName, lastName, role, address);
  const body = { email, password, firstName, lastName, role, address };
  console.log("sinnup info", body);
  try {
    await fetch(`https://nimble-druid-24ce06.netlify.app/api/user/signupuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    console.log("body after request", body);
    console.log("signupworked");
  } catch (error) {
    console.log("signnup action error", error);
  }
};
export const LogInn = async (email, password) => {
  console.log("email-passowrd", email, password);
  const body = { email, password };
  console.log("body", body);
  try {
    await fetch(`https://nimble-druid-24ce06.netlify.app/api/user/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    console.log("body stringify", JSON.stringify(body));
  } catch (error) {
    console.log("LOG IN ERROR", error);
  }
};
export const LogOutt = async () => {
  try {
    await fetch(`https://nimble-druid-24ce06.netlify.app/api/user/logout`, {
      method: "GET",
    });
    console.log("userlogged out");
  } catch (error) {
    console.log(error);
  }
};
