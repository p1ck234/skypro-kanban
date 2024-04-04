import Column from "../column/Column";
import { MainBlock, MainBox, MainContent } from "./Main.styled";
import { Container } from "../../styles/shared";
import Header from "../header/Header";

function Main({ cards, isLoading, onAdd }) {
  const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];
  return (
    <MainBox>
      <Header onCardAdd={onAdd} />
      <Container>
        <MainBlock>
          {isLoading ? (
            <div>Загрузка...</div>
          ) : (
            <MainContent>
              {statusList.map((status) => (
                <Column
                  key={status}
                  arr={cards.filter((card) => card.status === status)}
                />
              ))}
            </MainContent>
          )}
        </MainBlock>
      </Container>
    </MainBox>
  );
}

export default Main;
