import Main from "../components/main/Main";
import { Outlet } from "react-router-dom";
import { useUserContext } from "../components/context/hooks/useUser";

const MainPage = () => {
  const { user } = useUserContext();
  const { cards, setCards, error, isLoading } = useUserContext();

  return (
    <>
      <Main
        cards={cards}
        isLoading={isLoading}
        setCards={setCards}
        error={error}
        user={user}
      />
      <Outlet />
    </>
  );
};

export default MainPage;
