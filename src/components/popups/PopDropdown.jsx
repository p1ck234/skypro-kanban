import { useState } from "react";

const PopDrowdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <nav className="header__nav">
      <button className="header__btn-main-new _hover01" id="btnMainNew">
        <a href="#popNewCard">Создать новую задачу</a>
      </button>
      <a
        onClick={toggleDropdown}
        href="#user-set-target"
        className="header__user _hover02"
      >
        Ivan Ivanov
      </a>
      {isOpen && (
        <div className="header__pop-user-set pop-user-set" id="user-set-target">
          <p className="pop-user-set__name">Ivan Ivanov</p>
          <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
          <div className="pop-user-set__theme">
            <p>Темная тема</p>
            <input type="checkbox" className="checkbox" name="checkbox" />
          </div>
          <button type="button" className="_hover03">
            <a href="#popExit">Выйти</a>
          </button>
        </div>
      )}
    </nav>
  );
};

export default PopDrowdown;
