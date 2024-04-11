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
          {error ? (
            <p style={{ color: "red", fontSize: 25 }}>
              Произошла ошибка, попробуйте позже...
            </p>
          ) : (
            <MainContent>
              {isLoading ? (
                <p style={{ color: "#94a6be", fontSize: 25 }}>Загрузка...</p>
              ) : (
                statusList.map((status) => (
                  <Column
                    key={status}
                    arr={cards.filter((card) => card.status === status)}
                  />
                ))
              )}
            </MainContent>
          )}
        </MainBlock>
      </Container>
    </MainBox>
  );
}

export default Main;
