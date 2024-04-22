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
import { useRef, useState } from "react";
import { useClickOutside } from "../../header/useClickOutside";
import { useUserContext } from "../../context/hooks/useUser";

function PopQuitAccount() {
  const { logout } = useUserContext();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const menuRef = useRef(null);
  useClickOutside(menuRef, () => {
    if (isOpen) setIsOpen(false);
    navigate(-1);
  });
  return (
    <PopExit id="popExit">
      <PopExitContainer>
        <PopExitBlock ref={menuRef}>
          <PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTtl>
          <form id="formExit" action="#">
            <PopExitForm>
              <PopExitButtonYes onClick={logout} id="exitYes">
                <Link to={paths.LOGIN}>Да, выйти</Link>
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
