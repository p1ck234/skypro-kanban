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
import { Link, useNavigate } from "react-router-dom";
import { authPost } from "../../api";

function Login({ userLogin }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!login.trim() || !password.trim()) {
      setError("Отсутствует одно из полей");
      return;
    }
    try {
      const responseData = await authPost(login, password);
      userLogin(responseData.user);
      navigate(paths.MAIN);
    } catch (err) {
      setError(err.message);
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
