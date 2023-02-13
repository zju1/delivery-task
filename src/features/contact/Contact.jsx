import { Button } from '@mui/material';
import styles from './contact.module.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();
  function goSubmit(e) {
    e.preventDefault();
    navigate('/navigate');
  }
  return (
    <section className={styles.contact}>
      <div className="container noPadding">
        <div className={styles.title}>
          <div className="container">
            <div className={styles.title}>
              <Link to="/">
                <button>
                  <AiOutlineArrowLeft />
                </button>
              </Link>
              <h2>Add Address</h2>
              <button>
                <BsThreeDots />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <form
          className={styles.form}
          onSubmit={goSubmit}
        >
          <div className={styles.formContent}>
            <div className={styles.formElements}>
              <p>Please fill in your delivery information</p>
              <input
                placeholder="Phone no"
                type="text"
                required
              />
              <input
                type="text"
                required
                placeholder="Estate"
              />
              <input
                type="text"
                required
                placeholder="Email"
              />
              <input
                type="text"
                required
                placeholder="Industrial Area"
              />
              <div className={styles.select}>
                <Button variant="outlined">Pickup Station</Button>
                <Button variant="outlined">Deliver to Doorstep</Button>
              </div>
              <select className={styles.options}>
                <option value="station1">Compton</option>
                <option value="station2">Long Beach</option>
                <option value="station3">Detroit</option>
              </select>
            </div>
            <Button
              type="submit"
              size="large"
              className={styles.sub}
              variant="contained"
              color="error"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
