import { Button } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Content from '../../components/content/Content';
import Search from '../../components/search/Search';
import { mockFoods } from '../../mock';
import styles from './shop.module.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';

function Shop() {
  const [total, setTotal] = useState(0);
  return (
    <div className="main">
      <div className="container">
        <div className={styles.title}>
          <Link to='/'>
            <AiOutlineArrowLeft />
          </Link>
          <h1>Order details</h1>
        </div>
        <div className="search">
          <Search />
        </div>
        <div className="content">
          <Content
            props={mockFoods}
            wc={true}
            total={total}
            setTotal={setTotal}
          />
        </div>
        <div className={styles.pay}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <p>Subtotal</p>
              <span>${total}</span>
            </li>
            <li className={styles.li}>
              <p>Delivery charge</p>
              <span>${total ? 5 : 0}</span>
            </li>
            <li className={styles.li}>
              <p>Discount</p>
              <span>${total ? 10 : 0}</span>
            </li>
            <li className={styles.total + ' ' + styles.li}>
              <p>Total</p>
              <span>${total ? total - 5 : 0}</span>
            </li>
          </ul>
          <Link to={total ? '/contact' : ''}>
            <Button
              variant="contained"
              className={styles.loginBtn}
            >
              Place my order
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Shop;
