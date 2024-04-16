import Registrator from "../components/registrator/Registrator";

function RegistratorPage({ userLogin }) {
  return (
    <>
      <Registrator userLogin={userLogin} />
    </>
  );
}

export default RegistratorPage;
