import Column from "../column/Column";
import { MainBlock, MainBox, MainContent } from "./Main.styled";
import { Container } from "../../styles/shared";
import Header from "../header/Header";

function Main({ cards, isLoading, setCards, error }) {
  const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];
  return (
    <MainBox>
      <Header setCards={setCards} cards={cards} />
      <Container>
        <MainBlock>
          {isLoading && cards ? (
            <div>Загрузка...</div>
          ) : (
            <MainContent>
              {cards &&
                statusList.map((status) => (
                  <Column
                    key={status}
                    arr={cards.filter((card) => card.status === status)}
                  />
                ))}
            </MainContent>
          )}
          {error && <p style={{ color: "red" }}>Произошла ошибка</p>}
        </MainBlock>
      </Container>
    </MainBox>
  );
}

export default Main;
