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

function Registrator() {
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
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Имя"
              />
              <ModalInput
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
              />
              <ModalInput
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
              />
              <ModalBtnEnter id="SignUpEnter">
                <a href="../main.html">Зарегистрироваться</a>{" "}
              </ModalBtnEnter>
              <ModalFormGroup>
                <p>
                  Уже есть аккаунт? <a href="signin.html">Войдите здесь</a>
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
