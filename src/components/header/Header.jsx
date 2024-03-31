import { Container } from "../../styles/shared";
import PopDrowdown from "../popups/PopDrowdown/PopDropdown";
import * as S from "./Header.styled";

function Header({ onCardAdd }) {
  return (
    <S.Header>
      <Container>
        <S.HeaderBlock>
          <S.HeaderLogo>
            <a href="" target="_self">
              <img src="/logo.png" alt="logo" />
            </a>
          </S.HeaderLogo>
          {/* <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </div> */}
          <S.HeaderNav>
            <S.HeaderBtn onClick={onCardAdd}>
              <a href="#">Создать новую задачу</a>
            </S.HeaderBtn>
            <PopDrowdown onCardAdd={onCardAdd} />
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
}

export default Header;
