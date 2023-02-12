import styles from './header.module.css';
import {
  AiFillHome,
  AiFillShop,
  AiOutlineNodeIndex,
  AiOutlineUser
} from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <nav className={styles.nav}>
        <Link className={styles.home} to="/">
          <AiFillHome />
          <span>Home</span>
        </Link>
        <Link className={styles.a} to="/shop">
          <AiFillShop />
        </Link>
        <Link className={styles.a} to="navigate">
          <AiOutlineNodeIndex />
        </Link>
        <Link className={styles.a} to="contact">
          <AiOutlineUser />
        </Link>
      </nav>
    </>
  );
}

export default Header;
