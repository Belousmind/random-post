import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import { routes } from "@services/routes";

const Header = () => {
  return (
    <nav className={styles.header}>
      <Link to={routes.main.getLink()}>
        Главная
      </Link>
      <Link to={routes.randomPost.getLink()}>
        Рандомный пост
      </Link>
    </nav>
  );
};

export default Header; 