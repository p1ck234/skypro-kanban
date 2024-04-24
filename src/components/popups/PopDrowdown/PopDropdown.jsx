import { useRef, useState } from "react";
import {
  HeaderPopUserSet,
  HeaderUser,
  PopUserButton,
  PopUserSetMail,
  PopUserSetName,
} from "./PopDropdown.style";
import { Link } from "react-router-dom";
import { paths } from "../../../lib/paths";
import { useClickOutside } from "../../header/useClickOutside";

const PopDrowdown = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  useClickOutside(menuRef, () => {
    if (isOpen) setTimeout(() => setIsOpen(false), 50);
  });
  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div ref={menuRef}>
      <HeaderUser onClick={toggleDropdown}>{user.name}</HeaderUser>
      {isOpen && (
        <HeaderPopUserSet id="user-set-target">
          <PopUserSetName>Ivan Ivanov</PopUserSetName>
          <PopUserSetMail>ivan.ivanov@gmail.com</PopUserSetMail>
          {/* <PopUserSetTheme>
            <p>Темная тема</p>
            <input type="checkbox" name="checkbox" />
          </PopUserSetTheme> */}
          <Link to={paths.EXIT}>
            <PopUserButton>Выйти</PopUserButton>
          </Link>
        </HeaderPopUserSet>
      )}
    </div>
  );
};

export default PopDrowdown;
