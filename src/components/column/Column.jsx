import Card from "../card/Card";
import { ColumnCards, ColumnTitle, MainColumn } from "../column/Column.styled";

function Column({ arr }) {
  const columnTitle = arr.length > 0 ? arr[0].status : "Нет названия";
  return (
    <MainColumn>
      <ColumnTitle>
        <p>{columnTitle}</p>
      </ColumnTitle>
      <ColumnCards>
        {arr.map((el) => (
          <Card
            key={el.id}
            cardTitle={el.theme}
            cardName={el.title}
            cardDate={el.date}
          />
        ))}
      </ColumnCards>
    </MainColumn>
  );
}

export default Column;
