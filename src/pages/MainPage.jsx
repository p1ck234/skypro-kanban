import { useEffect, useState } from "react";
import Main from "../components/main/Main";
import { Outlet } from "react-router-dom";
import { getTasks } from "../api";

const MainPage = ({ user }) => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true); // Set loading state to true initially

    getTasks({ token: user.token })
      .then((response) => {
        setCards(response.tasks);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false); // Set loading state to false after the promise is resolved or rejected
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
