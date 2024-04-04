import { useState } from "react";
import {
  HeaderPopUserSet,
  HeaderUser,
  PopUserButton,
  PopUserSetMail,
  PopUserSetName,
  PopUserSetTheme,
} from "./PopDropdown.style";

const PopDrowdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div>
      <HeaderUser onClick={toggleDropdown}>Ivan Ivanov</HeaderUser>
      {isOpen && (
        <HeaderPopUserSet id="user-set-target">
          <PopUserSetName>Ivan Ivanov</PopUserSetName>
          <PopUserSetMail>ivan.ivanov@gmail.com</PopUserSetMail>
          <PopUserSetTheme>
            <p>Темная тема</p>
            <input type="checkbox" name="checkbox" />
          </PopUserSetTheme>
          <PopUserButton>
            <a href="#popExit">Выйти</a>
          </PopUserButton>
        </HeaderPopUserSet>
      )}
    </div>
  );
};

export default PopDrowdown;