import { useState } from "react";
import { paths } from "../../lib/paths";
import { Wrapper } from "../../styles/shared";
import {
  ContainerSignin,
  Modal,
  ModalBlock,
  ModalBtnEnter,
  ModalForm,
  ModalFormGroup,
  ModalInput,
  ModalTtl,
} from "./Login.styled";
import { Link } from "react-router-dom";
import { authPost } from "../../api";

function Login({ userLogin }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!login.trim() || !password.trim()) {
      setError("Отсутствует одно из полей");
      return;
    }
    try {
      const responseData = await authPost(login, password);
      userLogin(responseData.user);
    } catch (error) {
      if (error.response) {
        // Если сервер ответил, но с ошибкой
        if (error.response.status === 400) {
          alert("Неверные логин или пароль");
        } else {
          setError("Ошибка: " + error.response.status);
        }
      } else if (error.request) {
        // Если запрос был сделан, но ответ не был получен
        setError("Сервер не отвечает");
      } else {
        // Возникла другая ошибка
        setError("Что-то пошло не так: " + error.message);
      }
    }
  };

  return (
    <Wrapper>
      <ContainerSignin>
        <Modal>
          <ModalBlock>
            <ModalTtl>
              <h2>Вход</h2>
            </ModalTtl>
            <ModalForm id="formLogIn" onSubmit={handleSubmit}>
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
              <ModalBtnEnter type="submit" id="btnEnter">
                Войти
              </ModalBtnEnter>
              {error && (
                <p style={{ color: "red", fontSize: 16, marginBottom: 4 }}>
                  {error}
                </p>
              )}
              <ModalFormGroup>
                <p>Нужно зарегистрироваться?</p>
                <Link to={paths.REGISTER}>Регистрируйтесь здесь</Link>
              </ModalFormGroup>
            </ModalForm>
          </ModalBlock>
        </Modal>
      </ContainerSignin>
    </Wrapper>
  );
}

export default Login;
