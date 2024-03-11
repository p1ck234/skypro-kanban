import Column from "./Column";

function Main() {
  const allCards = [
    {
      cardId: 1,
      cardTitle: "Web Design",
      cardName: "Название задачи",
      cardDate: "30.10.23",
      column: "Без названия",
    },
    {
      cardId: 2,
      cardTitle: "Research",
      cardName: "Название задачи",
      cardDate: "30.10.23",
      column: "Без названия",
    },
    {
      cardId: 3,
      cardTitle: "Web Design",
      cardName: "Название задачи",
      cardDate: "30.10.23",
      column: "Без названия",
    },
    {
      cardId: 4,
      cardTitle: "Copywriting",
      cardName: "Название задачи",
      cardDate: "30.10.23",
      column: "Без названия",
    },
    {
      cardId: 5,
      cardTitle: "Web Design",
      cardName: "Название задачи",
      cardDate: "30.10.23",
      column: "Без названия",
    },
    {
      cardId: 6,
      cardTitle: "Research",
      cardName: "Название задачи",
      cardDate: "30.10.23",
      column: "Нужно сделать",
    },
    {
      cardId: 7,
      cardTitle: "Research",
      cardName: "Название задачи",
      cardDate: "30.10.23",
      column: "В работе",
    },
    {
      cardId: 8,
      cardTitle: "Copywriting",
      cardName: "Название задачи",
      cardDate: "30.10.23",
      column: "В работе",
    },
    {
      cardId: 9,
      cardTitle: "Web Design",
      cardName: "Название задачи",
      cardDate: "30.10.23",
      column: "В работе",
    },
    {
      cardId: 10,
      cardTitle: "Research",
      cardName: "Название задачи",
      cardDate: "30.10.23",
      column: "Тестирование",
    },
    {
      cardId: 11,
      cardTitle: "Research",
      cardName: "Название задачи",
      cardDate: "30.10.23",
      column: "Готово",
    },
  ];

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            <Column
              arr={allCards.filter((card) => card.column === "Без названия")}
            />
            <Column
              arr={allCards.filter((card) => card.column === "Нужно сделать")}
            />
            <Column
              arr={allCards.filter((card) => card.column === "В работе")}
            />
            <Column
              arr={allCards.filter((card) => card.column === "Тестирование")}
            />
            <Column arr={allCards.filter((card) => card.column === "Готово")} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
