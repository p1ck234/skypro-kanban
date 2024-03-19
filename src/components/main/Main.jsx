import { allCards } from "../../data";
import Column from "../column/Column";

function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            <Column
              arr={allCards.filter((card) => card.status === "Без статуса")}
            />
            <Column
              arr={allCards.filter((card) => card.status === "Нужно сделать")}
            />
            <Column
              arr={allCards.filter((card) => card.status === "В работе")}
            />
            <Column
              arr={allCards.filter((card) => card.status === "Тестирование")}
            />
            <Column arr={allCards.filter((card) => card.status === "Готово")} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
