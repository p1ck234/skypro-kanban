import { createContext, useEffect, useState } from "react";
import { getTasks } from "../../api";
import { useUserContext } from "./hooks/useUser";

export const TaskContext = createContext();


export function TaskProvider({ children }) {
    const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const { user } = useUserContext();
  
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
  
    return (
      <TaskContext.Provider value={{ cards, isLoading, error }}>
        {children}
      </TaskContext.Provider>
    );
  }