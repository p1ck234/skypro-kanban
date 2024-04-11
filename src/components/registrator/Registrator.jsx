import { Link } from "react-router-dom";
import { Wrapper } from "../../styles/shared";
import {
  ContainerSignup,
  Modal,
  ModalBlock,
  ModalBtnEnter,
  ModalForm,
  ModalFormGroup,
  ModalInput,
  ModalTtl,
} from "./Registrator.styled";
import { paths } from "../../lib/paths";
import { useState } from "react";
import { regPost } from "../../api";

function Registrator({ userLogin }) {
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleRegClick = async () => {
    if (!login.trim() || !password.trim()) {
      setError("Отсутствует одно из полей");
      return;
    }
    await regPost(name, login, password).then((responseData) => {
      userLogin(responseData.user);
    });
  };

  return (
    <Wrapper>
      <ContainerSignup>
        <Modal>
          <ModalBlock>
            <ModalTtl>
              <h2>Регистрация</h2>
            </ModalTtl>
            <ModalForm id="formLogUp" action="#">
              <ModalInput
                onSubmit={handleSubmit}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Имя"
              />
              <ModalInput
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                placeholder="Логин"
              />
              <ModalInput
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Пароль"
              />
              <ModalBtnEnter id="SignUpEnter" onClick={handleRegClick}>
                <Link>Зарегистрироваться</Link>
              </ModalBtnEnter>
              {error && <p style={{ color: "red", fontSize: 16, marginBottom:6}}>{error}</p>}
              <ModalFormGroup>
                <p>
                  Уже есть аккаунт? <Link to={paths.LOGIN}>Войдите здесь</Link>
                </p>
              </ModalFormGroup>
            </ModalForm>
          </ModalBlock>
        </Modal>
      </ContainerSignup>
    </Wrapper>
  );
}

export default Registrator;
