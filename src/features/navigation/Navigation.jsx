import styles from './navigation.module.css';
import Search from '../../components/search/Search';
import Driver from './../../assets/images/driver.png';
import { AiOutlinePhone, AiOutlineMessage } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import GetMap from './MAP';

function Navigation() {
  return (
    <section className={styles.navigation}>
      <div className="container">
        <div className={styles.navi}>
          <div className={styles.search}>
            <Search />
          </div>
          <GetMap />
          <h3>Track orders</h3>
          <div className={styles.driver}>
            <img
              src={Driver}
              alt=""
            />
            <div className={styles.D_Info}>
              <p>Guy Hawkins</p>
              <span>10 mins on the way</span>
            </div>
            <div className={styles.link}>
              <span>
                <AiOutlinePhone />
              </span>
              <span>
                <AiOutlineMessage />
              </span>
            </div>
          </div>
          <Link to="/">
            <Button
              className={styles.home}
              variant="contained"
            >
              Home
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Navigation;
