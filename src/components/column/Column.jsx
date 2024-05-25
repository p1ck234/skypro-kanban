import { useDrop } from "react-dnd";
import Card from "../card/Card";
import { ColumnCards, ColumnTitle, MainColumn } from "../column/Column.styled";

const ItemTypes = {
  CARD: "card",
};

function Column({ arr, title, onDropCard }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.CARD,
    drop: (item) => onDropCard(item.id, title),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <MainColumn
      ref={drop}
      style={{ backgroundColor: isOver ? "#f0f0f0" : "white" }}
    >
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <ColumnCards>
        {arr.map((el) => (
          <Card
            key={el._id}
            cardTitle={el.topic}
            cardName={el.title}
            cardDate={el.date}
            id={el._id}
          />
        ))}
      </ColumnCards>
    </MainColumn>
  );
}

export default Column;
