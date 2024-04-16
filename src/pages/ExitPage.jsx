import PopQuitAccount from "../components/popups/PopQuitAccount/PopQuitAccount";

function ExitPage({ logout }) {
  return (
    <>
      <PopQuitAccount logout={logout} />
    </>
  );
}

export default ExitPage;
