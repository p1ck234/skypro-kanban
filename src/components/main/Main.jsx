import Column from "../column/Column";
import { MainBlock, MainBox, MainContent } from "./Main.styled";
import { Container } from "../../styles/shared";
import Header from "../header/Header";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { putTodo } from "../../api"; // Make sure the path to your api file is correct
import { useNavigate } from "react-router-dom";

function Main({ cards, isLoading, setCards, error, user }) {
  const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];
  const navigate = useNavigate();
  const handleDropCard = async (id, newStatus) => {
    const card = cards.find((card) => card._id === id);
    const updatedCard = { ...card, status: newStatus };

    const updatedCards = cards.map((card) =>
      card._id === id ? updatedCard : card
    );
    setCards(updatedCards);

    try {
      const updatedCardFromApi = await putTodo({
        token: user.token,
        id: updatedCard._id,
        taskData: updatedCard,
      });

      const finalUpdatedCards = cards.map((card) =>
        card._id === id ? updatedCardFromApi : card
      );
      setCards(finalUpdatedCards);
      navigate(0);
    } catch (error) {
      console.error("Error updating card status:", error);

      const revertedCards = cards.map((card) =>
        card._id === id ? { ...card, status: card.status } : card
      );
      setCards(revertedCards);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <MainBox>
        <Header setCards={setCards} cards={cards} user={user} />
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
                      title={status}
                      arr={cards.filter((card) => card.status === status)}
                      onDropCard={handleDropCard}
                    />
                  ))
                )}
              </MainContent>
            )}
          </MainBlock>
        </Container>
      </MainBox>
    </DndProvider>
  );
}

export default Main;
