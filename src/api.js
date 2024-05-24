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
  } else if (!response.ok) {
    const exp = await response.json();
    throw new Error(exp.error);
  }
};

export async function putTodo({ token, id, taskData }) {
  const response = await fetch(url + `/kanban/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "PUT",
    body: JSON.stringify({
      title: taskData.title,
      topic: taskData.topic,
      status: taskData.status,
      description: taskData.description,
      date: taskData.date,
    }),
  });

  if (!response.status === 201) {
    throw new Error("Ошибка");
  }

  const data = await response.json();
  return data;
}

// Удалить задачу
export async function deleteTodo({ taskData, id, token }) {
  const response = await fetch(url + `/kanban/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "DELETE",
    body: JSON.stringify({
      taskData,
    }),
  });

  if (!response.status === 201) {
    throw new Error("Ошибка");
  }

  const data = await response.json();
  return data;
}
