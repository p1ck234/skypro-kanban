import Column from "./Column";

function Main() {
  const arrColumnNonTitle = [
    {
      cardId: 1,
      cardTitle: "Web Design",
      cardName: "Название задачи",
      cardDate: "30.10.23",
    },
    {
      cardId: 2,
      cardTitle: "Research",
      cardName: "Название задачи",
      cardDate: "30.10.23",
    },
    {
      cardId: 3,
      cardTitle: "Web Design",
      cardName: "Название задачи",
      cardDate: "30.10.23",
    },
    {
      cardId: 4,
      cardTitle: "Copywriting",
      cardName: "Название задачи",
      cardDate: "30.10.23",
    },
    {
      cardId: 5,
      cardTitle: "Web Design",
      cardName: "Название задачи",
      cardDate: "30.10.23",
    },
  ];

  const arrNeedDo = [
    {
      cardId: 1,
      cardTitle: "Research",
      cardName: "Название задачи",
      cardDate: "30.10.23",
    },
  ];

  const arrInWord = [
    {
      cardId: 1,
      cardTitle: "Research",
      cardName: "Название задачи",
      cardDate: "30.10.23",
    },
    {
      cardId: 2,
      cardTitle: "Copywriting",
      cardName: "Название задачи",
      cardDate: "30.10.23",
    },
    {
      cardId: 3,
      cardTitle: "Web Design",
      cardName: "Название задачи",
      cardDate: "30.10.23",
    },
  ];
  const arrTest = [
    {
      cardId: 1,
      cardTitle: "Research",
      cardName: "Название задачи",
      cardDate: "30.10.23",
    },
  ];
  const arrDone = [
    {
      cardId: 1,
      cardTitle: "Research",
      cardName: "Название задачи",
      cardDate: "30.10.23",
    },
  ];
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            <Column columnTitle={"Без названия"} arr={arrColumnNonTitle} />
            <Column columnTitle={"Нужно сделать"} arr={arrNeedDo} />
            <Column columnTitle={"В работе"} arr={arrInWord} />
            <Column columnTitle={"Тестирование"} arr={arrTest} />
            <Column columnTitle={"Готово"} arr={arrDone} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
