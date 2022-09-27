export const SignnUp = async (
  email,
  password,
  firstName,
  lastName,
  role,
  address
) => {
  const body = { email, password, firstName, lastName, role, address };

  await fetch(`http://localhost:3002/user/signupuser`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};
export const LogInn = async (email, password) => {
  const body = { email, password };

  await fetch(`http://localhost:3002/user/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};
export const LogOutt = async () => {
  await fetch(`/api/user/logout`, {
    method: "GET",
  });

  window.location.href = "/";
};
