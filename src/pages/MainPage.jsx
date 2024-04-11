import { useEffect, useState } from "react";
import Main from "../components/main/Main";
import { Outlet } from "react-router-dom";
import { getTasks } from "../api";

const MainPage = ({ user }) => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTasks({ token: user.token })
      .then((response) => {
        setCards(response.tasks);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(setIsLoading(false));
  }, [user]);

  return (
    <>
      <Main
        cards={cards}
        isLoading={isLoading}
        setCards={setCards}
        error={error}
      />
      <Outlet />
    </>
  );
};

export default MainPage;
