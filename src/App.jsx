import PopQuitAccount from "./components/popups/PopQuitAccount";
import PopNewCard from "./components/popups/PopNewCard";
import "./App.css";
import PopBrowser from "./components/popups/PopBrowse";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { useEffect, useState } from "react";
import { allCards } from "./data";

function App() {
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
    <div className="wrapper">
      <Header onCardAdd={onCardAdd} />
      {isLoading ? (
        <div>Загрузка...</div>
      ) : (
        <>
          <Main cards={cards} />
          <PopQuitAccount />
          <PopNewCard />
          <PopBrowser />
        </>
      )}
    </div>
  );
}

export default App;
