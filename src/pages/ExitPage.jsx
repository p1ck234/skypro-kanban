import PopQuitAccount from "../components/popups/PopQuitAccount/PopQuitAccount";

function ExitPage(setIsAuth) {
  return (
    <>
      <PopQuitAccount setIsAuth={setIsAuth} />
    </>
  );
}

export default ExitPage;
