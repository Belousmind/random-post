import { Link } from "react-router-dom";
import { ROUTES } from "../services/routes";

const Header = () => {
  return (
    <nav >
      <Link to={ROUTES.HOME}>
        Главная
      </Link>
      <Link to={ROUTES.POST}>
        Рандомный пост
      </Link>
    </nav>
  );
};

export default Header;