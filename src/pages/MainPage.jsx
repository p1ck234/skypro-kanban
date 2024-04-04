import { useEffect, useState } from "react";
import Main from "../components/main/Main";
import { allCards } from "../lib/data";
const MainPage = () => {
  const [cards, setCards] = useState(allCards);
  const [isLoading, setIsLoading] = useState(true);

  const onCardAdd = () => {
    const newCard = {
      id: cards.length + 1,
      theme: "Web Design",
      title: "Название задачи",
      date: "30.10.23",
      status: "Без статуса",
    };
    setCards([...cards, newCard]);
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Main cards={allCards} />
    </>
  );
};

export default MainPage;
