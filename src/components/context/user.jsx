import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "../../lib/paths";

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
    <UserContext.Provider value={{ user, userLogin, logout }}>
      {children}
    </UserContext.Provider>
  );
}


