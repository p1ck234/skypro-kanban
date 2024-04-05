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

function Login({ setIsAuth }) {
  const navigate = useNavigate();
  const login = () => {
    setIsAuth(true);
    navigate(paths.MAIN);
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
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              />
              <ModalInput
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />
              <ModalBtnEnter onClick={login} type="button" id="btnEnter">
                Войти
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
