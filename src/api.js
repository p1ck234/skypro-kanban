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

export const postToDo = async ({ title, topic, description, date, token }) => {
  const response = await fetch(`${url}/kanban`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify({
      title,
      topic,
      description,
      date,
    }),
  });

  if (response.status === 201) {
    return response.json();
  } else if (!response.ok) {
    const exp = await response.json();
    throw new Error(exp.error);
  }
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
  } else if (!response.ok) {
    const exp = await response.json();
    throw new Error(exp.error);
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
