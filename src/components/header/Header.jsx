import { Link } from "react-router-dom";
import { Container } from "../../styles/shared";
import PopDrowdown from "../popups/PopDrowdown/PopDropdown";
import * as S from "./Header.styled";
import { paths } from "../../lib/paths";

function Header({ cards, setCards, user }) {
  const onCardAdd = () => {
    const newCard = {
      _id: cards.length + 1,
      topic: "Web Design",
      title: "Название задачи",
      date: "30.10.23",
      status: "Без статуса",
    };
    setCards([...cards, newCard]);
  };
  return (
    <S.Header>
      <Container>
        <S.HeaderBlock>
          <S.HeaderLogo>
            <Link to={paths.MAIN}>
              <img src="/logo.png" alt="logo" />
            </Link>
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
            <PopDrowdown user={user} onCardAdd={onCardAdd} />
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
}

export default Header;
