import { Routes, Route } from "react-router-dom";
import { paths } from "./lib/paths";
import MainPage from "./pages/MainPage";
import ExitPage from "./pages/ExitPage";
import LoginPage from "./pages/LoginPage";
import RegistratorPage from "./pages/RegistratorPage";
import CardPage from "./pages/CardPage";
import NotFoundPage from "./pages/NotFoundPage";
import PrivateRoutes from "./PrivateRoutes";
import { useState } from "react";

const AppRoutes = () => {
  const [isAuth, setIsAuth] = useState(false);
  console.log(isAuth);

  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes isAuth={isAuth} />}>
          <Route path={paths.MAIN} element={<MainPage />}>
            <Route path={paths.EXIT} element={<ExitPage setIsAuth={setIsAuth}/>} />
            <Route path={paths.CARD} element={<CardPage />} />
          </Route>
        </Route>

        <Route
          path={paths.LOGIN}
          element={<LoginPage setIsAuth={setIsAuth} />}
        />
        <Route path={paths.REGISTER} element={<RegistratorPage />} />
        <Route path={paths.ERROR} element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
