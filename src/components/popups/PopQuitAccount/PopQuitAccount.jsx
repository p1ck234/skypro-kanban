import { Link } from "react-router-dom";
import {
  PopExit,
  PopExitBlock,
  PopExitButtonNo,
  PopExitButtonYes,
  PopExitContainer,
  PopExitForm,
  PopExitTtl,
} from "./PopQuitAccount.styles";
import { paths } from "../../../lib/paths";
import { useNavigate } from "react-router-dom";

function PopQuitAccount({ setIsAuth }) {
  const navigate = useNavigate();
  const login = () => {
    setIsAuth(true);
    navigate(paths.MAIN);
  };
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
                <Link to={paths.LOGIN} onClick={login}>
                  Да, выйти
                </Link>
              </PopExitButtonYes>
              <PopExitButtonNo id="exitNo">
                <Link to={paths.MAIN}>Нет, остаться</Link>
              </PopExitButtonNo>
            </PopExitForm>
          </form>
        </PopExitBlock>
      </PopExitContainer>
    </PopExit>
  );
}

export default PopQuitAccount;
