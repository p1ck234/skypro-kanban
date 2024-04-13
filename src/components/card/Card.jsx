import { Link, useNavigate } from "react-router-dom";
import * as S from "./Card.styled";
import { useRef, useState } from "react";
import { useClickOutside } from "../header/useClickOutside";
import { paths } from "../../lib/paths";

function Card({ cardTitle, cardName, cardDate, id }) {
  const getClassName = (title) => {
    if (!title) return "_gray"; // Handle case where title is null or undefined
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

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const menuRef = useRef(null);
  useClickOutside(menuRef, () => {
    if (isOpen) setIsOpen(false);
    navigate(paths.MAIN);
  });
  return (
    <S.CardItem>
      <S.CardsBlock ref={menuRef}>
        <S.CardGroup>
          <S.CardTheme $theme={getClassName(cardTitle)}>
            <p>{cardTitle}</p>
          </S.CardTheme>
          <Link to={`/card/${id}`}>
            <S.CardBtn>
              <div></div>
              <div></div>
              <div></div>
            </S.CardBtn>
          </Link>
        </S.CardGroup>
        <S.CardContent>
          <S.CardContentTitle>{cardName}</S.CardContentTitle>

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
