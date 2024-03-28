import Card from "../card/Card";

function Column({ arr }) {
  const columnTitle = arr.length > 0 ? arr[0].status : "Нет названия";
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{columnTitle}</p>
      </div>
      <div className="cards">
        {arr.map((el) => (
          <Card
            key={el.id}
            cardTitle={el.theme}
            cardName={el.title}
            cardDate={el.date}
          />
        ))}
      </div>
    </div>
  );
}

export default Column;
