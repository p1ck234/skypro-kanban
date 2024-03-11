import Card from "./Card";

function Column({ columnTitle, arr }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{columnTitle}</p>
      </div>
      <div className="cards">
        {arr.map((el) => (
          <Card
            key={el.cardId}
            cardTitle={el.cardTitle}
            cardName={el.cardName}
            cardDate={el.cardDate}
          />
        ))}
      </div>
    </div>
  );
}

export default Column;
