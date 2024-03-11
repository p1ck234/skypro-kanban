import PopQuitAccount from "./components/popups/PopQuitAccount";
import PopNewCard from "./components/popups/PopNewCard";
import "./App.css";
import PopBrowser from "./components/popups/PopBrowse";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="wrapper">
      <PopQuitAccount />
      <PopNewCard />
      <PopBrowser />
      <Header />
      <Main />
    </div>
  );
}

export default App;
