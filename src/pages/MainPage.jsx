import { useEffect, useState } from "react";
import Main from "../components/main/Main";
import { allCards } from "../lib/data";
import { Outlet } from "react-router-dom";

const MainPage = () => {
  const [cards, setCards] = useState(allCards);
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Main cards={cards} isLoading={isLoading} setCards={setCards} />
      <Outlet />
    </>
  );
};

export default MainPage;
