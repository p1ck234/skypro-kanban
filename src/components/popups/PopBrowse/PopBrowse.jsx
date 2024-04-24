import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import Calendar from "../../calendar/Calendar";
import { paths } from "../../../lib/paths";
import { useRef, useState } from "react";
import { useClickOutside } from "../../header/useClickOutside";
import { useUserContext } from "../../context/hooks/useUser";
import { useTask } from "../../context/hooks/useTask";
import * as S from "./PopBrowser.styled";
import { topicHeader } from "../../../lib/topic";
import { TopicText } from "../../card/Card.styled";
import { deleteTodo, postToDo, putTodo } from "../../../api";

export default function PopBrowse() {
  const { id } = useParams();
  const { user } = useUserContext();
  const { cards, setCards } = useTask();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const [isEdited, setIsEdited] = useState(false);
  const openedCard = cards.find((card) => card._id == `${id}`);
  const [selectedDate, setSelectedDate] = useState(openedCard.date);
  const menuRef = useRef(null);
  useClickOutside(menuRef, () => {
    if (isOpen) setIsOpen(false);
    navigate(-1);
  });

  const [editTask, setEditTask] = useState({
    title: openedCard.title,
    description: openedCard.description,
    topic: openedCard.topic,
    status: openedCard.status,
    date: openedCard.date,
  });

  const deleteTask = () => {
    deleteTodo({ token: user.token, id: id })
      .then((newCard) => {
        setCards(newCard.tasks);
        navigate(paths.MAIN);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const taskData = {
      ...editTask,
      date: selectedDate,
    };
    putTodo({ token: user.token, id: id, taskData: taskData })
      .then((newCard) => {
        console.log(newCard);
        setCards(newCard.tasks);
        navigate(paths.MAIN);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
    postToDo({ token: user.token, taskData })
      .then((newCard) => {
        setCards(newCard.tasks);
        navigate(paths.MAIN);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditTask({
      ...editTask,
      [name]: value,
    });
  };

  if (!openedCard) {
    return <Navigate to={paths.MAIN} />;
  }
  return (
    <S.PopBrowseStyled>
      <S.PopBrowseContainer>
        <S.PopBrowseBlock ref={menuRef}>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBroweTitle>
                Название задачи: {openedCard.title}
              </S.PopBroweTitle>
              <S.PopBroweColor $themeColor={topicHeader[openedCard.topic]}>
                <TopicText $themeColor={topicHeader[openedCard.topic]}>
                  {openedCard.topic}
                </TopicText>
              </S.PopBroweColor>
            </S.PopBrowseTopBlock>
            <S.PopBrowseStatus>
              <S.StatusPsubTtlP>Статус</S.StatusPsubTtlP>
              {isEdited && (
                <S.StatusThemesDiv>
                  <S.OpenedCardTheme
                    isactived={editTask.status === "Без статуса"}
                    onClick={() =>
                      setEditTask({ ...editTask, status: "Без статуса" })
                    }
                  >
                    <p>Без статуса</p>
                  </S.OpenedCardTheme>

                  <S.OpenedCardTheme
                    isactived={editTask.status === "Нужно сделать"}
                    onClick={() =>
                      setEditTask({ ...editTask, status: "Нужно сделать" })
                    }
                  >
                    <p>Нужно сделать</p>
                  </S.OpenedCardTheme>
                  <S.OpenedCardTheme
                    isactived={editTask.status === "В работе"}
                    onClick={() =>
                      setEditTask({ ...editTask, status: "В работе" })
                    }
                  >
                    <p>В работе</p>
                  </S.OpenedCardTheme>

                  <S.OpenedCardTheme
                    isactived={editTask.status === "Тестирование"}
                    onClick={() =>
                      setEditTask({ ...editTask, status: "Тестирование" })
                    }
                  >
                    <p>Тестирование</p>
                  </S.OpenedCardTheme>

                  <S.OpenedCardTheme
                    isactived={editTask.status === "Готово"}
                    onClick={() =>
                      setEditTask({ ...editTask, status: "Готово" })
                    }
                  >
                    <p>Готово</p>
                  </S.OpenedCardTheme>
                </S.StatusThemesDiv>
              )}
              <S.OpenedCardTheme>
                {!isEdited && (
                  <S.StatusThemesDiv>
                    <S.StatusThemeActiveDiv>
                      {openedCard.status}
                    </S.StatusThemeActiveDiv>
                  </S.StatusThemesDiv>
                )}
              </S.OpenedCardTheme>
            </S.PopBrowseStatus>

            <S.PopBrowseWrap>
              <S.PopBrowseForm id="formBrowseCard" action="#">
                <S.FormBrowseBlock>
                  <S.FormBrowseTitle htmlFor="textArea01">
                    Описание задачи
                  </S.FormBrowseTitle>
                  {!isEdited && (
                    <S.FormBrowseArea
                      onChange={handleInputChange}
                      name="description"
                      id="textArea01"
                      readOnly=""
                      placeholder="Введите описание задачи..."
                      defaultValue={openedCard.description}
                      disabled={true}
                    />
                  )}
                  {isEdited && (
                    <S.FormBrowseArea
                      onChange={handleInputChange}
                      name="description"
                      id="textArea01"
                      readOnly=""
                      placeholder="Введите описание задачи..."
                      defaultValue={openedCard.description}
                      disabled={false}
                    />
                  )}
                </S.FormBrowseBlock>
              </S.PopBrowseForm>
              <Calendar
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            </S.PopBrowseWrap>

            {!isEdited && (
              <S.PopBrowseButtonBrowse>
                <S.ButtonGroup>
                  <S.ButtonChengeDelete
                    onClick={() => {
                      setIsEdited(!isEdited);
                    }}
                  >
                    Редактировать задачу
                  </S.ButtonChengeDelete>
                  <S.ButtonChengeDelete onClick={deleteTask}>
                    Удалить задачу
                  </S.ButtonChengeDelete>
                </S.ButtonGroup>
                <Link to={paths.MAIN}>
                  <S.ButtonClose>Закрыть</S.ButtonClose>
                </Link>
              </S.PopBrowseButtonBrowse>
            )}
            {isEdited && (
              <S.PopBrowseButtonBrowse>
                <S.ButtonGroup>
                  <S.ButtonChengeDelete onClick={handleFormSubmit}>
                    Сохранить
                  </S.ButtonChengeDelete>
                  <S.ButtonChengeDelete
                    onClick={() => {
                      setIsEdited(!isEdited);
                    }}
                  >
                    Отменить
                  </S.ButtonChengeDelete>

                  <S.ButtonChengeDelete onClick={deleteTask}>
                    Удалить задачу
                  </S.ButtonChengeDelete>
                </S.ButtonGroup>
                <Link to={paths.MAIN}>
                  <S.ButtonClose>Закрыть</S.ButtonClose>
                </Link>
              </S.PopBrowseButtonBrowse>
            )}
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowseStyled>
  );
}
