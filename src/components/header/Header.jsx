import PopDrowdown from "../popups/PopDropdown";

function Header({ onCardAdd }) {
  return (
    <header className="header">
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
            <button
              onClick={onCardAdd}
              className="header__btn-main-new _hover01"
              id="btnMainNew"
            >
              <a href="#">Создать новую задачу</a>
            </button>
            <PopDrowdown onCardAdd={onCardAdd} />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
