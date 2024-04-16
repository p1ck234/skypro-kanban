const url = "https://wedev-api.sky.pro/api";

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

  if (response.status === 201) {
    return response.json();
  } else if (response.status === 400) {
    throw new Error("Неверный логин или пароль");
  } 
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

  if (response.status === 201) {
    return response.json();
  } else if (response.status === 400) {
    throw new Error("Пользователь с таким логином уже существует");
  } 
};
