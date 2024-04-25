import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import "react-day-picker/dist/style.css";

function Calendar({ selected, setSelected }) {
  let footer = <p>Выберите срок исполнения.</p>;
  if (selected) {
    footer = <p>Вы выбрали {format(selected, "PP", { locale: ru })}</p>;
  }
  const modifiersStyles = {
    selected: {
      backgroundColor: "#007bff",
      color: "#fff",
    },
  };
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
      modifiersStyles={modifiersStyles}
    />
  );
}

export default Calendar;
