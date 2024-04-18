import { Link, useNavigate } from "react-router-dom";
import { paths } from "../../../lib/paths";
import Calendar from "../../calendar/Calendar";
import { useState } from "react";
import { postToDo } from "../../../api";
import { useUserContext } from "../../context/hooks/useUser";

function PopNewCard() {
  const [selected, setSelected] = useState();
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
    postToDo({ ...taskData, token: user.token }).then((responseData) => {
      navigate(-1);
      setCards(responseData.tasks);
    });
  };
  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <Link to={paths.MAIN} className="pop-new-card__close">
              &#10006;
            </Link>

            <div className="pop-new-card__wrap">
              <form
                className="pop-new-card__form form-new"
                id="formNewCard"
                action="#"
              >
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                    onChange={(e) =>
                      setNewTask({ ...newTask, title: e.target.value })
                    }
                    className="form-new__input"
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    onChange={(e) =>
                      setNewTask({ ...newTask, description: e.target.value })
                    }
                    className="form-new__area"
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></textarea>
                </div>
              </form>
              <div className="calendar">
                <Calendar selected={selected} setSelected={setSelected} />
              </div>
            </div>
            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <label>
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

              {/* <div className="categories__themes">
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
            </div>
            <button
              onClick={handleSubmit}
              className="form-new__create _hover01"
              id="btnCreate"
            >
              Создать задачу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopNewCard;
