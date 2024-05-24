import Card from "../card/Card";
import { ColumnCards, ColumnTitle, MainColumn } from "../column/Column.styled";

function Column({ arr, title }) {
  return (
    <MainColumn>
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
