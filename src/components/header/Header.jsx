import PopDrowdown from "../popups/PopDropdown";
import * as S from "./Header.styled";

function Header({ onCardAdd }) {
  return (
    <S.Header>
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </div>
          <nav className="header__nav">
            <S.HeaderBtn onClick={onCardAdd}>
              <a href="#">Создать новую задачу</a>
            </S.HeaderBtn>
            <PopDrowdown onCardAdd={onCardAdd} />
          </nav>
        </div>
      </div>
    </S.Header>
  );
}

export default Header;
