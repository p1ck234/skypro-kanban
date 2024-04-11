export const getTasks = async (token) => {
  const response = await fetch("https://wedev-api.sky.pro/api/kanban", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "GET",
  });

  const data = await response.json();
  return data;
};
