import styles from './header.module.css';
import { NavLink } from 'react-router-dom';
import { CartIcon, ChatIcon, HomeIcon, ProfileIcon } from '../../assets/icons';

const links = [
  {
    label: 'Home',
    icon: HomeIcon,
    to: '/'
  },
  {
    label: 'Orders',
    icon: CartIcon,
    to: 'shop'
  },
  {
    label: 'Address',
    icon: ChatIcon,
    to: 'navigate'
  },
  {
    label: 'Profile',
    icon: ProfileIcon,
    to: 'contact'
  }
];

function Header() {
  return (
    <div className={styles.bottomNavigation}>
      <div
        className="container"
        style={{ padding: 0 }}
      >
        <nav className={styles.nav}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ''}`
              }
            >
              <span className={styles.linkIcon}>
                <link.icon />
              </span>
              <span className={styles.linkLabel}> {link.label} </span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Header;
