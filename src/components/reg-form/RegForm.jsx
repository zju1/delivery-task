import styles from './reg-form.module.css';
import UserIcon from './../../assets/icons/UserIcon.png';
import ParolIcon from './../../assets/icons/ParolIcon.png';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from '@mui/material';

export const RegForm = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.localStorage.getItem('user')) {
      navigate('/');
    }
  }, []);

  function SubmitHandle(e) {
    e.preventDefault();
    let user_name = e.target[0].value;
    let user_pass = e.target[1].value;
    if (user_name === 'deloclient' && user_pass == '12345') {
      window.localStorage.setItem('user', true);
      navigate('/');
    }
  }

  return (
    <form
      className={styles.form}
      onSubmit={(e) => SubmitHandle(e)}
    >
      <div className={styles.name}>
        <input
          type="text"
          className={styles.nameInput}
          placeholder="Name"
          required
        />
        <img
          src={UserIcon}
          alt=""
        />
      </div>
      <div className={styles.password}>
        <input
          type="password"
          className={styles.nameInput}
          placeholder="Password"
          required
        />
        <img
          src={ParolIcon}
          alt=""
        />
      </div>
      <div>
        <Button
          variant="contained"
          type="submit"
          className={styles.loginBtn}
        >
          Login
        </Button>
      </div>
    </form>
  );
};
