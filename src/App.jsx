import PopQuitAccount from "./components/popups/PopQuitAccount/PopQuitAccount";
import PopNewCard from "./components/popups/PopNewCard/PopNewCard";
import "./App.css";
import PopBrowser from "./components/popups/PopBrowse/PopBrowse";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { useEffect, useState } from "react";
import { allCards } from "./lib/data";
import { GlobalStyle } from "./styles/Global.styled";
import { Wrapper } from "./styles/shared";
import AppRoutes from "./Routes";

function App() {
  

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        {/* <Header onCardAdd={onCardAdd} />
    {isLoading ? (
      <div>Загрузка...</div>
    ) : (
      <>
        <Main cards={cards} />
        <PopQuitAccount />
        <PopNewCard />
        <PopBrowser />
      </>
    )} */}
        <AppRoutes />
      </Wrapper>
    </>
  );
}

export default App;
