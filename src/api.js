const url = "https://wedev-api.sky.pro/api"

export const getTasks = async ({ token }) => {
  const response = await fetch(`${url}/kanban`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "GET",
  });

  const data = await response.json();
  return data;
};

export const authPost = async (login, password) => {
  const response = await fetch(`${url}/user/login`, {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  });
  const data = await response.json();
  return data;
};

export const regPost = async (name, login, password) => {
  const response = await fetch(`${url}/user`, {
    method: "POST",
    body: JSON.stringify({
      name,
      login,
      password,
    }),
  });
  const data = await response.json();
  return data;
};
