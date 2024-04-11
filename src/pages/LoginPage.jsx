import Login from "../components/login/Login";
function LoginPage({ setIsAuth }) {
  return (
    <>
      <Login setIsAuth={setIsAuth} />
    </>
  );
}

export default LoginPage;
