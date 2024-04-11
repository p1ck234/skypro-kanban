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
  // const navigate = useNavigate();
  // const login = () => {
  //   setIsAuth(true);
  //   navigate(paths.MAIN);
  // };
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await authPost(login, password).then((responseData) => {
      userLogin(responseData.user);
      // navigate(paths.MAIN);
    });
  };

  return (
    <Wrapper>
      <ContainerSignin>
        <Modal>
          <ModalBlock>
            <ModalTtl>
              <h2>Вход</h2>
            </ModalTtl>
            <ModalForm id="formLogIn" action="#">
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
              <ModalBtnEnter onClick={handleLogin} type="button" id="btnEnter">
                <Link to={paths.MAIN}>Войти</Link>
              </ModalBtnEnter>
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
