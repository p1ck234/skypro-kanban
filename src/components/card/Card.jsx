import * as S from "./Card.styled";

function Card({ cardTitle, cardName, cardDate }) {
  const getClassName = (title) => {
    switch (title.toLowerCase()) {
      case "copywriting":
        return "_purple";
      case "research":
        return "_green";
      case "web design":
        return "_orange";
      default:
        return "_gray";
    }
  };
  return (
    <S.CardItem>
      <S.CardsBlock>
        <S.CardGroup>
          <S.CardTheme $theme={getClassName(cardTitle)}>
            <p>{cardTitle}</p>
          </S.CardTheme>
          <a href="#popBrowse" target="_self">
            <S.CardBtn>
              <div></div>
              <div></div>
              <div></div>
            </S.CardBtn>
          </a>
        </S.CardGroup>
        <S.CardContent>
          <a href="" target="_blank">
            <S.CardContentTitle>{cardName}</S.CardContentTitle>
          </a>
          <S.CardContentDate>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
            >
              <g clipPath="url(#clip0_1_415)">
                <path
                  d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                  stroke="#94A6BE"
                  strokeWidth="0.8"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                  stroke="#94A6BE"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_415">
                  <rect width="13" height="13" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p>{cardDate}</p>
          </S.CardContentDate>
        </S.CardContent>
      </S.CardsBlock>
    </S.CardItem>
  );
}

export default Card;
