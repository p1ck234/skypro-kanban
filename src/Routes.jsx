import { Routes, Route } from "react-router-dom";
import { paths } from "./lib/paths";
import MainPage from "./pages/MainPage";
import ExitPage from "./pages/ExitPage";
import LoginPage from "./pages/LoginPage";
import RegistratorPage from "./pages/RegistratorPage";
import CardPage from "./pages/CardPage";
import NotFoundPage from "./pages/NotFoundPage";
import PrivateRoutes from "./PrivateRoutes";

import { Wrapper } from "./styles/shared";
import NewCardPage from "./pages/NewCardPage";

// const checkLS = () => {
//   try {
//     return JSON.parse(localStorage.getItem("user"));
//   } catch {
//     localStorage.removeItem("user");
//     return null;
//   }
// };

// export const UserContext = createContext(null);
const AppRoutes = () => {
  //   const [user, setUser] = useState(checkLS());
  //   const navigate = useNavigate();
  //   const userLogin = (newUser) => {
  //     localStorage.setItem("user", JSON.stringify(newUser));
  //     setUser(newUser);
  //   };
  //   const logout = () => {
  //     localStorage.removeItem("user");
  //     setUser(null);
  //     navigate(paths.LOGIN);
  //   };

  return (
    <>
      <Wrapper>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path={paths.MAIN} element={<MainPage />}>
              <Route path={paths.CARD} element={<CardPage />} />
              <Route path={paths.EXIT} element={<ExitPage />} />
              <Route path={paths.NEWCARD} element={<NewCardPage />} />
            </Route>
          </Route>

          <Route path={paths.LOGIN} element={<LoginPage />} />
          <Route path={paths.REGISTER} element={<RegistratorPage />} />
          <Route path={paths.ERROR} element={<NotFoundPage />} />
        </Routes>
      </Wrapper>
    </>
  );
};

export default AppRoutes;
