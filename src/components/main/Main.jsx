import Column from "../column/Column";
import { MainBlock, MainBox, MainContent } from "./Main.styled";
import { Container } from "../../styles/shared";

function Main({ cards }) {
  const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];
  return (
    <MainBox>
      <Container>
        <MainBlock>
          <MainContent>
            {statusList.map((status) => (
              <Column
                key={status}
                arr={cards.filter((card) => card.status === status)}
              />
            ))}
          </MainContent>
        </MainBlock>
      </Container>
    </MainBox>
  );
}

export default Main;
