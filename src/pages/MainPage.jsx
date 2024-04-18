import { useEffect, useState } from "react";
import Main from "../components/main/Main";
import { Outlet } from "react-router-dom";
import { getTasks } from "../api";
import { useUserContext } from "../components/context/hooks/useUser";

const MainPage = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useUserContext();
  useEffect(() => {
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
  }, [user]);
  return (
    <>
      <Main
        cards={cards}
        isLoading={isLoading}
        setCards={setCards}
        error={error}
        user={user}
      />
      <Outlet />
    </>
  );
};

export default MainPage;
