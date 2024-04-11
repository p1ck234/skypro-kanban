import { useEffect, useState } from "react";
import Main from "../components/main/Main";
import { Outlet } from "react-router-dom";
import { getTasks } from "../api";

const MainPage = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    getTasks.then((response) => {
      setCards(response.tasks);
    });
  });

  return (
    <>
      <Main cards={cards} isLoading={isLoading} setCards={setCards} />
      <Outlet />
    </>
  );
};

export default MainPage;
