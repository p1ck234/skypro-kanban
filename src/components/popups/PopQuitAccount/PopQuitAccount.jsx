import {
  PopExit,
  PopExitBlock,
  PopExitButtonNo,
  PopExitButtonYes,
  PopExitContainer,
  PopExitForm,
  PopExitTtl,
} from "./PopQuitAccount.styles";

function PopQuitAccount() {
  return (
    <PopExit id="popExit">
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTtl>
          <form id="formExit" action="#">
            <PopExitForm>
              <PopExitButtonYes id="exitYes">
                <a href="modal/signin.html">Да, выйти</a>{" "}
              </PopExitButtonYes>
              <PopExitButtonNo id="exitNo">
                <a href="main.html">Нет, остаться</a>{" "}
              </PopExitButtonNo>
            </PopExitForm>
          </form>
        </PopExitBlock>
      </PopExitContainer>
    </PopExit>
  );
}

export default PopQuitAccount;
