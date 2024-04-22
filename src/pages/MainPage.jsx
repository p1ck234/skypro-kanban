import Main from "../components/main/Main";
import { Outlet } from "react-router-dom";
import { useUserContext } from "../components/context/hooks/useUser";
import { useTask } from "../components/context/hooks/useTask";

const MainPage = () => {
  const { user } = useUserContext();
  const { cards, setCards, error, isLoading } = useTask();


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
