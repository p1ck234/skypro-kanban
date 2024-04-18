import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "../../lib/paths";
import { getTasks } from "../../api";

function checkLS() {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    return user;
  } catch (error) {
    localStorage.removeItem("user");
    return null;
  }
}

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(checkLS());
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (user != null) {
      setIsLoading(true);
      getTasks({ token: user.token })
        .then((response) => {
          setCards(response.tasks);
        })
        .catch((err) => {
          setError(err.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [user]);

  const navigate = useNavigate();

  function userLogin(newUser) {
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
  }
  function logout() {
    localStorage.removeItem("user");
    setUser(null);
    navigate(paths.LOGIN);
  }

  return (
    <UserContext.Provider
      value={{
        user,
        userLogin,
        logout,
        cards,
        setCards,
        isLoading,
        setIsLoading,
        error,
        setError,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
