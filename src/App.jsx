import PopQuitAccount from "./components/PopQuitAccount";
import PopNewCard from "./components/PopNewCard";
import "./App.css";
import PopBrowser from "./components/PopBrowse";
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
