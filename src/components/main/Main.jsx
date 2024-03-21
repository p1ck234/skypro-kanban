import Column from "../column/Column";

function Main({ cards }) {
  const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {statusList.map((status) => (
              <Column
                key={status}
                arr={cards.filter((card) => card.status === status)}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
