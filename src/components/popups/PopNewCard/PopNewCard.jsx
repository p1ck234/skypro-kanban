import { Link, useNavigate } from "react-router-dom";
import { paths } from "../../../lib/paths";
import Calendar from "../../calendar/Calendar";
import { useState } from "react";
import { postToDo } from "../../../api";
import { useUserContext } from "../../context/hooks/useUser";
import * as S from "./PopNewCard.styled";

function PopNewCard() {
  const [selected, setSelected] = useState();
  const [error, setError] = useState();
  const { user, setCards } = useUserContext();
  const navigate = useNavigate();
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    topic: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const taskData = { ...newTask, date: selected };

    try {
      const responseData = await postToDo({ ...taskData, token: user.token });
      setCards(responseData.tasks);
      navigate(-1);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <S.PopNewCard id="popNewCard">
      <S.PopNewCardContainer>
        <S.PopNewCardBlock>
          <S.PopNewCardContent>
            <S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
            <S.PopNewCardClose>
              <Link to={paths.MAIN}>&#10006;</Link>
            </S.PopNewCardClose>
            <S.PopNewCardWrap>
              <S.PopNewCardForm id="formNewCard" action="#">
                <S.FormNewBlock>
                  <S.subttl htmlFor="formTitle">Название задачи</S.subttl>
                  <S.FormNewInput
                    onChange={(e) =>
                      setNewTask({ ...newTask, title: e.target.value })
                    }
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </S.FormNewBlock>
                <S.FormNewBlock>
                  <S.subttl htmlFor="textArea">Описание задачи</S.subttl>
                  <S.FormNewArea
                    onChange={(e) =>
                      setNewTask({ ...newTask, description: e.target.value })
                    }
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></S.FormNewArea>
                </S.FormNewBlock>
              </S.PopNewCardForm>

              <Calendar selected={selected} setSelected={setSelected} />
            </S.PopNewCardWrap>
            <S.Categories>
              <S.categoriesP>Категория</S.categoriesP>
              {/* <label>
                Web Design
                <input
                  checked
                  type="radio"
                  value="Web Design"
                  onChange={(e) =>
                    setNewTask({ ...newTask, topic: e.target.value })
                  }
                />
              </label>
              <label>
                Research
                <input
                  type="radio"
                  value="Research"
                  onChange={(e) =>
                    setNewTask({ ...newTask, topic: e.target.value })
                  }
                />
              </label>
              <label>
                Copywriting
                <input
                  type="radio"
                  value="Copywriting"
                  onChange={(e) =>
                    setNewTask({ ...newTask, topic: e.target.value })
                  }
                />
              </label>

              <div className="categories__themes">
                <div className="categories__theme _orange _active-category">
                  <p className="_orange">Web Design</p>
                </div>
                <div className="categories__theme _green">
                  <p className="_green">Research</p>
                </div>
                <div className="categories__theme _purple">
                  <p className="_purple">Copywriting</p>
                </div>
              </div> */}
              <div>
                <S.CategoryTheme
                  isActive={newTask.topic === "Web Design"}
                  className="_orange"
                  onClick={() =>
                    setNewTask({ ...newTask, topic: "Web Design" })
                  }
                >
                  <p>Web Design</p>
                </S.CategoryTheme>
                <S.CategoryTheme
                  isActive={newTask.topic === "Research"}
                  className="_green"
                  onClick={() => setNewTask({ ...newTask, topic: "Research" })}
                >
                  <p>Research</p>
                </S.CategoryTheme>
                <S.CategoryTheme
                  isActive={newTask.topic === "Copywriting"}
                  className="_purple"
                  onClick={() =>
                    setNewTask({ ...newTask, topic: "Copywriting" })
                  }
                >
                  <p>Copywriting</p>
                </S.CategoryTheme>
              </div>
            </S.Categories>

            {error && (
              <p style={{ color: "red", fontSize: 16, marginBottom: 4 }}>
                {error}
              </p>
            )}
            <S.FormNewCreate onClick={handleSubmit} id="btnCreate">
              Создать задачу
            </S.FormNewCreate>
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
}

export default PopNewCard;
