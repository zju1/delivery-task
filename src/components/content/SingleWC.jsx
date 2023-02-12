import { useState } from 'react';
import styles from './content.module.css';

function SingleWC({ props, total, setTotal }) {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.singleFood}>
      <div className={styles.wrap}>
        <div className={styles.img}>
          <img
            src={props.img}
            alt={props.name}
          />
        </div>
        <div className={styles.foodInfo}>
          <h3 className={styles.res}>{props.name}</h3>
          <p>{props.restaurant}</p>
          <span className={styles.pri}>${props.price}</span>
        </div>
      </div>
      <div className={styles.counter}>
        <button
          className={styles.counterBtn + ' ' + styles.minus}
          onClick={() => {
            if (count) {
              count < 1 ? setCount(0) : setCount(count - 1);
              total > 1 ? setTotal(total - +props.price) : setTotal(0);
            }
          }}
        >
          -
        </button>
        <p className={styles.count}>{count}</p>
        <button
          className={styles.counterBtn}
          onClick={() => {
            setCount(count + 1);
            setTotal(total + +props.price);
          }}
        >
          +
        </button>
        <button
          className={styles.delete}
          onClick={() => {
            setCount(0);
            setTotal(total - +(props.price * count).toFixed(2));
          }}
        >
          x
        </button>
      </div>
    </div>
  );
}

export default SingleWC;
