import { useUser } from "@context/UserContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const logado = localStorage.getItem("token") || false;
  const { user, setUser } = useUser();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser({ id: '', name: '' });
    navigate("/")
  }

  return (
    <header className="bg-light p-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h1>Quikdev</h1>
        {logado ? (
          <button
            className="btn btn-danger"
            onClick={() => handleLogout()}
          >
            Deslogar | {user.name}
          </button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => {
              navigate("/")
            }}
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
